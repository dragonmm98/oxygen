const { Mongoose, default: mongoose } = require("mongoose");

exports.member_type_enums = ["USER","ADMIN","DEALER"];
exports.member_status_enums = ["ONPAUSE","ACTIVE","DELETED"];
exports.ordernary_enums = ["Y","N"];
exports.product_collection_enums = ["NEW","USED"];
exports.product_size_enums= ["ORDINARY","SPORT","MINI","CAP"];
exports.product_volume_enums= [0.5,1,1.2,1.5,2];


/*****************MongoDB Related Commands ********************/


exports.shapeIntoMongooseObjectId= (target) => {
    if(typeof target === 'string') {
        return new mongoose.Types.ObjectId(target);
    } else return target; 
};
