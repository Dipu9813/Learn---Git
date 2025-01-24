import express from "express"
import authRoute from "./auth.js"
import studentRoute from "./student.js"

const router = Router()

router.use("/auth",authRoute)
router.use("/student",studentROute)

export default router;

// const app = express()
// const port = 3005

// app.use(express.json())
// app.get("/",(req,res)=>{
//     res.end("hello world from node backend");
// })
// app.post("/test",()=>{
//     res.end("post request accepted from test");
// })

// app.listen(port,(error)=>{
//     if(error){
//         console.log("something went wrong",error);
//     }
//     console.log("server is runnig at port: ",port);
// });