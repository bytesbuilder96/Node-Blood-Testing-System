// import { Router } from "express";
// import { createPaitent } from "../controller/paitent.controler.js";

// const paitentRouter = Router();

// paitentRouter.post("/create", createPaitent);

// export { paitentRouter };

import express from "express";
import {
  createPatient,
  getAllPatients,
  getPatientById,
  updatePatient,
  deletePatient,
} from "../controller/paitent.controler.js";
import { login } from "../controller/auth.controler.js";

const paitentRouter = express.Router();

paitentRouter.post("/create", createPatient);
paitentRouter.get("/get-all", getAllPatients);
paitentRouter.get("/get-by-id/:id", getPatientById);
paitentRouter.put("/update-by-id/:id", login, updatePatient);
paitentRouter.delete("/delete-by-id/:id", login, deletePatient);

export { paitentRouter };
