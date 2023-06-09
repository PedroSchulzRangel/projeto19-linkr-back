import { Router } from "express"
import { getUserById,  getUsersByName } from "../controllers/users.controllers.js"
import { authValidation } from "../middlewares/authValidation.middleware.js"

const usersRouter = Router()

usersRouter.get("/user/:id", getUserById)
usersRouter.get("/user/:username",authValidation, getUsersByName)

export default usersRouter