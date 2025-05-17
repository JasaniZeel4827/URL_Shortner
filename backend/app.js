// import express from "express";
// import { nanoid } from "nanoid";

// const app = express();
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

// app.get("/api/create", (req, res) => {
//   const url = req.body;
//   console.log(url);
//   res.send(nanoid(7));
// });

// app.listen(5000, () => {
//   console.log("Server is running on http://localhost:5000");
// });

// // GET - Redirection
// // POST - Create short ur







// import express from "express";
// import { nanoid } from "nanoid";
// import dotenv from "dotenv";
// dotenv.config("./.env")

// const app = express();
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

// // ✅ Changed to POST
// app.post("/api/create", (req, res) => {
//   const url = req.body;
//   console.log(url);
//   res.send(nanoid(7));
// });

// app.listen(5000, () => {
//   console.log("Server is running on http://localhost:5000");
// });




import express from "express";
import { nanoid } from "nanoid";
import dotenv from "dotenv";
dotenv.config({ path: "./.env" });
import connectDB from "./src/config/monogo.config.js";
import filecabinet from "./src/config/monogo.config.js";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post("/api/create", (req, res) => {
    const { url } = req.body;
    res.send(nanoid());
});

app.listen(5000, () => {
    connectDB();
    console.log("Server is running on http://localhost:5000");
});

// GET - Redirection
// POST - Create short URL