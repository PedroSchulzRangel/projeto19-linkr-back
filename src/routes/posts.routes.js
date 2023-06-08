import { Router } from "express";
import validateSchema from "../middlewares/validateSchema.middlewares.js";
import { postSchema } from "../schemas/posts.schema.js";
import { createPost, deletePost, editPost } from "../controllers/posts.controllers.js";
import { authValidation } from "../middlewares/authValidation.middleware.js";


const postsRouter = Router()

postsRouter.post("/new-post", authValidation, validateSchema(postSchema), createPost)
postsRouter.delete("/delete/:postId", authValidation, deletePost);
postsRouter.put("/posts/:id", authValidation, validateSchema(postSchema), editPost);

export default postsRouter