const userOTPService = async (code, email ,userModel) => {

   await userModel.updateOne(
      { email: email },
      { $set: { otp: code } },
      {upsert: true},
    );
}

module.exports = userOTPService;