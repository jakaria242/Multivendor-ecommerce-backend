const mongoose = require("mongoose")

module.exports.dbConnect = async ()=> {
   try {
    await mongoose.connect(process.env.MONGODB_URL)
    console.log("DB connect....");
   } catch (error) {
     console.log("MongoDb Connection Faild !", error);
   }
}