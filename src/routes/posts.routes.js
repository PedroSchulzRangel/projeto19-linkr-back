import { Router } from "express";
import validateSchema from "../middlewares/validateSchema.middlewares.js";
import { createPostSchema, newPostSchema } from "../schemas/posts.schema.js";
import { createPost } from "../controllers/posts.controllers.js";


const postsRouter = Router()

postsRouter.post("/new-post", validateSchema(createPostSchema), createPost)


export default postsRouter