// http server by using node js
const http = require ('http')
// const path = require('path')
console.log(__dirname)
http.createServer((request, response)=>{
    
    response.end("hello ths 19f")
    console.log("req", request.params)
    
}).listen(3000)

