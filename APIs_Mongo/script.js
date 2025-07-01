const express = require("express");
const mongoose = require("mongoose");
const categoryRoutes = require("./middleware");

const app = express();
const PORT = 3000;

// MongoDB Connection
mongoose
  .connect("mongodb://localhost/first_mongoDB", { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Database connected"))
  .catch((err) => console.error("Error connecting to database", err));

// Default home route
app.get("/", (req, res) => {
  res.send("<h1>What's Good!</h1>");
});

 
app.use("/", categoryRoutes);

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
