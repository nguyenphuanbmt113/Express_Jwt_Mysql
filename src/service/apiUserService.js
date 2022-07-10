import db from "../models/index";
import { Op } from "sequelize";
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
const checkPassword = (password, hashPassword) => {
  return bcrypt.compareSync(password, hashPassword); //true/false
};
const handleUserLoginService = async (rawData) => {
  try {
    //leve1: check email and phone exis
    let user = await db.User.findOne({
      where: {
        [Op.or]: [{ email: rawData.valueLogin }, { phone: rawData.valueLogin }],
      },
    });
    if (user) {
      console.log(">>>found user with email/phone");
      let isCorrectPassword = checkPassword(rawData.password, user.password);
      if (isCorrectPassword) {
        return {
          EM: "ok!",
          EC: 0,
          DT: "",
        };
      }
    }
    return {
      EM: "your email/phone number or password is incorrect",
      EC: 1,
      DT: "",
    };
  } catch (er) {
    console.log(">>>>check er: ", er);
    return {
      EM: "something wrongs in service",
      EC: -2,
    };
  }
};
module.exports = {
  createUserService,
  handleUserLoginService,
};
