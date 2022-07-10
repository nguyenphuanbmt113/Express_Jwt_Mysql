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
    if (password && password.length < 3) {
      return res.status(200).json({
        EM: "your password must have more than 3 letter",
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
const handleLoginUser = async (req, res) => {
  console.log(">>>check handleLogin: ", req.body);
  return res.status(200).json({
    ms: "ok!handle",
    data: "",
  });
};
module.exports = {
  handleApi,
  handleRegister,
  handleLoginUser,
};
