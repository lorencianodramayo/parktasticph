const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const path = require('path');

const app = express();

require("dotenv").config();

const PORT = process.env.PORT || 5000;

// Data parsing

app.use(express.json({ limit: "100mb" }));
app.use(
  cors({
    allowedHeaders: ["sessionId", "Content-Type"],
    exposedHeaders: ["sessionId"],
    origin: "*",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    preflightContinue: false,
  })
);

app.use(express.urlencoded({ limit: "100mb", extended: false }));

// Step 3: Initialization
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/dist"));
}

// Step 4: HTTP request logger
app.use(morgan("tiny"));

app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/dist", "index.html"));
});

app.listen(PORT, console.log(`Server is starting at ${PORT}`));
