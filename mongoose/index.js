const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test', {useNewUrlParser: true,  useUnifiedTopology: true });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
// db.once('open', function() {
//   console.log("we are connected");
// });

const kittySchema = new mongoose.Schema({
    name: String
  });
  kittySchema.methods.speak = function () {
    const greeting =  "My name is " + this.name;
    
    // console.log(greeting);
  }

  const Kitten = mongoose.model('Kitten', kittySchema);
  const Skitten = new Kitten({ name: 'Skitten' });
  const Skitten2 = new Kitten({ name: 'Skitten2' });
// console.log(Skitten.name); // 'Silence'
// Skitten.speak();

Skitten.save(function (err, Skitten) {
    if (err) return console.error(err);
    // Skitten.speak();
  });
Skitten2.save(function (err, Skitten2) {
    if (err) return console.error(err);
    // Skitten2.speak();
  });

  Kitten.find({name:"Skitten"},function (err, kittens) {
    if (err) return console.error(err);
    console.log(kittens);
  })