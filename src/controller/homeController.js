const getHomePage = (req, res) => {
  return res.render("index.ejs");
};
const getAboutMePage = (req, res) => {
  return res.render("aboutme.ejs");
};
const getUserPage = (req, res) => {
  return res.render("user.ejs");
};
module.exports = {
  getHomePage,
  getAboutMePage,
  getUserPage,
};
