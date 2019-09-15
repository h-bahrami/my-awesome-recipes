var express = require('express');
var router = express.Router();
const uuidv1 = require('uuid/v1');
uuidv1();
const upload = require('../uploadMiddleware');
var fs = require('fs');
var path = require('path');


router.post('/', upload.single('photo'), async function (req, res) {

    await console.log('post');
    const tempPath = req.file.path;
    const name = `${uuidv1()}.png`;

    const targetPath = path.join(`./uploads/${name}`);
    console.log(tempPath, targetPath);
    if (path.extname(req.file.originalname).toLowerCase() === ".png") {
        fs.rename(tempPath, targetPath, err => {
            if (err) return handleError(err, res);

            res.status(200).json({ name });
        });
    } else {
        fs.unlink(tempPath, err => {
            if (err) return handleError(err, res);

            res.status(403).json({ error: "Only .png files are allowed!" });
        });
    }

});

router.get("/:name", (req, res) => {
    res.sendFile(path.join(__dirname, `../uploads/${req.params.name}`));
});

module.exports = router;