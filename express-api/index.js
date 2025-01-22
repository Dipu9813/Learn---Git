//express
import express from "express";

const app = express();
app.get("/test",(req,res)=>{
    res.end("response from test endpoint");
})
// app.use("/",(req,res)=>{
//     res.end("response from main endpoint");
// })
app.post("/login",(req,res)=>{
    //login code
    res.end("just login");
})

app.listen(3000,(err)=>{
    if (err){
        console.log("error running in the server: ",err);
    }
    console.log("server is listening at port 3000");
})