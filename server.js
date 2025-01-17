const express = require("express");
const cors = require("cors");


const app = express();

app.use(cors());

const bodyParser = require('body-parser');
const { request, response } = require("express");
app.use (bodyParser.json());
app.use(bodyParser.urlencoded({ extends: true }));

const welcomeMessage = {
  id: 0,
  from: "Bart",
  text: "Welcome to CYF chat system!",
};

//This array is our "data store".
//We will start with one message in the array.
//Note: messages will be lost when Glitch restarts our server.
const messages = [welcomeMessage];

app.get("/", function (request, response) {
  response.sendFile(__dirname + "/index.html");
});
app.get("/messages", function (request, response){
  response.status(200).json(messages);

});
app.post("/messages",(request, response)=> {
const newMessageId = messages.length > 0 
const newMessage = {
  id: newMessageId, 
  ...reques.body
}
messages.push(newMessage);
response.status(201).json(messages);

});

app.listen(3000, () => {
   console.log("Listening on port 3000")
  });
