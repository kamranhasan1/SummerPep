const express = require("express");
const mongoose = require("mongoose");

const app = express();
const PORT = 3000;

// Connect to MongoDB
mongoose
  .connect("mongodb://localhost/first_mongoDB", { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Database connected"))
  .catch((err) => console.error("Error connecting to database", err));

// Category Schema and Model
const categorySchema = new mongoose.Schema({
  categoryName: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  is_enable: {
    type: String,
  },
}, { timestamps: true });

const Category = mongoose.model("Category", categorySchema);

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Routes

app.get("/", (req, res) => {
  res.send("<h1>What's Good!</h1>");
});

// Display categories in HTML table
app.get("/category", async (req, res) => {
  try {
    const categoryList = await Category.find({});
    let html = `
      <table align='center' border='1' cellpadding='2'>
        <thead>
          <tr>
            <th>Category Name</th>
            <th>Description</th>
            <th>Is Enable</th>
          </tr>
        </thead>
        <tbody>
        ${categoryList.map(cat => `
          <tr>
            <td>${cat.categoryName}</td>
            <td>${cat.description || ''}</td>
            <td>${cat.is_enable || ''}</td>
          </tr>`).join("")}
        </tbody>
      </table>`;
    res.send(html);
  } catch (err) {
    console.error("Error fetching categories:", err);
    res.status(500).send("Error fetching categories");
  }
});

// Get all categories as JSON
app.get("/api/category", async (req, res) => {
  try {
    const categoryList = await Category.find({});
    res.status(200).json({ msg: categoryList });
  } catch (err) {
    console.error("Error fetching categories:", err);
    res.status(500).json({ msg: "Error fetching categories" });
  }
});

// Insert new category
app.post("/api/category", async (req, res) => {
  const { categoryName, description, is_enable } = req.body;

  // Basic validation
  if (!categoryName) {
    return res.status(400).json({ msg: "categoryName is required" });
  }

  try {
    const result = await Category.create({
      categoryName,
      description,
      is_enable,
    });
    res.status(201).json({ msg: "Category created successfully", data: result });
  } catch (err) {
    console.error("Error creating category:", err);
    res.status(500).json({ msg: "Error creating category" });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
