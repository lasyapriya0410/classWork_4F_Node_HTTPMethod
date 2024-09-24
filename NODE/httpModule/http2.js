const http = require('http')
const url = require('url')

const server = http.createServer((req, res)=>{
    //get-visible post-not visible 
    if(req.method === 'GET'){
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write('<h1>Get Method is processed</h1>');
        //"http://localhost:3000/?username=&age=3"
        const parsedURL = url.parse(req.url, true)
        const {username, age} = parsedURL.query
        res.write(<h3>Username: ${username}</h3>)
        res.write(<h3>Email: ${Email}</h3>)
        res.write(<h3>Password: ${Password}</h3>)
        res.end();
    }
    else if(req.method === "POST"){
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write('<h1>Post Method is processed</h1>');

        let inputs = "";

        req.on('data', (chunks)=>{
            inputs += chunks.toString()
        })
        console.log(inputs)
        req.on('end', ()=>{
            
            res.end(<h2>Inputs: ${inputs}</h2>)
            
        })

        
    }else{
        res.writeHead(405, {'Context-Type': 'text/html'})
        res.write(<center>Method not Found</center>)
    }
})

server.listen(3000, ()=>{
    console.log("Server is running @ http://localhost:5500")
})