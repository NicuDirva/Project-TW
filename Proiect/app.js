var express = require("express");
var formidable  = require("formidable");
// var fs = require("fal")

var app = express();


app.get("/", function(req, res)
{
    res.send("Hello!");
})

app.use(express.static("html"));

app.listen(5000, function(){
    console.log("A pornit serverul");
    });
