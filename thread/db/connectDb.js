const mongoose = require ("mongoose")

const connectDb = async () => {
   try {
   const conn =  await mongoose.connect(process.env.MONGO_URI, {
        useUnifiedTopology: true,
        useNewUrlParser: true 
    });
    console.log(`MongoDB connected 👋👋`)
   } catch (err) {
    console.error(`Error: ${eror.message}`);
    process.exit(1)
   }
}

export default connectDb;