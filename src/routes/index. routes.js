import { Router } from "express"
import authRouter from "./auth.routes.js"
import usersRouter from "./users.routes.js"

const indexRouter= Router()

indexRouter.use(authRouter)
indexRouter.use(usersRouter)

export default indexRouter