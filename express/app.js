const express = require('express');
const path = require("path"); 
const fs = require('fs');
const app = express();
 const port =80;
// EXPRESS SPECIFIC STUFF
app.use('/static',express.static('static'));//for serving static files
app.use(express.urlencoded());
// PUG SPECIFIC STUFF
app.set('view engine', 'pug');//set the template for pug
app.set('views',path.join(__dirname,('views')))

//END POINTS
app.get("/",(req,res)=>{
    const con="THis is the best page so far";
const params={'title':'best page',"content":con}
    res.status(200).render('index.pug',params);
});
app.post("/",(req,res)=>{
    // console.log(req.body);
    name=req.body.name
    age=req.body.age
    gender=req.body.gender
    address=req.body.address
    more=req.body.more
    let outputtowrite=`the name of the client is ${name},${age}years old,${gender},residing at ${address},more about him/her:${more}`
fs.writeFileSync('output.txt',outputtowrite)
    
    const params={'message':'your form has been submitted successfully'}
    res.status(200).render('index.pug',params);
});
//our pug demo endpoint


//  app.get("/demo",(req,res)=>{
// res.status(200).render('demo', { title: 'Hey Sanidhya', message: 'Hello there!' })
//  });
//  app.get("/",(req,res)=>{
// res.status(200).send("this is the first home  express app with sanidhya");
//  });
//  app.get("/home",(req,res)=>{
// res.send("this is the first home  express app with sanidhya");
//  });
//  app.post("/about",(req,res)=>{
// res.send("this is the first about express app with sanidhya");
//  });
//  app.get("/services",(req,res)=>{
// res.send("this is the firstservices express app with sanidhya");
//  });
//  app.get("/contact",(req,res)=>{
// res.send("this is the first contact express app with sanidhya");
//  });


// START THE SERVER 
 app.listen(port,()=>{
            console.log(`the application started succesfully on port ${port}`);
 })