import { Router } from "express"

import validateSignIn from "../middlewares/validateSignIn.js"
import { signInSchema } from "../schemas/sigIn.schema.js"
import { signUpSchema } from "../schemas/signUp.schema.js"
import { signIn } from "../controllers/auth.controllers.js"
import { signUp } from "../controllers/auth.controllers.js"

const authRouter = Router()

authRouter.post("/", validateSignIn(signInSchema), signIn)
authRouter.post("/sign-up", validateSignIn(signUpSchema), signUp)




export default authRouter