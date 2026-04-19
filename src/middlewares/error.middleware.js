import express from "express";
import { ApiError } from "../utility/ApiError.js";

export const globalErrorHandler = (error, req, res, next)=>{
    if(error instanceof ApiError){
        return res.status(error.statusCode).json({
            success: false,
            message: error.message,
            errors: error.errors || []
        })
    }

  console.error("UNEXPECTED ERROR:", error);

  return res.status(500).json({
    success: false,
    message: error.message || "Internal Server Error",
  });
}