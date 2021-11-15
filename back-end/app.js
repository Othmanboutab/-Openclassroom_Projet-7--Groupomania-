const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const messageRoutes = require("./Routes/message");
const commentRoutes = require("./Routes/comment");
const userRoutes = require("./Routes/user");
const profileRoutes = require("./Routes/profil");
const path = require("path");

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, PATCH, OPTIONS"
  );
  next();
});

app.use(bodyParser.json());

app.use("/images", express.static(path.join(__dirname, "images")));

app.use("/api/messages", messageRoutes);
app.use("/api/messages/", commentRoutes);
app.use("/api/auth", userRoutes);
app.use("/api/auth", profileRoutes);

module.exports = app;