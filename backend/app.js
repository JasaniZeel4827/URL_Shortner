// // // // // // import express from 'express';
// // // // // // const app = express();
// // // // // // import {nanoid} from "nanoid"


// // // // // // app.get("/api/create", (req, res) => {
// // // // // //     // res.send("hello world");
// // // // // //     res.send(nanoid(7))
// // // // // // })

// // // // // // app.listen(5000, () => {
// // // // // //     console.log("server is runnig on port http://localhost:5000");
// // // // // // });


// // // // // import express from "express";
// // // // // import { nanoid } from "nanoid";
// // // // // import dotenv from "dotenv";
// // // // // dotenv.config("./.env");
// // // // // import connectDB from "./src/config/mongo.config.js"
// // // // // const app = express();


// // // // // app.use(express.json())
// // // // // app.use(express.urlencoded({extended:true}))


// // // // // app.post("/api/create", (req, res) => {
// // // // //     const {url} = req.body
// // // // //     res.send(nanoid(7))
// // // // // //   const { url } = req.body;
// // // // // });

// // // // // app.listen(5000, () => {
// // // // //     connectDB()
// // // // //   console.log("Server is running on http://localhost:5000");
// // // // // });

// // // // // // GET - Redirection
// // // // // // POST - Create short url




import express from "express";
import { nanoid } from "nanoid";
import dotenv from "dotenv";
import connectDB from "./src/config/mongo.config.js";
dotenv.config("./.env");


const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post("/api/create", (req, res) => {
  const { url } = req.body;
  res.send(nanoid(7));
});

app.listen(5000, () => {
  connectDB();
  console.log("Server is running on http://localhost:5000");
});

// GET - Redirection




// // // // app.js

// // // import express from "express";
// // // import { nanoid } from "nanoid";
// // // import dotenv from "dotenv";
// // // // Ensure this path is correct relative to app.js
// // // import connectDB from "./src/config/mongo.config.js"; 

// // // // Load environment variables from .env file
// // // dotenv.config("./.env"); 

// // // const app = express();

// // // // Middleware to parse JSON request bodies
// // // app.use(express.json());
// // // // Middleware to parse URL-encoded request bodies
// // // app.use(express.urlencoded({ extended: true }));

// // // // POST endpoint to create a short URL
// // // app.post("/api/create", (req, res) => {
// // //   // Extract the 'url' from the request body
// // //   const { url } = req.body;
// // //   // Send a 7-character nanoid as a response (this would typically be the short URL)
// // //   res.send(nanoid(7));
// // // });

// // // // Start the server and connect to the database
// // // app.listen(5000, () => {
// // //   // Call the connectDB function to establish MongoDB connection
// // //   connectDB();
// // //   console.log("Server is running on http://localhost:5000");
// // // });

// // // // GET - Redirection (comment indicating future functionality)
// // // // POST - Create short url (comment indicating current functionality)

// // // // This line was causing a re-declaration issue and should be removed from app.js
// // // // console.log(process.env.MONGO_URI); 





// // // app.js

// // import express from "express";
// // import { nanoid } from "nanoid";
// // import dotenv from "dotenv";
// // // Ensure this path is correct relative to app.js.
// // // If src is inside the backend folder (e.g., backend/src/config/mongo.config.js), this is correct.
// // import connectDB from "./src/config/mongo.config.js"; 

// // // Load environment variables from .env file.
// // // IMPORTANT: If app.js is in a 'backend' folder and .env is in the project root,
// // // we need to specify the path to go up one level.
// // dotenv.config({ path: '../.env' }); 

// // const app = express();

// // // Middleware to parse JSON request bodies
// // app.use(express.json());
// // // Middleware to parse URL-encoded request bodies
// // app.use(express.urlencoded({ extended: true }));

// // // POST endpoint to create a short URL
// // app.post("/api/create", (req, res) => {
// //   // Extract the 'url' from the request body
// //   const { url } = req.body;
// //   // Send a 7-character nanoid as a response (this would typically be the short URL)
// //   res.send(nanoid(7));
// // });

// // // Start the server and connect to the database
// // app.listen(5000, () => {
// //   // Call the connectDB function to establish MongoDB connection
// //   connectDB();
// //   console.log("Server is running on http://localhost:5000");
// // });

// // // GET - Redirection (comment indicating future functionality)
// // // POST - Create short url (comment indicating current functionality)





// // app.js

// import express from "express";
// import { nanoid } from "nanoid";
// import dotenv from "dotenv";
// import path from "path"; // Import the 'path' module to help with paths
// import { fileURLToPath } from 'url'; // For __dirname equivalent in ES Modules

// // Get __dirname equivalent for ES Modules
// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);

// // --- START DEBUGGING PATHS ---
// console.log("Current working directory (process.cwd()):", process.cwd());
// console.log("Directory name of app.js (__dirname):", __dirname);

// // Path to .env file
// const envPath = path.resolve(__dirname, '../.env');
// console.log("Attempting to load .env from:", envPath);
// dotenv.config({ path: envPath });

// // Path to mongo.config.js
// const mongoConfigPath = path.resolve(__dirname, '../src/config/mongo.config.js');
// console.log("Attempting to import connectDB from:", mongoConfigPath);
// // --- END DEBUGGING PATHS ---

// // Now, import connectDB after logging the path
// import connectDB from "../src/config/mongo.config.js"; 


// const app = express();

// // Middleware to parse JSON request bodies
// app.use(express.json());
// // Middleware to parse URL-encoded request bodies
// app.use(express.urlencoded({ extended: true }));

// // POST endpoint to create a short URL
// app.post("/api/create", (req, res) => {
//   // Extract the 'url' from the request body
//   const { url } = req.body;
//   // Send a 7-character nanoid as a response (this would typically be the short URL)
//   res.send(nanoid(7));
// });

// // Start the server and connect to the database
// app.listen(5000, () => {
//   // Call the connectDB function to establish MongoDB connection
//   connectDB();
//   console.log("Server is running on http://localhost:5000");
// });

// // GET - Redirection (comment indicating future functionality)
// // POST - Create short url (comment indicating current functionality)
