import { Router } from "express"
import validateSigIn from "../middlewares/validateSigIn.js"
import { sigInSchema } from "../schemas/sigIn.schema.js"
import { sigIn } from "../controllers/auth.controllers.js"

const authRouter = Router()

authRouter.post("/", validateSigIn(sigInSchema), sigIn)

export default authRouter