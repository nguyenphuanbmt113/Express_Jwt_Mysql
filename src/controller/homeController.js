import userService from "../service/userService";

const getHomePage = (req, res) => {
  return res.render("index.ejs");
};
const getAboutMePage = (req, res) => {
  return res.render("aboutme.ejs");
};
const getUserPage = (req, res) => {
  return res.render("user.ejs");
};
const getAllUserList = async (req, res) => {
  const data = await userService.getUserList();
  return res.render("user-list.ejs", { data });
};
const createNewsUser = (req, res) => {
  const { email, password, username } = req.body;
  userService.createNewsUser(email, password, username);
  return res.redirect("/user-list");
};
const deleteUser = async (req, res) => {
  let id = req.params.id;
  await userService.deleteUserVervice(id);
  return res.redirect("/user-list");
};
const updateUser = async (req, res) => {
  let userId = req.params.id;
  let dataUpdate = await userService.updateUserById(userId);
  return res.render("updateUser.ejs", { dataUpdate: dataUpdate[0] });
};
const handleUpdateUser = async (req, res) => {
  let { email, username, id } = req.body;
  await userService.updateDataUser(email, username, id);
  return res.redirect("/user-list");
};
module.exports = {
  getHomePage,
  getAboutMePage,
  getUserPage,
  getAllUserList,
  createNewsUser,
  deleteUser,
  updateUser,
  handleUpdateUser,
};
