import prisma from "../config/db.js";

export const createPostService = async(data)=>{
    return await prisma.post.create({
        data: {
            title: data.title,
            slug: data.slug,
            body: data.body,

            author:{
                connect: {
                    id: data.authorId
                }
            }
        }
    });
};