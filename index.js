const express = require("express"); 
const hbs = require("express-handlebars")
const app = express();
const fs = require("fs");
const path = require('path'); 

app.engine('handlebars', hbs.engine({defaultLayout: 'main'}));
app.set("view engine", "handlebars"); 
app.set("views", "./views"); 
app.use(express.urlencoded({ extended: false }));
app.use(express.static('public')); 
app.use('/img', express.static(path.join(__dirname, "public/img"))); 
app.use(express.json()); 

const todos = [
  "clean office", 
  "finish app"
];

const imageUrl = '/public/img/activist.jpg'; 

app.get("/home", (req, res) => {
  res.render('home', {imageUrl}); 
});

app.get("/", (req, res) => {
  res.render("homePage", {
    todos
  }); 
}); 

app.post('/todo', (req, res) => {
  todos.push(req.body.content)
  res.redirect('/')
});

app.get("/download", (req, res) => {
  res.download("./public/img/activist.jpg"); 
}); 

const PORT = 3000; 

app.listen(PORT, () => {
console.log(`Port is listening at port ${PORT}`)
}); 

