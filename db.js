const mongoose = require('mongoose');
module.exports=async()=>{
  try{
    const connectionParams={
      useNewUrlParser: true,
      useUnifiedTopology: true
    };
    await mongoose.connect(
      
      "mongodb://localhost/todo-app",
      connectionParams
    );
    console.log("Connected to Data Base");
  }
  catch(error){
      console.log("Could not connect to Data Base", error);
  }
}
