//day 6
const http = require("http");

const server = http.createServer((req,res)=>{
console.log("request",req);
const {url,method}=req;
console.log("url:",url);
console.log("method:",method);
if (url == '/'){
    res.end("response from end point /");
}
if(url=="/test"){
    res.end("ksjrandomd");
}

})
server.listen(3000,(err)=>{
    if(err){
        console.log("Error: ", err);
    }
    console.log("Server is listening to port 3000");
})


//nodemon