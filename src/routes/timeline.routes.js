import { Router } from "express";
import { getAllPosts } from "../controllers/timeline.controllers.js";

const TimelineRouter = Router();

TimelineRouter.get("/timeline", getAllPosts)

export default TimelineRouter;