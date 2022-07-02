import express from "express";
import homeController from "../controller/homeController";
let router = express.Router();

const initWebRoute = (app) => {
  router.get("/", homeController.getHomePage);
  router.get("/aboutme", homeController.getAboutMePage);
  router.get("/user", homeController.getUserPage);
  return app.use("/", router);
};
export default initWebRoute;
