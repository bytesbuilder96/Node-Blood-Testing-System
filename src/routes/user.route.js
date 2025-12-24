import { Router } from "express";
import { login } from "../controller/auth.controler.js";

const authrouter = Router();

authrouter.post("/login", login);

export { authrouter };
