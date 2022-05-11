const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/glossary',{ useNewUrlParser: true } ).then(()=>{
  console.log('Database Connected');
}).catch(()=>{
  console.log('Failed to connect the database');
});

let wordSchema = mongoose.Schema({
  word: {
    type:String,
    unique:true
  },
  definition: String
})


let Word = mongoose.model('Word', wordSchema);

let save = (word) => {
  return Word.create(word).then(()=>{console.log('Success')}).catch((err)=>{
    console.err(err)
  })
}

module.exports.Word = Word;
module.exports.save = save;