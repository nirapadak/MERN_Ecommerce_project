const profileModel = require('../../models/profileModel');


const userProfile =async (req) => {
  try {
    
    return { "success": true, "massage": "profile saved and Changed" };
  } catch (error) {
    return { "success": false, "massage": "profile save error!", error: error};
  }

}

module.exports = userProfile;