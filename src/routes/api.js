const router = require('express').Router();


const { BrandList } = require('../controller/BrandController');
const { allCategories } = require('../controller/catagoryController');
const profileController = require('../controller/profileController');
const ProductController = require('../controller/productController');
const userController = require('../controller/userController');
const AuthVerification = require('../middleware/AuthVerification');
// const token = require('../helpers/token.js');


router.get('/brand', BrandList);

router.get('/category', allCategories);

router.get('/all-product', ProductController.allProduct);
router.post('/create-product', AuthVerification.authVerify, ProductController.createProduct);


router.get('/sliderList', ProductController.sliderList);
router.get('/categoryByList', ProductController.listByCategory);
router.get('/listByBrand', ProductController.listByBrand);
router.get('/listBySimilar', ProductController.listBySimilar);
router.get('/listByKeyword', ProductController.listByKeyword);
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


