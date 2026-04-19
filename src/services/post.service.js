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

export const getPostBySlugService = async (slug)=>{
    return await prisma.post.findUnique({
        where:{ slug: slug},
        include:{
            author:{
                select:{
                    name: true,
                    email: true
                }
            }
        }
    });
};

export const getFilteredPostsService = async ({search, page = 1, limit = 5})=>{
    return await prisma.post.findMany({
        where: search?
        {
            title:{
                contains: search,
                mode: "insensitive"
            }
        }:{},
        orderBy:{
            createdAt: "desc"
        },
        skip: (page-1 ) * limit,
        take: limit
    });
};