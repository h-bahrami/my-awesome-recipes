

var multer = require('multer');

const upload = multer({
    dest: __dirname + '/uploads/',
    limits: {
        fileSize: 4 * 1024 * 1024, // 4MB
    },

});

module.exports = upload