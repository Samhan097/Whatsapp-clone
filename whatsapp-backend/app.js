// importing
import express from "express";

// app config
const app = express();
const port = process.env.PORT || 9000;
// middlewares

// Do config

// ????

// api routes
app.get("/", (req, res) => res.status(200).send("Hello world"));
// listner
app.listen(port, () => console.log(`Listning on localhost:${port}`));
