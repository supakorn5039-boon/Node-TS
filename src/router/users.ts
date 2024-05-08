import { isOwner } from "./../middlewares/index";
import express from "express";
import { getAllUsers, deleteuser, updateUser } from "../controllers/users";
import { isAuthenticated } from "../middlewares";

export default (router: express.Router) => {
  router.get("/users", isAuthenticated, getAllUsers);
  router.delete("/users/:id", isAuthenticated, isOwner, deleteuser);
  router.put("/users/:id", isAuthenticated, isOwner, updateUser);
};
