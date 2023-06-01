const jwt = require('jsonwebtoken');
const config = require('../config/config');
const UserColl = require('../models/user.model');
const OtpColl = require('../models/otp.model');

module.exports = {
  generateToken,
  findUserByPhoneNumber
};

function generateToken(user) {
  const payload = JSON.stringify(user);
  return jwt.sign(payload, config.jwtSecret);
}

async function findUserByPhoneNumber(phoneNumber, next){
  if (phoneNumber) {
    const userData = await UserColl.findOne({userName: phoneNumber});
    if (!userData) {
      next({status: 400, message: 'Phone Number does not exist..!'})
    } else {
      const randomNum = Math.floor(1000 + Math.random() * 9000);
      let expiresOn = new Date();
      expiresOn.setMinutes(expiresOn.getMinutes() + 10);
      const result = await OtpColl.create({contactNumber: phoneNumber, loginOtp: randomNum, active:true, expiresOn: expiresOn});
      if (!result) {
        next({status: 400, message: 'Error in sending OPT..!'})
      }else{
        const message = 'Successfully sent OTP to ' + ' '+ phoneNumber;
        next({status: 200, message: message})
      }
    }
  }
}
