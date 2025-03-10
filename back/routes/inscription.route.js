import e from "express";
import {createABC, createDIS, createES, getInscriptionsABC, getInscriptionsDIS, getInscriptionsES } from "../controllers/inscription.controller.js";

const router = e.Router();

router.get("/table/abc", getInscriptionsABC);
router.get("/table/dis", getInscriptionsDIS);
router.get("/table/es", getInscriptionsES);
router.post("/abc", createABC);
router.post("/dis", createDIS);
router.post("/es", createES);

export default router;