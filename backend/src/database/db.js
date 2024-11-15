import mongoose from "mongoose";
//connect the instance using the mongoose library
const db = async() => {
    try{
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URL}/eLearning`)
        console.log(`\n MongoDB connected  success!! DB HOST :: ${connectionInstance.connection.host}`)
    } catch (error){
        console.log("Mongodb connection error occured is :", error);
        process.exit(1)
    }
}



export default db
