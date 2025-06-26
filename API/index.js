let express = require("express");
let bodyParser = require("body-parser");
const connection = require("./connection.js"); // MySQL DB connection

let app = express();

app.use(bodyParser.json()); // Parses incoming JSON requests
app.use(bodyParser.urlencoded({ extended: true })); // Parse form data
 

// Root route - basic test message
app.get('/', (req, res) => {
    res.send("What's good mate");  
});


//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
 
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

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// fetching id

app.get("/api/category/:id", (req, res) => {
    let id = req.params.id;//fetching id from query string

    connection.query(
        "SELECT id, topic_name, description, is_enable FROM master_category WHERE id = ?",[id], //Pass the ID as a parameter
        (err, result) => {
            if (err) {
                res.status(400).json({ msg: "Error in SQL", error: err }); // Error response
            } else {
                res.status(200).json(result); // Send data as JSON
            }
        }
    );
});

 

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

app.post("/api/category", (req, resp) => {
    let body = req.body;
    console.log("Request Body:", body); // Debug log
    
    if (!body.topic_name) {  
        return resp.status(400).json({ msg: "Mandatory field 'topic_name' is missing!" });
    }

    connection.query(
        "INSERT INTO master_category (topic_name, description, is_enable) VALUES (?, ?, ?)", 
        [body.topic_name, body.description, body.is_enable],
        (error, result) => {
            if (error) {
                console.error("SQL Error:", error);
                return resp.status(500).json({ msg: "Database error!" });
            }
            return resp.status(200).json({ msg: "Category added successfully!" });
        }
    );
});




/*
//~~~~~~~~
this code will also work for deletion

  app.delete("/api/category/:id",(req,res)=>{
    let id  = req.params.id;
    connection.query(`DELETE FROM master_category WHERE id = ${id}`,(err,result)=>{
        return res.status(200).json({msg:`one record deleted with id ${id}`});
     })
  })*/



//   ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~FOR DELETE
  app.delete("/api/category/:id",(req,resp)=>{
    let id = req.params.id;
    if(!id){
      return resp.status(404).json({msg: 'Error: id is missing!'});
    }else{
      connection.query(`DELETE FROM master_category WHERE id = ${id}`,(err,result)=>{
        if(err){
          return resp.status(400).json({msg: 'Error in SQL!'});
        }else{
          return resp.status(200).json({msg: `One record deleted with id ${id}`});
        }
      })
    }
  })
  




  //~~~~~~~~~~~~~~put method  
  app.put("/api/category/:id", (req, resp) => {
    const id = req.params.id;
    const { topic_name, description, is_enable } = req.body;  
  
    if (!id) {
      return resp.status(404).json({ msg: "Error: id is missing!" });
    }
  
    connection.query(
      `UPDATE master_category SET topic_name = ?, description = ?, is_enable = ? WHERE id = ?`,
      [topic_name, description, is_enable, id], 

      (err, result) => {
        if (err) {
          return resp.status(400).json({ msg: "Error updating record", error: err });
        } else {
          return resp.status(200).json({ msg: `One record updated with id ${id}` });
        }
      }
    );
  });
  



  app.listen(3000, () => {
    console.log("Server is running on port 3000");
  });

 