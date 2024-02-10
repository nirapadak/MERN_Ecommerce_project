const router = require('express').Router();


const { BrandList, createBrand } = require('../controller/BrandController');
const { allCategories, createCategory } = require('../controller/catagoryController');
const profileController = require('../controller/profileController');
const ProductController = require('../controller/productController');
const userController = require('../controller/userController');
const AuthVerification = require('../middleware/AuthVerification');
// const token = require('../helpers/token.js');


// brand =================================================================
router.get('/brand', BrandList);
router.post('/brand-create', AuthVerification.authVerify, createBrand);
router.patch('/brand-update', AuthVerification.authVerify, createBrand);


// category ================================================================
router.get('/category', allCategories);
router.post('/create-category', AuthVerification.authVerify, createCategory);
router.patch('/update-category', AuthVerification.authVerify, createCategory);


router.get('/all-product', ProductController.allProduct);
router.post('/create-product', AuthVerification.authVerify, ProductController.createProduct);

// product sorting ==============================================================
router.get('/sliderList', ProductController.sliderList);
router.get('/product/:brandID', ProductController.productByBrand);
router.get('/product/:categoryID', ProductController.productByCategory);
router.get('/productBySimilar', ProductController.productBySimilar);
router.get('/productByKeyword', ProductController.productByKeyword);
router.get('/productReview', ProductController.productReview);

// product remarks =============================================
router.get('/product/:remark', ProductController.productByRemark);


router.get('/wishList', ProductController.wishList);
router.get('/cardList', ProductController.cardList);
router.get('/createCardList', ProductController.createCardList);
router.get('/removeCardList', ProductController.removeCardList);



//user Router ================================================
router.post('/userLogin/:email', userController.userLogin);
router.post('/verifyLogin/:email/:otp', userController.VerifyUser);
router.get('/send-email/:email', userController.sendOpt)
router.delete('/userLogout', AuthVerification.authVerify, userController.userLogout);
router.get('/user-profile', AuthVerification.authVerify, userController.userProfileDetails);
router.patch('/profile-saved', AuthVerification.authVerify, userController.userProfileSaved);

// profile create --------------------------------
router.post('/profile-create', AuthVerification.authVerify,profileController.createProfile);
router.patch('/update-profile', AuthVerification.authVerify, profileController.updateProfile)
router.delete('/delete-profile', AuthVerification.authVerify, profileController.deleteProfile);
router.get('/read-profile', AuthVerification.authVerify, profileController.readProfile)






module.exports = router;


