const mongoose = require('mongoose');
module.exports=async()=>{
  try{
    const connectionParams={
      useNewUrlParser: true,
      useUnifiedTopology: true
    };

    require("dotenv").config()
    await mongoose.connect(
      process.env.MONGODB_CONNECTION_STRING,

      connectionParams
    );
    console.log("Connected to Data Base");
  }
  catch(error){
      console.log("Could not connect to Data Base", error);
  }
}
