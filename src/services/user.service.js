import prisma from "../config/db.js";

export const createUserService = async ( data)=>{
    return await prisma.user.create({
        data :data,
        select:{
            id:true,
            email:true,
            name: true,
            createdAt: true 
        }
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

