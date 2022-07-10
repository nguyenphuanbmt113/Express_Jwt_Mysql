import mysql from "mysql2/promise";
import db from "../models/index";
const bluebird = require("bluebird");
import bcrypt from "bcryptjs";
let salt = bcrypt.genSaltSync(10);

const hasPassword = (password) => {
  return bcrypt.hashSync(password, salt);
};
const createNewsUser = async (email, password, username) => {
  let hashPass = hasPassword(password);
  try {
    await db.User.create({
      username: username,
      email: email,
      password: hashPass,
    });
  } catch (err) {
    console.log(">>>>>>>>>>>>>>check error: ", err);
  }
};
const getUserList = async () => {
  try {
    const user = await db.User.findAll();
    return user;
  } catch (err) {
    console.log(">>>>>>.check erorr: ", err);
  }
};
let deleteUserVervice = async (id) => {
  try {
    await db.User.destroy({
      where: { id: id },
    });
  } catch (err) {
    console.log("check: ", err);
  }
};
const updateUserById = async (userId) => {
  try {
    const userpage = await db.User.findOne({
      where: {
        id: userId,
      },
    });
    console.log("check userpage:", userpage);
    return userpage;
  } catch (e) {
    console.log("check err:", e);
  }
};
const updateDataUser = async (email, username, id) => {
  try {
    await db.User.update(
      {
        email: email,
        username: username,
      },
      {
        where: {
          id: id,
        },
      }
    );
  } catch (e) {
    console.log(">>>>>>>>>>>>>>check err:", e);
  }
};
module.exports = {
  createNewsUser,
  getUserList,
  deleteUserVervice,
  updateUserById,
  updateDataUser,
};
