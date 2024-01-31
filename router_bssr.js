const express = require("express");
const router_bssr = express.Router();
const dealerController = require("./controllers/dealerController")

/**********************************
*--------------BSSR EJS-----------*
*********************************/

// Member related routers
router_bssr.get("/", dealerController.home);

router_bssr
.get("/signup", dealerController.getSignupMyDealerPage)
.post("/signup", dealerController.signupProcess);

router_bssr
.get("/login", dealerController.getLoginMyDealerPage)
.post("/login", dealerController.loginProcess);

router_bssr.get ("/logout", dealerController.logout);



module.exports= router_bssr;