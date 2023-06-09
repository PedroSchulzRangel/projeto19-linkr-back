import { Router } from "express"
import { getUserById,  getUsersByName } from "../controllers/users.controllers.js"

const usersRouter = Router()

usersRouter.get("/user/:id", getUserById)
usersRouter.get("/users", getUsersByName)

export default usersRouter