import prisma from "../config/db.js";

export const createUserService = async ( data)=>{
    return await prisma.user.create({
        data :data
    });
};

export const getUserWithPostsService = async (userId) =>{
    return await prisma.user.findUnique({
        where: {id: userId},
        include: {
            posts: {
                select:{
                    title: true,
                    slug: true,
                    published: true
                }
            }
        }
    });
};

