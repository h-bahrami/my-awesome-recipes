var express = require('express');
var router = express.Router();
var mongodb = require('mongodb').MongoClient;
const url = 'mongodb://mongo:27017/recipesDB';
const uuidv1 = require('uuid/v1');
uuidv1();

/* GET recipes */

router.get('/:id', function (req, res, next) {
  let id = req.params.id;
  let recipe = {};
  mongodb.connect(url, function (err, db) {
    var dbo = db.db("recipesDB");
    dbo.collection('recipes').findOne({ id: id }, { projection: { _id: 0 } }, function (err, result) {
      recipe = result;
      db.close();
      res.json(recipe);
    });
  });
});

router.get('/', function (req, res, next) {
  let recipes = [];
  mongodb.connect(url, function (err, db) {
    var dbo = db.db("recipesDB");
    dbo.collection('recipes').find().project({ _id: 0 }).toArray(function (err, result) {
      if (err) throw err;
      //recipes.push(result)
      result.forEach(item => recipes.push(item));
      db.close();
      res.json(recipes);
    });
  });
});

router.post('/', function (req, res, next) {
  let recipe = req.body;
  recipe.id = uuidv1();
  recipe.recordTime = new Date().toLocaleString();
  mongodb.connect(url, function (err, db) {
    var dbo = db.db("recipesDB");
    dbo.collection('recipes').insertOne(recipe);
    db.close();
    res.json(recipe);
  });

});

router.put('/', function (req, res, next) {
  let recipe = req.body;

  mongodb.connect(url, function (err, db) {
    var dbo = db.db("recipesDB");
    dbo.collection('recipes').updateOne({ id: recipe.id }, { $set: recipe }, { upsert: true });
    db.close();
    res.json(recipe);
  });

});

router.delete('/:id', function (req, res, next) {
  let id = req.params.id;
  mongodb.connect(url, function (err, db) {
    var dbo = db.db("recipesDB");
    dbo.collection('recipes').deleteOne({ id: id });
    db.close();
    res.sendStatus(200);
  });
});


module.exports = router;
