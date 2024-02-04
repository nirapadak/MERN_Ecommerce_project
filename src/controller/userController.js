const SendEmailUtility = require("../utility/sendEmail");
const userModel = require("../models/userModel");
const userOTPService = require("../services/userService/userOTPService");
const userVerifyService = require("../services/userService/userVerifyService");
const jwt = require('jsonwebtoken');


// create an user --------------------------------------------
//==============================================================
exports.userLogin = async (req, res) => {
  const email = req.params.email
  let code = Math.floor(100000 + Math.random() * 900000);
  let EmailText = "Email Verification Code is " + code;
  
  try {
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
    let findUser = await userModel.findOne({ email: email });
    if (!findUser) {
      return res.json({
        "massage": "user not found",
        "success": false,
      })
    }
    let EmailText = "Your Email Verification Code is: " + code;

    await SendEmailUtility(email, EmailText, "Email Verification Code");
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

  const verify = await userVerifyService(otp, email, userModel);
  

  if (verify == 1) {
    // token encoded ---------------------------
    let token = jwt.sign({ email: email }, process.env.SECRET_KEY, { expiresIn: '7d' })

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
    let email = req.params.email;
    // find  user -----
    let exists = await userModel.findOne({ email: email });
    
    console.log(exists);

    if (!exists) {
      return res.json({
        "massage": "user does not exist",
        success: false,
      })
    }
    // user deleted successfully
    const userDelete = await userModel.findByIdAndDelete(exists._id, { projection: { _id:1,email:1}});

     res.status(200).json({
        message: "user logout successful",
        success: true,
        "email": email,
        userDelete,
      })

  
     } catch (error) {
    res.json({
      error,
      "massage": "error",
      success: false,
    })
  }
}