import { createUserController, getUserWithPostController } from "../controllers/user.controller.js";
import express from "express";
import { createUserSchema } from "../validation/user.validation.js";
import { validate } from "../middlewares/validate.middleware.js";

const router = express.Router();

// console.log("User route loaded");
console.log("Controller:", createUserController);
router.route("/").post( validate({body: createUserSchema}) ,createUserController);
router.route("/:id").get(getUserWithPostController);



export default router;