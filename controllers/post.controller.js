import { createPostService , getFilteredPostsService, getPostsbySlugService} from "../services/post.service.js";
import { asyncHandler } from "../utility/asyncHandler.js";
import { ApiResponce } from "../utility/ApiResponce.js";
import { ApiError } from "../utility/ApiError.js";

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

export const getPostBySlugController = asyncHandler(async(req, res) =>{
    const {slug} = req.params;
    const post = await getPostsbySlugService(slug);

    if( !post ){
        return new ApiError(404, "Post not found");
    }else{
        return res
        .status(200)
        .json(
            new ApiResponce(200, post, "Post fetched successfuly...")
        );
    };
});

export const getFilteredPostsController = asyncHandler(async(req, res)=>{
    const { search, page } = req.query;

    const posts = await getFilteredPostsService({
        search,
        page: Number(page) || 1
    });

    return res
    .status(200)
    .json(
        new ApiResponce(200, posts, "Posts fetched successfully...")
    );
});
