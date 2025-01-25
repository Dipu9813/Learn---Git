import  { Router } from "express";

const router = Router();

router.get("/",(req,res)=>{
    res.end("home page");
});

router.get("/register",(req,res)=>{
    res.end("register new stuents here");
})

export default router;