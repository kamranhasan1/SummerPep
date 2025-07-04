const express = require("express");
const router = express.Router();
const Category = require("./UserSchema"); // Ensure consistent casing

// Middleware to parse JSON and URL-encoded data
router.use(express.json());
router.use(express.urlencoded({ extended: false }));

// Display categories in HTML table
router.get("/category", async (req, res) => {
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

// JSON API to get all categories
router.get("/api/category", async (req, res) => {
  try {
    const categoryList = await Category.find({});
    res.status(200).json({ msg: categoryList });
  } catch (err) {
    console.error("Error fetching categories:", err);
    res.status(500).json({ msg: "Error fetching categories" });
  }
});

// Insert new category
router.post("/api/category", async (req, res) => {
  const { categoryName, description, is_enable } = req.body;

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

module.exports = router;
