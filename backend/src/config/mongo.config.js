// import mongoose from "mongoose";
// console.log(process.env.MONGO_URI);
// const connectDB = async () => {
//   try {
//     const conn = await mongoose.connect(process.env.MONGO_URI, {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//     });

//     console.log(`MongoDB Connected: ${conn.connection.host}`);
//   } catch (error) {
//     console.error(`Error: ${error.message}`);
//     process.exit(1);
//   }
// };

// export default connectDB;



// src/config/mongo.config.js

// Import mongoose for MongoDB interaction
import mongoose from "mongoose";

// Define the asynchronous function to connect to the database
const connectDB = async () => {
  try {
    // Attempt to connect to MongoDB using the URI from environment variables
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      // These options are for compatibility with older MongoDB drivers
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    // Log successful connection
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    // Log any connection errors
    console.error(`Error: ${error.message}`);
    // Exit the process with a failure code
    process.exit(1);
  }
};

// Export connectDB as the default export so it can be imported in other files
export default connectDB;
