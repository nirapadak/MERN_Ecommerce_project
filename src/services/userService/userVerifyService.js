const userVerifyService = async (code, email ,userModel) => {
  return await userModel.find({ email: email, otp: code }).count('total');
}

module.exports = userVerifyService;