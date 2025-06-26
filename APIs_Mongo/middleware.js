 
const express = require("express");
const router = express.Router();
const Category = require("./UserSchema"); 

// Middleware to parse URL-encoded bodies
router.use(express.urlencoded({ extended: false }));

// Route to display category list in HTML table
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

module.exports = router;
