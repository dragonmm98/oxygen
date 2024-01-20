const dotenv = require("dotenv");
dotenv.config();

const mongoose = require("mongoose");
mongoose.set('strictQuery', false);
const connectionToString = process.env.MONGO_URL



mongoose.connect (
    connectionToString, 
    {
      useNewUrlParser:true,
     useUnifiedTopology:true,
}, 
(err) =>{
     if (err) console.log("Error on Connection to MOngoDB");
     
else {
console.log ('Mongoose Connected SUccesfully');


    
const server =require ("./app");
let port= process.env.PORT || 3013;
server.listen(port,function (){
console.log (`The server is running successfully on port ${port},http://localhost:${port}`)
})
}    
}
)
































