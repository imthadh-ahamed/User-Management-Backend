import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import app from "./app.js";
import chalk from "chalk";

dotenv.config();

const PORT = process.env.PORT || 3000;
const MONGODB = process.env.MONGODB;

app.get('/', (req, res) => {
  res.send("Hello World! This is a dispensary simple booking system");
});

mongoose
  .connect(MONGODB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log(chalk.yellow("Connected to MongoDB"));
    app.listen(PORT, () => {
      console.log(chalk.yellow(`Server running on port ${PORT}!!`));
    });
  })
  .catch((err) => {
    console.error(chalk.red("Database connection error:"), err);
  });
