import { z } from "zod";

export const createUserSchema = z.object({
  email: z.string().email("Invalid email").toLowerCase(),
  name: z.string().min(2, "Name too short").optional(),
  password: z.string().min(6, "Password must be at least 6 chars")
});