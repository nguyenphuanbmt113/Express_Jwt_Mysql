const getHomePage = (req, res) => {
  return res.render("index.ejs");
};
const getAboutMePage = (req, res) => {
  return res.render("aboutme.ejs");
};
module.exports = {
  getHomePage,
  getAboutMePage,
};
