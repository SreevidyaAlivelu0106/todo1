const mongoose = require('mongoose');
module.exports=async()=>{
  try{
    const connectionParams={
      useNewUrlParser: true,
      useUnifiedTopology: true
    };
    await mongoose.connect(
      "mongodb+srv://sreevidyadev:Sree1234@cluster0.qy684.mongodb.net/todo-app?retryWrites=true&w=majority",

      connectionParams
    );
    console.log("Connected to Data Base");
  }
  catch(error){
      console.log("Could not connect to Data Base", error);
  }
}
