import { Router } from "express"
import { getUserById } from "../controllers/users.controllers.js"

const usersRouter = Router()

usersRouter.get("/user/:id", getUserById)

export default usersRouter