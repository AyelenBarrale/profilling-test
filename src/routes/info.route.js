import { Router } from "express";
import { renderInfo } from "../controllers/info.controller.js";
import compression from "compression";

const router = Router();

router.get("/info", compression(), renderInfo);

export default router;
