const { Mongoose, default: mongoose } = require("mongoose");

exports.member_type_enums = ["USER","ADMIN","DEALER"];
exports.member_status_enums = ["ONPAUSE","ACTIVE","DELETED"];
exports.ordernary_enums = ["Y","N"];
exports.product_collection_enums = ["NEW","USED"];
exports.product_fuel_enums = ["GASOLINE","DIESEL","GAS","ELECTRIC","HYBRID"]
exports.product_status_enums = ["RESERVED","PROCESS","SOLD","DELETED"]
exports.product_size_enums= ["ORDINARY","SPORT","MINI","VAN"];
exports.product_company_enums = ["Tesla","BMW","Ferrari","Ford","Porsche",
"Honda","Lamborghini", "Toyota","Bentley", "Maserati","Audi","Jeep","Subaru","Cadillac","Hyundai","KIA","Samsung","Honda"]


/*****************MongoDB Related Commands ********************/


exports.shapeIntoMongooseObjectId= (target) => {
    if(typeof target === 'string') {
        return new mongoose.Types.ObjectId(target);
    } else return target; 
};
