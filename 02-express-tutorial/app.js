const http = require('http')

const server = http.createServer((req,res)=>{
    //request and response parameter
    console.log('user hit the server')
    res.end('can set up text or html')
})

server.listen(5000)
//different port for different thing; https: 423 

