const express = require("express"); 

const app = express(); 

app.set("view engine", "ejs"); 

app.use(express.static("img")); 

app.get("/", (req, res) => {
  res.render("home"); 
}); 

app.get("/download", (req, res) => {
  res.download("./img/activist.jpg"); 
}); 









const PORT = 3000; 

app.listen(PORT, () => {
console.log(`Port is listening at port ${PORT}`)
}); 

