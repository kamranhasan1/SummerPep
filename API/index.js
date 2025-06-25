let express = require("express");
let bodyParser = require("body-parser");
const connection = require("./connection.js"); // MySQL DB connection

let app = express();

app.use(bodyParser.json()); // Parses incoming JSON requests

app.listen(3000, () => {
    console.log("Server running at port 3000");
});

// Root route - basic test message
app.get('/', (req, res) => {
    res.send("What's good mate");  
});


// API route to fetch categories from DB
app.get("/api/category", (req, res) => {
    connection.query(
        "SELECT id, topic_name, description, is_enable FROM master_category",
        (err, result) => {
            if (err) {
                res.status(400).json({ msg: "Error in SQL" }); // Error response
            } else {
                res.status(200).json(result); // Send data as JSON
            }
        }
    );
});
