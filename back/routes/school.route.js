import e from "express";
import { createSchool, getSchools } from "../controllers/school.controller.js";

const router = e.Router();

router.get("/", getSchools);

router.post("/", createSchool)

export default router;