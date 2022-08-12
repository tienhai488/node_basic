import express from "express";
import apiController from "../controller/apiController";

const router = express.Router();

const initAPIRoute = (app) => {
  router.get("/users", apiController.getAllUser);
  router.post("/create-user", apiController.createNewUser);
  router.put("/edit-user", apiController.editUser);
  router.delete("/delete-user/:id", apiController.deleteUser);

  return app.use("/api/v1/", router);
};

export default initAPIRoute;
