const Member = require("../models/Member");
let memberController = module.exports;
const jwt = require('jsonwebtoken');
const assert = require("assert");
const Definer = require("../lib/mistake");

memberController.signup = async (req,res) => {
    try{
        console.log ("POST:connect/signup");
        const data  = req.body;
        const member = new Member();
        const new_member = await member.signupData(data);

        const token =  memberController.createToken(new_member);
      res.cookie("access_token", token, {maxAge: 6 * 3600 * 1000,
         httpOnly: false,
         });
         
        
        res.json ({state:"succeed", data: new_member});
    } catch(err){
        console.log (`ERROR, connect/signup, ${err.message}`);
        res.json({ state:"fail", message: err.message});
    }
};
// ** Login **
memberController.login = async (req,res) => {
    try{
        console.log ("POST:connect/login");
        const data  = req.body;
        const member = new Member();
        const result = await member.loginData(data);

      const token =  memberController.createToken(result);
      res.cookie("access_token", token, {maxAge: 6 * 3600 * 1000,
         httpOnly: false,
         });
        
        res.json ({state:"succeed", data: result});
    } catch(err){
        console.log (`ERROR, connect/login, ${err.message}`);
        res.json({ state:"fail", message: err.message});
    }
};
//**Logout**/

memberController.logout = (req,res) => {
    console.log ("Get connect/logout");
    res.cookie("access_token", null, {maxAge: 0, httpOnly: true});
    res.json ({state:"succeed", data: "Logout Successfully"});
};



memberController.createToken = (result) => {
    try {
        const upload_data = {
            _id: result._id,
            mb_nick: result.mb_nick,
            mb_type: result.mb_type
        };
        const token = jwt.sign (
            upload_data,
            process.env.SECRET_TOKEN,
            {expiresIn: '6h',}
        );

        assert.ok(token, Definer.auth_err4);
        return token


    } catch (err) {
      throw err;
    }
}