import express from "express";
import apiController from "../controller/apiController";
let router = express.Router();

const initApiRoute = (app) => {
  router.get("/test-api", apiController.handleApi);
  router.post("/register", apiController.handleRegister);
  router.post("/login", apiController.handleLoginUser);
  return app.use("/api/v1/", router);
};
export default initApiRoute;
