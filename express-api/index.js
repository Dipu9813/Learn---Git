//express
import express from "express";
import routers from "./routes/routes.js";

const port=8000;
const app = express();

app.use(express.json());

app.get("/",(req,res)=>{
    res.end("response from backend server");
})

app.use('/api',routers);


app.post("/login",(req,res)=>{
    //login code
    res.end("just login");
})

app.listen(port,(err)=>{
    if (err){
        console.log("error running in the server: ",err);
    }
    console.log("server is listening at port ",port);
})