import { Router } from "express";

import { loginService } from "../services/auth.services.js";

const router = Router()

router.post("/login",(req,res)=>{
    try{
        res.send(loginService(req))
    }catch(error){
        res.status(400).send({
            message: "error occured",
            error:error
        });
    }
});

router.post("/forgetPassword",(req,res)=>{
    res.end("forget Password")
})

export default router;
