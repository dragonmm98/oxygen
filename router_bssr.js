const express = require("express");
const router_bssr = express.Router();
const dealerController = require("./controllers/dealerController")
const productController = require("./controllers/productController")
const uploader_products = require ("./utils/upload-multer")("products")
const uploader = require ("./utils/upload-multer")("members")

/**********************************
*--------------BSSR EJS-----------*
*********************************/

// Member related routers
router_bssr.get("/", dealerController.home);

router_bssr
.get("/signup", dealerController.getSignupMyDealerPage)
.post("/signup", uploader.single("dealers_img"),
 dealerController.signupProcess);

router_bssr
.get("/login", dealerController.getLoginMyDealerPage)
.post("/login", dealerController.loginProcess);

router_bssr.get ("/logout", dealerController.logout);

router_bssr.get("/products/menu", dealerController.getMyDealerProducts)

router_bssr.post ("/products/create",
dealerController.validateAuthDealer,
  uploader_products.array("product_images", 5),
   productController.addNewProduct);

 router_bssr.post ("/products/edit/:id",
 dealerController.validateAuthDealer,
 productController.updateChosenProduct);


router_bssr.get ("/all-dealers", 
dealerController.validateAdmin,
dealerController.getAllDealers);


 router_bssr.post ("/all-dealers/update", 
 dealerController.validateAdmin,
 dealerController.getAllDealersUpdate);





module.exports= router_bssr;