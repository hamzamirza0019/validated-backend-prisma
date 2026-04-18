import { createPostController, getFilteredPostsController, getPostBySlugController} from "../controllers/post.controller.js";
import express from "express";

const router = express.Router();

router.route("/").post(createPostController);

router.route("/").get(getFilteredPostsController);

router.route("/:slug").get(getPostBySlugController);

export default router;