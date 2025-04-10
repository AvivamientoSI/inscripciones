import e from "express";
import { createRegistration, getRegistrations, updateRegistration } from "../controllers/registration.controller.js";

const router = e.Router();

router.get("/", getRegistrations);
router.post("/", createRegistration);
router.put("/:id", updateRegistration);

export default router;