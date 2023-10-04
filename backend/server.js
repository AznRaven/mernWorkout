// import dotenv
require("dotenv").config();

// import express
const express = require("express");

// import cors
const cors = require('cors')

// import database
const connectDB = require('./config/db')

// import routes
const workoutRoutes = require("./routes/workoutRoutes");

// use express as app
const app = express();

// use database
connectDB()

// create port to listen to
const PORT = process.env.PORT;

// middleware
app.use(express.json());
app.use(cors())

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

// routes
app.use("/api/workouts", workoutRoutes);

// listen for requests
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});

