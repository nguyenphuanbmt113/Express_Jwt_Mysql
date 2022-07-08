import mysql from "mysql2/promise";
import bcrypt from "bcryptjs";
let salt = bcrypt.genSaltSync(10);
import db from "../models/index";
const bluebird = require("bluebird");

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
  const connection = await mysql.createConnection({
    host: "localhost",
    user: "root",
    database: "jwt2",
    Promise: bluebird,
  });
  try {
    const [rows, fields] = await connection.execute("SELECT * FROM `user`");
    return rows;
  } catch (err) {
    console.log("check: ", err);
  }
};
let deleteUserVervice = async (id) => {
  const connection = await mysql.createConnection({
    host: "localhost",
    user: "root",
    database: "jwt2",
    Promise: bluebird,
  });
  try {
    const [rows, fields] = await connection.execute(
      "DELETE FROM user WHERE id = ?",
      [id]
    );
    return rows;
  } catch (err) {
    console.log("check: ", err);
  }
};
const updateUserById = async (userId) => {
  const connection = await mysql.createConnection({
    host: "localhost",
    user: "root",
    database: "jwt2",
    Promise: bluebird,
  });
  try {
    const [rows, fields] = await connection.execute(
      "select * from user WHERE id = ?",
      [userId]
    );
    return rows;
  } catch (e) {
    console.log("check err:", e);
  }
};
const updateDataUser = async (email, username, id) => {
  const connection = await mysql.createConnection({
    host: "localhost",
    user: "root",
    database: "jwt2",
    Promise: bluebird,
  });
  try {
    const [rows, fields] = await connection.execute(
      "update user set email = ?, username = ? where id = ?",
      [email, username, id]
    );
    return rows;
  } catch (e) {
    console.log("check err:", e);
  }
};
module.exports = {
  createNewsUser,
  getUserList,
  deleteUserVervice,
  updateUserById,
  updateDataUser,
};
