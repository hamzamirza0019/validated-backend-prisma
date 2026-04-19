import { createUserService, getUserWithPostsService } from "../services/user.service.js";
import { ApiResponce } from "../utility/ApiResponce.js";
import { asyncHandler } from "../utility/asyncHandler.js";

export const createUserController = asyncHandler(async(req, res)=>{

    console.log("Controller executed");
    const { email, name, password } = req.body;

    const user = await createUserService({email, name, password});
    console.log("Before return statement after calling createUserService()");
    return res.status(201)
    .json(
        new ApiResponce(201, user, "User created successfully...")
    );
});

export const getUserWithPostController = asyncHandler(async(req, res)=>{
    const {id} = req.params;

    const user = await getUserWithPostsService(id);

    return res
    .status(200)
    .json(
        new ApiResponce(200, user, "User fetched successfully...")
    );

})