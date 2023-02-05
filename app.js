const http = require('http');

const express = require('express');

const app = express();

app.use('/add-product',(req, res, next) => {
    console.log('addproduct'); 
    res.send('<form action="/product" method="POST"><input type="text" name="title"><button type="submit">Add product</button></form>');

    
});
app.use('/product',(req,res,next)=>{
    res.redirect('/');
})


app.use((req, res, next) => {
    console.log('In the middleware!');
    next();
});

app.use('/',(req, res, next) => {
    console.log('In another middleware!');
    res.send('<h1>Hello from Express!!</h1>');
});

const server = http.createServer(app);

server.listen(3000);
