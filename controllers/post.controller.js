import { createPostService } from "../services/post.service.js";
import { asyncHandler } from "../utility/asyncHandler.js";
import { ApiResponce } from "../utility/ApiResponce.js";

export const createPostController = asyncHandler(async(req, res)=>{
    const { title, slug, body, authorId } = req.body;

    const post = await createPostService({title, slug, body, authorId});
    console.log("Post result:", post);

    return res
    .status(201)
    .json(
        new ApiResponce(201, post, "Post created Successfully...")
    );

})