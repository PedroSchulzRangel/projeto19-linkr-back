import { Router } from "express";
import authRouter from "./auth.routes.js";
import TimelineRouter from "./timeline.routes.js";

const indexRouter= Router()

indexRouter.use(authRouter)
indexRouter.use(TimelineRouter)

export default indexRouter