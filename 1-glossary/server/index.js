require("dotenv").config();
const express = require("express");
const path = require("path");
const app = express();
const db = require("../database")

// Serves up all static and generated assets in ../client/dist.
app.use(express.static(path.join(__dirname, "../client/dist")));
app.use(express.json());
app.use(express.urlencoded({extended:true}));


app.get('/words', function(req,res){
  db.Word.find().then(data => res.send(data)).catch(err => res.send(err))
});

app.post('/words', function(req,res){
  db.save(req.body).then(()=> res.sendStatus(201)).catch((err)=>res.send(err))
});

app.delete('/words', function(req,res){
  let wordDelete = req.body.word;
  db.Word.deleteOne(
  { word : wordDelete})
  .then(() => res.sendStatus(200))
  .catch(()=>res.sendStatus(404))
});

app.put('/words', function(req,res){
  let wordUpdate = req.body.word;
  let defiUpdate = req.body.definition;
  db.Word.findOneAndUpdate(
    wordUpdate,{definition:defiUpdate})
    .then(() => res.sendStatus(200))
    .catch(()=>res.sendStatus(404))
});





app.listen(process.env.PORT);
console.log(`Listening at http://localhost:${process.env.PORT}`);