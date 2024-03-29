require("dotenv").config();

const express = require("express");

const mongoose = require("mongoose");

const workoutRoutes = require("./routes/workouts");

//express app
const app = express();

// middleware
app.use(express.json());

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

//routes
app.use("/api/workouts", workoutRoutes);

//Connect to DB
mongoose
  .connect(process.env.MONG_URL)
  .then(() => {
    // liesten for requests
    app.listen(process.env.PORT, () => {
      console.log("listening on port 4000");
    });
  })
  .catch((error) => {
    console.log(error);
  });
