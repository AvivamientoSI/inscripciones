import e from "express";

const router = e.Router();

router.get("/", (req, res)=>{
    res.send("welcome to Home")
})
router.get("/login", (req, res)=>{
    res.send("welcome to Login")
})
router.patch("/register/:id")

export default router;