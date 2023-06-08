import { Router } from "express"
import validateSignIn from "../middlewares/validateSignIn.js"
import { signUpSchema } from "../schemas/signUp.schema.js"
import { signInSchema } from "../schemas/signIn.schema.js"
import { Logout } from "../controllers/auth.controllers.js"
import { signIn } from "../controllers/auth.controllers.js"
import { signUp } from "../controllers/auth.controllers.js"
import { authValidation } from "../middlewares/authValidation.middleware.js"


const authRouter = Router()

authRouter.post("/", validateSignIn(signInSchema), signIn)
authRouter.post("/sign-up", validateSignIn(signUpSchema), signUp)
authRouter.post("/delete-session", authValidation, Logout)

export default authRouter