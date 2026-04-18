import prisma from "../config/db.js";

export const createUserService = async ( data)=>{
    return await prisma.user.create({
        data :data
    });
};
