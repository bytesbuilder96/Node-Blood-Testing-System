import { Router } from "express";
import { authrouter } from "./user.route.js";
import { paitentRouter } from "./paitent.route.js";
const router = Router();

router.use("/auth", authrouter);
router.use("/paitent", paitentRouter);

export { router };
