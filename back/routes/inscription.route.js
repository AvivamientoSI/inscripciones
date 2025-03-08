import e from "express";
import {createABC, createDIS, createES } from "../controllers/inscription.controller.js";

const router = e.Router();

router.post("/abc", createABC);
router.post("/dis", createDIS);
router.post("/es", createES);

export default router;