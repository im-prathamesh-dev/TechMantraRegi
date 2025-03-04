import mongoose from "mongoose";


const connectDB= async ()=>{
try{
  const conn = await mongoose.connect(process.env.MONGO_URL);
  console.log(`Succesfully Connected to MongoDB `)
}catch(error){
  console.log(`Database Connectivity Error ${error}`)
}
}

export default connectDB