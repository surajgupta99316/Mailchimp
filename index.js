const express = require("express");
const https = require("https");

const app = express();

app.get("/",function(request, response){
    response.sendFile(__dirname + "/start.html");
})

app.get("/contact",function(req,res){
  res.send("Contact me at SurajGUpta99316");

})

app.listen(process.env.PORT || 3000,function(){
  console.log("Server started on port 3000");
});
