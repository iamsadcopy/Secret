const express = require("express");
const app = express();
const cors = require("cors");
const messageRouter = require("./routes/messages.router");

app.use(express.json());
app.use(cors({
    origin: ["http://localhost:8080", "http://192.168.0.12:8080"]
}))
app.use("/api/secret", messageRouter);

module.exports = app;