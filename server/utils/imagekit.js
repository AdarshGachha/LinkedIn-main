// SDK initialization

var ImageKit = require("imagekit");

exports.initImageKit = function(){
    var imagekit = new ImageKit({
        publicKey: process.env.PUBLIC_kEY_IMAGKIT,
        privateKey: process.env.PRIVATE_kEY_IMAGKIT,
        urlEndpoint: process.env.ENDPPOINTURL_IMAGKIT,
      });

    return imagekit;
}

