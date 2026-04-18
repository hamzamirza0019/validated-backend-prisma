import { createPostController } from "../controllers/post.controller.js";
import express from "express";

const router = express.Router();

router.route("/").post(createPostController);

export default router;