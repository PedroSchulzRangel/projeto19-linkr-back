import { Router } from "express"
import validateSigIn from "../middlewares/validateSigIn.js"
import { signUpSchema } from "../schemas/signUp.schema.js"
import { signUp, Logout } from "../controllers/auth.controllers.js"

const authRouter= Router()

authRouter.post("/")
authRouter.post("/sign-up", validateSigIn(signUpSchema), signUp)
authRouter.post("/delete-session",authValidation, Logout)

export default authRouter