const express = require("express"); 
const hbs = require("express-handlebars")

const app = express();

app.engine('handlebars', hbs.engine({defaultLayout: 'main'}));
app.set("view engine", "handlebars"); 
app.set("views", "./views"); 

app.use(express.urlencoded({ extended: false }))
app.use(express.static("img")); 

const todos = [
  "clean office", 
  "finish app"
]

app.get("/home", (req, res) => {
  res.render("home"); 
})

app.get("/", (req, res) => {
  res.render("homePage", {
    todos
  }); 
}); 

app.post('/todo', (req, res) => {
  todos.push(req.body.content)
  res.redirect('/')
})

app.get("/download", (req, res) => {
  res.download("./img/activist.jpg"); 
}); 











const PORT = 3000; 

app.listen(PORT, () => {
console.log(`Port is listening at port ${PORT}`)
}); 

