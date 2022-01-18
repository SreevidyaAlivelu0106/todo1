const mongoose = require('mongoose');
module.exports=async()=>{
  try{

    require("dotenv").config()
      mongoose.connect(
      process.env.MONGO_URI,
             {
               useNewUrlParser: true,
               useUnifiedTopology: true,
             }
    );
    console.log("Connected to Data Base");
  }
  catch(error){
      console.log("Could not connect to Data Base", error);
  }
}
