import express from "express";
import userRoutes from "./routes/user.route.js";
import postRoutes   from "./routes/post.route.js"

const app = express();

app.use(express.json());

app.use("/api/v1/users", (req, res, next) => {
  console.log("Reached users route base");
  next();
}, userRoutes);

app.use("/api/v1/posts", postRoutes);

app.use((req, res) => {
  console.log("Request hit:", req.method, req.url);
  res.status(404).send("Route not found");
});



export default app; 