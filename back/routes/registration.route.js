import e from "express";
import { createRegistration, getRegistrations, updateRegistration, deleteRegistration } from "../controllers/registration.controller.js";

const router = e.Router();

router.get("/", getRegistrations);
router.post("/", createRegistration);
router.put("/:id", updateRegistration);
router.delete("/:id", deleteRegistration);

export default router;