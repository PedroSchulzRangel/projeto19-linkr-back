import { Router } from "express"
import { getUserById } from "../controllers/users.controllers.js"
import { authValidation } from "../middlewares/authValidation.middleware.js"

const usersRouter = Router()

usersRouter.get("/user/:id", authValidation, getUserById)

export default usersRouter