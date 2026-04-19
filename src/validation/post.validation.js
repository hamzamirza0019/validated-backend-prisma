import { z } from "zod";

export const createPostSchema = z.object({
    title: z.string().min(3, "Title must be atleast 3 characters"),
    slug: z.string().min(3),
    body: z.string().min(3),
    authorId: z.string().regex(/^[0-9a-fA-F]{24}$/, "Invalid ObjectId")
});

export const slugParamSchema = z.object({
    slug: z.string().min(3)
});

export const postQuerySchema = z.object({
    search: z.string().optional(),
    page: z.string().optional().transform((val)=>(isNaN(Number(val)) ? 1 : Number(val)))
});