import { Router } from "express"
import validateSigIn from "../middlewares/validateSigIn.js"
import { sigInSchema } from "../schemas/sigIn.schema.js"
import { signUpSchema } from "../schemas/signUp.schema.js"
import { signIn } from "../controllers/auth.controllers.js"
import { signUp } from "../controllers/auth.controllers.js"

const authRouter = Router()

authRouter.post("/", validateSigIn(sigInSchema), signIn)
authRouter.post("/sign-up", validateSigIn(signUpSchema), signUp)


export default authRouter