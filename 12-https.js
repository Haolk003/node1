const http =require('http');
const server=http.createServer((req,res)=>{
    
   if(req.url === '/'){
    res.end('Welscome to our home page');
   }
 if(req.url==='/about'){
    res.end('Welcome to our about page');
 }
    res.end(`<h1>Opp!</h1>`)
  
   
  
})
server.listen(5000);