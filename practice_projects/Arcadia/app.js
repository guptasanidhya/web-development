const express=require("express")
const path=require ("path")
const fs=require("fs")
const app=express();
const mongoose=require('mongoose');
mongoose.connect('mongodb://localhost/contactArcadia', {useNewUrlParser: true,useUnifiedTopology: true});
const port =80;

//DEFINE MONGOOSE SCHEMA
const contactSchema=new mongoose.Schema({
    name:String,
    phone:String,
    email:String,
    address:String
});
const Contact = mongoose.model
('Contact',contactSchema);
//EXPRESS SPECIFIC STUFF
app.use('/static',express.static('static'))//for serving static files
app.use(express.urlencoded());
//PUG SPECIFIC STUFF
app.set('view engine','Pug')//set the template engine as pug
app.set('views',path.join(__dirname,'views'))//set the views directory

//END POINTS
app.get("/",(req,res)=>{
    res.status(200).render('index.pug')
});
app.post("/contact",(req,res)=>{
    var myData = new Contact(req.body);
myData.save().then(()=>{
    res.send("This item has been saved")
}).catch(()=>{
    res.status(400).send("Item was not saved to the database")
});
});
//START THE SERVER
app.listen(port,()=>{
    console.log(`the application started succesfully on port ${port}`);
});