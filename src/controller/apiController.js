import apiUserservice from "../service/apiUserService";
const handleApi = (req, res) => {
  return res.status(200).json({
    message: "oh",
    data: "test api",
  });
};
//register
const handleRegister = async (req, res) => {
  try {
    const { email, password, phone } = req.body;
    //check lan 2
    if (!email || !phone || !password) {
      return res.status(200).json({
        EM: "missing requied parameters",
        EC: 1,
        DT: "",
      });
    }
    //call serviceuser
    const createUser = await apiUserservice.createUserService(req.body);
    console.log(">>>>>check create User: ", createUser);
    return res.status(200).json({
      EM: createUser.EM,
      EC: createUser.EC,
      DT: "",
    });
  } catch (e) {
    console.log(">>>>>>>check erroe: ", e);
    return res.status(500).json({
      EM: "error from server",
      EC: -1,
      DT: "",
    });
  }
};
module.exports = {
  handleApi,
  handleRegister,
};
