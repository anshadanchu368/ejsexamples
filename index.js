const express= require('express');

const app=express();

app.set('view engine','ejs');

const products =[
    {name:"Product 1",price:500},
    {name:"Product 2",price:400},
    {name:"Product 3",price:900},

]

app.get("/",(req,res)=>{
    res.render('index',{products:products});
})

app.listen(3000,()=>{
    console.log('Server is listening to port 3000');
})