const router = require('express').Router();


const { BrandList } = require('../controller/BrandController');
const { CategoryController } = require('../controller/catagoryController');
const ProductController = require('../controller/productController');
const userController = require('../controller/userController');
const AuthVarification = require('../middleware/AuthVarification');


router.get('/brand', BrandList);
router.get('/category', CategoryController);



router.get('/sliderList', ProductController.sliderList);
router.get('/categoryByList', ProductController.listByCategory);
router.get('/listByBrand', ProductController.listByBrand);
router.get('/listBySimilar', ProductController.listBySimilar);
router.get('/listByKeyword', ProductController.listByKeyword);
router.get('/productReview', ProductController.productReview);
router.get('/productDetails', ProductController.productDetails);
router.get('/listByRemark', ProductController.listByRemark);
router.get('/wishList', ProductController.wishList);
router.get('/cardList', ProductController.cardList);
router.get('/createCardList', ProductController.createCardList);
router.get('/removeCardList', ProductController.removeCardList);




router.post('/userLogin/:email', userController.userLogin);
router.post('/verifyLogin/:email/:otp', userController.VerifyUser);
router.get('/send-email/:email', userController.sendOpt)
router.delete('/userLogout/:email', AuthVarification.authVerify, userController.userLogout);





module.exports = router;

