const handleApi = (req, res) => {
  return res.status(200).json({
    message: "oh",
    data: "test api",
  });
};
const handleRegister = (req, res) => {
  console.log(">>>>>call me", req.body);
};
module.exports = {
  handleApi,
  handleRegister,
};
