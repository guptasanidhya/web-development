const express = require('express');
const path = require("path"); 
const app = express();
const bodyparser= require("body-parser")
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/contactDance', {useNewUrlParser: true,useUnifiedTopology: true});
const port =80;

// define mongoose schema 
const contactSchema = new mongoose.Schema({
    name: String,
    phone: String,
    email: String,
    address: String
  });
  const Contact  = mongoose.model('Contact', contactSchema);



// EXPRESS SPECIFIC STUFF
app.use('/static',express.static('static'));//for serving static files
app.use(express.urlencoded());
// PUG SPECIFIC STUFF
app.set('view engine', 'pug');//set the template for pug
app.set('views',path.join(__dirname,('views')))

//END POINTS
app.get("/",(req,res)=>{
const params={}
    res.status(200).render('home.pug',params);
});

app.get("/contact",(req,res)=>{
const params={}
    res.status(200).render('contact.pug',params);
});

app.post("/contact",(req,res)=>{
var myData = new Contact(req.body);
myData.save().then(()=>{
    res.send("This item has been saved in the database")
}).catch(()=>{
    res.status(400).send("Item was not saved to the database")
});
    // res.status(200).render('contact.pug');
});
// START THE SERVER 
app.listen(port,()=>{
    console.log(`the application started succesfully on port ${port}`);
})