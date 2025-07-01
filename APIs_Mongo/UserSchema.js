const mongoose = require("mongoose");

// Category Schema
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

module.exports = mongoose.model("Category", categorySchema);
