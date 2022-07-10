import db from "../models/index";
import bcrypt from "bcryptjs";
let salt = bcrypt.genSaltSync(10);
const hasPassword = (password) => {
  return bcrypt.hashSync(password, salt);
};
const checkEmailExist = async (userEmail) => {
  let user = await db.User.findOne({
    where: {
      email: userEmail,
    },
  });
  if (user) {
    return true;
  }
  return false;
};
const checkPhoneExist = async (userPhone) => {
  let user = await db.User.findOne({
    where: {
      phone: userPhone,
    },
  });
  if (user) {
    return true;
  }
  return false;
};
const createUserService = async (userData) => {
  try {
    let isEmailExist = await checkEmailExist(userData.email);

    if (isEmailExist) {
      return {
        EM: "the email is already exist",
        EC: 1,
      };
    }
    let isPhoneExist = await checkPhoneExist(userData.phone);
    if (isPhoneExist) {
      return {
        EM: "the phoneNumber is already exist",
        EC: 1,
      };
    }
    //hash user password
    let hashPassword = hasPassword(userData.password);
    //create new user
    const rows = await db.User.create({
      email: userData.email,
      phone: userData.phone,
      password: hashPassword,
      username: userData.username,
    });
    return {
      EM: "a user is created secess",
      EC: 0,
    };
  } catch (e) {
    console.log(">>>>>>>>>>>>check error:", e);
    return {
      EM: "something wrongs is sevice",
      EC: -2,
    };
  }
  //check email/phone number (check trong database)
};
module.exports = {
  createUserService,
};
