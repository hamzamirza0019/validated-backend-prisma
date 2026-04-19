import { ZodError } from "zod";
import {ApiError} from "../utility/ApiError.js"

export const validate = (schemas)=>(req, res, next)=>{
    try {
        if(schemas.body){
            req.body = schemas.body.parse(req.body);
        }
        if(schemas.query){
            Object.assign(req.query, schemas.query.parse(req.query));
        }
        if(schemas.params){
            const parsed = schemas.params.parse(req.params);
      Object.assign(req.params, parsed); // safer
        }

        next();
        
    } catch (error) {
        console.log("ERROR TYPE:", error);
    if (error.name instanceof ZodError) {
        const formattedErrors = error.errors.map(err => ({
            field: err.path.join("."),
            message: err.message,
            errors: formattedErrors
        }));

        return next(new ApiError(400, formattedErrors , "Validation Failed!"));
    }

    // not validation error → pass as is
    return next(error);
}
}