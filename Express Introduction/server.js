const express = require('express');
//console.log(express);
const users = require("./db.json");
const app = express();
//console.log(app)

app.get("/" , function(req,res){
    res.send("hello this is shashi")
})
app.get("/users", function (req, res) {
  res.send(users);
});

app.listen(2345, function(){
    console.log("listening the port 2345")
})