const express = require("express");
const cors = require("cors");
const mysql = require("mysql2");

const app = express();
const port = 3000;

// Middleware
app.use(cors());
app.use(express.json());

// MySQL Connection
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password:'',
  database: 'db_sushi'
});

// Test Database Connection
db.connect((err) => {
  if (err) {
    console.error("Database connection failed:", err.stack);
    return;
  }
  console.log("Connected to MySQL database.");
});

// Route: Get all menu items
app.get("/menu", (req, res) => {
  const query = "SELECT * FROM menu";
  db.query(query, (err, results) => {
    if (err) {
      console.error("Error fetching menu:", err);
      res.status(500).json({ error: "Failed to fetch menu" });
      return;
    }
    res.json(results);
  });
});

// Route: Get menu item by ID
app.get("/menu/:id", (req, res) => {
  const query = "SELECT * FROM menu WHERE id = ?";
  db.query(query, [req.params.id], (err, results) => {
    if (err) {
      console.error("Error fetching menu item:", err);
      res.status(500).json({ error: "Failed to fetch menu item" });
      return;
    }
    res.json(results[0]);
  });
});

// Start Server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
