const profileModel = require('../models/profileModel');

// profile create  ==========================================
exports.createProfile = async(req, res) => {
   try {
    let user_id = req.headers.id;
    let reqBody = req.body;
    reqBody.userID = user_id;

    // this is update and create in one method -----------------------------------
   await profileModel.updateOne({ userID: user_id }, { $set: reqBody }, { upsert: true });

    res.status(200).json({
      "massage": "profile saved successfully",
      "success": true,
    })


  } catch (error) {
    res.json({
      "massage": "Error creating profile",
      "success": false,
      "error": error
    })
    
  }
  }


// update profile ==============================================
exports.updateProfile = async (req, res) => {
   try {
    let user_id = req.headers.id;
    let reqBody = req.body;
    reqBody.userID = user_id;

    // this is update and create in one method -----------------------------------
   await profileModel.updateOne({ userID: user_id }, { $set: reqBody }, { upsert: true });

    res.status(200).json({
      "massage": "profile update successfully",
      "success": true,
    })


  } catch (error) {
    res.json({
      "massage": "Error update profile",
      "success": false,
      "error": error
    })
    
  }
}

// profile delete  ==========================================
exports.deleteProfile = async (req, res) => {
  try {
    let user_id = req.headers.id;
    let findUserProfile = await profileModel.findOneAndDelete({ userID: user_id });
    if (!findUserProfile) {
      return res.json({
        "massage": "profile not found",
        "success": false,
      });
    }
    res.json({
        "massage": "profile deleted successfully",
        "success": true,
      })
  } catch (error) {
    res.json({
      "massage": "error deleting profile",
      "success": false,
      "error": error
    })
  }
}

// profile Read  ==========================================
exports.readProfile = async (req, res) => {
  try {
    let user_id = req.headers.id;
    let profileData = await profileModel.findOne({userID: user_id});
    if (!profileData) {
      return res.status(404).json({
        "error": "Profile not found",
        "massage": "Unable to find profile",
        "success": false,
      })
    }
    res.json({
      "success": true,
      "massage": "Profile Read Success",
      "data":profileData,
    })
  } catch (error) {
    res.json({
      "error": error,
      "massage": "error reading profile",
      "success": false,
    })
  }
}
