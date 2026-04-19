import { createPostController, getFilteredPostsController, getPostBySlugController} from "../controllers/post.controller.js";
import { validate } from "../middlewares/validate.middleware.js";
import { createPostSchema, postQuerySchema, slugParamSchema } from "../validation/post.validation.js";

import express from "express";

const router = express.Router();

router.route("/").post( validate({body: createPostSchema}) ,createPostController); 
router.route("/").get(validate({query: postQuerySchema}) ,getFilteredPostsController);

router.route("/:slug").get(validate({params: slugParamSchema}) ,getPostBySlugController);

export default router;