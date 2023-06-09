
import { Router } from "express"
import authRouter from "./auth.routes.js"
import usersRouter from "./users.routes.js"
import postsRouter from "./posts.routes.js"
import TimelineRouter from "./timeline.routes.js";


const indexRouter= Router()

indexRouter.use(authRouter)
indexRouter.use(usersRouter)
indexRouter.use(postsRouter)
indexRouter.use(TimelineRouter)

export default indexRouter