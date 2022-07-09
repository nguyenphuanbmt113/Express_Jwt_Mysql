const handleApi = (req, res) => {
  return res.status(200).json({
    message: "oh",
    data: "test api",
  });
};
module.exports = {
  handleApi,
};
