const dotenv = require("dotenv");
require("dotenv").config();

const mongoose = require('mongoose');


const cors=require('cors');
const express=require('express');
//const connection=require('./db');
const tasks=require("./routes/tasks")
const app=express();
//connection();
app.use(express.json());
app.use(cors());
try{mongoose.connect(
"mongodb+srv://sreevidyadev:Sree1234@cluster0.qy684.mongodb.net/todo-app?retryWrites=true&w=majority",
       {
         useNewUrlParser: true,
         useUnifiedTopology: true,
       }
);
console.log("Connected to Data Base");}

catch(error){
console.log("Could not connect to Data Base", error);
}


app.use("/api/tasks", tasks);

// Accessing the path module
const path = require("path");

// Step 1:
app.use(express.static(path.resolve(__dirname, "./client/build")));
// Step 2:
app.get("*", function (request, response) {
  response.sendFile(path.resolve(__dirname, "./client/build", "index.html"));
});



const port=process.env.PORT || 8080;

app.listen(port, () => console.log(`Listening on port ${port}...`));
