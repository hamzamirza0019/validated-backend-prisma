import express from "express";
import userRoutes from "./routes/user.route.js";
import postRoutes   from "./routes/post.route.js"
import { globalErrorHandler } from "./middlewares/error.middleware.js";
import { notFound } from "./middlewares/notFound.middleware.js";

const app = express();

app.use(express.json());

app.use("/api/v1/users", userRoutes);

app.use("/api/v1/posts", postRoutes);


app.use(notFound);

app.use(globalErrorHandler);


export default app; 