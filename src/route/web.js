import express from "express";
import homeController from "../controller/homeController";
import apiController from "../controller/apiController";
let router = express.Router();

const initWebRoute = (app) => {
  router.get("/", homeController.getHomePage);
  router.get("/aboutme", homeController.getAboutMePage);
  router.get("/user", homeController.getUserPage);
  router.get("/user-list", homeController.getAllUserList);
  router.post("/user/create", homeController.createNewsUser);
  router.post("/delete-user/:id", homeController.deleteUser);
  router.get("/update-user/:id", homeController.updateUser);
  router.post("/user/update", homeController.handleUpdateUser);
  router.get("/api", apiController.handleApi);
  return app.use("/", router);
};
export default initWebRoute;
