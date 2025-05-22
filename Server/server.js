const express = require('express');
const cors = require('cors');

const app = express();
const port = 5000;

// Allow Cross-Origin requests
app.use(cors());

// Sample data for portfolio
const sampleData = [
  { id: 1, title: 'Project 1', description: 'Saher Is The King' },
  { id: 2, title: 'Project 2', description: 'Description of Project 2' },
];

// Route to fetch sample portfolio data
app.get('/api/projects', (req, res) => {
  res.json(sampleData);
});

app.get('/api/sample-data', (req, res) => {
  res.json({ message: 'Admin data loaded successfully', timestamp: Date.now() });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
