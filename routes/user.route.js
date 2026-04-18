import { createUserController } from "../controllers/user.controller.js";
import express from "express";

const router = express.Router();

console.log("User route loaded");
console.log("Controller:", createUserController);
router.route("/").post(createUserController);


export default router;