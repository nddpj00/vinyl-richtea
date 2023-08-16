const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 5000;

// Serve static files from the React app
app.use(express.static(path.join(__dirname, "../frontend/build")));

// API routes (add your API endpoints here)
// app.get('/api/data', (req, res) => {
//   res.json({ message: 'API endpoint' });
// });

// Serve the React app
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../frontend/build/index.html"));
});

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
