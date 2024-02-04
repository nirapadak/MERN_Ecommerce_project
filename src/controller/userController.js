const SendEmailUtility = require("../utility/sendEmail");
const userModel = require("../models/userModel");
const userOTPService = require("../services/userService/userOTPService");
const userVerifyService = require("../services/userService/userVerifyService");
const jwt = require('jsonwebtoken');


// create an user --------------------------------------------
//==============================================================
exports.userLogin = async (req, res) => {
  const email = req.params.email
  // create a random number ---------------------------
  let code = Math.floor(100000 + Math.random() * 900000);
  let EmailText = "Email Verification Code is " + code;
  
  try {
    // send otp code -------------------------------------
    await SendEmailUtility(email, EmailText, "Email Verification Code");
    await userOTPService(code, email, userModel);


    return res.status(200).json({
    message: "user login successful",
      successful: email,
    "success": true,
    })
    
  } catch (error) {
    return res.status(500).json({
      message: "Internal server error",
      success: false,
    })
  }
}



// send email notification and Otp send  -----------------------------
// ====================================================================
exports.sendOpt = async (req, res) => {
  try {
    // create an Otp ----
    let code = Math.floor(100000 + Math.random() * 900000);
    let email = req.params.email;
    // user find with email -------------
    let findUser = await userModel.findOne({ email: email });
    if (!findUser) {
      return res.json({
        "massage": "user not found",
        "success": false,
      })
    }
    let EmailText = "Your Email Verification Code is: " + code;

    await SendEmailUtility(email, EmailText, "Email Verification Code");
    // send the email with otp code here ----------------
    await userOTPService(code, email, userModel);

    res.status(200).json({
      "success": true,
      "message": "we have send an email successfully and check your email"
    })
    

  } catch (error) {
    res.json({
      "massage": error,
      success: false,
    })
  }
}

// user verification ---------------------------------------
//================================================================
exports.VerifyUser = async (req, res) => {

  let email = req.params.email;
  let otp = req.params.otp;
// otp update
  const verify = await userVerifyService(otp, email, userModel);
  

  if (verify == 1) {
    // find user Id ========
    let user_id = await userModel.find({ email: email, otp: otp }).select('_id')
    // user id print -----------------------------
    console.log(user_id[0]['_id'].toString());
    // token encoded ---------------------------
    let token = jwt.sign({ email: email, id:user_id[0]['_id'].toString() }, process.env.SECRET_KEY, { expiresIn: '7d' })

    // otp updated and 0 value -----------------------------
    let successful = await userModel.findOneAndUpdate(
      { email: email },//filter
      { otp: "" },// update
      {
        projection: { _id: 0, email: 1 }, // return only username and status
        upsert: false,// do not create new Document ----
      });


    return res.status(200).json({
      message: "user Verification successful",
      success: true,
      token: token,
      successful
    })


  } else {
    return res.status(200).json({
      message: "Invalid OTP",
      success: false,
    })
  }

}


// user logout =============================================================
//============================================================================
exports.userLogout = async (req, res) => {

  try {
    // find  user -----
    let exists = await userModel.findOne({email: req.headers.email});
    
    console.log(exists);
    //if don't exist then this massage ---- 
    if (!exists) {
      return res.json({
        "massage": "user does not exist",
        success: false,
      })
    }
    // user delete ------------------------------
    const userDelete = await userModel.findByIdAndDelete(req.headers.id, { projection: { _id:1,email:1}});

     res.status(200).json({
        message: "user logout successful",
        success: true,
        userDelete,
      })

  
     } catch (error) {
    res.status(401).json({
      error,
      "massage": "error",
      success: false,
    })
  }
}

// user profile Details ==========================================
// ===============================================================

exports.userProfileDetails = async (req, res) => {
  try {
    let userId = req.headers.id;
// user find and get data -------------------------------------------
    const userDetails = await userModel.findById({ _id: userId },);
// user show data----------
    res.json({
      "success": true,
      "massage": userId,
      "userDetails": userDetails,
    })
    

  } catch (error) {
    res.json({
      "success": false,
      "error": error,
      "massage": "something went wrong",
    })
  }
}


// user profile saved ==============================================
// =================================================================

exports.userProfileSaved = async (req, res) => {
  try {
    let userID = req.headers.id;
    let reqBody = req.body;

    // user profile saved =============================================

    await userModel.findOneAndUpdate({_id: userID}, {$set: reqBody}, {upsert: true});
    res.status(200).json({
      "success": true,
      "massage": "user data saved successfully",
    })

  } catch (error) {
    res.status(401).json({
      "success": false,
      "message": "user profile saved failed",
      "error": error,
    })
  }
}