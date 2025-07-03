
let mysql = require("mysql2");
let connectionString = {
    host: "localhost",
    user: "root",
    password: "1234",
    database: "online_quiz"
};

let connection = mysql.createConnection(connectionString);   

connection.connect((err) => {   
    if(err) {
        console.log("error", err);
    } else {
        console.log("Database connected successfully");
    }
});

module.exports = connection;