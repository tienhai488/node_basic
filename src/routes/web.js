import express from "express";
import homeController from "../controller/homeController";

const router = express.Router();

const initWebRoute = (app) => {
  router.get("/", homeController.getHomePage);
  router.get("/detail/user/:id", homeController.getDetailPage);
  router.post("/create-new-user", homeController.getCreateUser);
  router.post("/delete-user", homeController.getDeleteUser);
  router.get("/edit-user/:id", homeController.getEditUser);
  router.post("/submit-edit-user", homeController.getUpdateUser);

  router.get("/about", homeController.getAboutPage);

  return app.use("/", router);
};

export default initWebRoute;
