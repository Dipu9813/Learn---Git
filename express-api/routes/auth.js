import { Router } from "express";

const router = Router()

router.post("/login",(req,res)=>{
    res.end("hello from login");
})

router.post("/forgetPassword",(req,res)=>{
    res.end("forget Password")
})

export default router;
