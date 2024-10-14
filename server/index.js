const express = require('express');
const cors = require('cors');
const axios = require('axios'); // Import axios
const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

// Modify this route to fetch data from the external API
app.get('/get_from_db', async (req, res) => {
  try {
    const response = await axios.get('http://150.239.48.72:8443/get_from_db');
    res.json(response.data); // Return the data from the external API
  } catch (error) {
    console.error('Error fetching data:', error);
    res.status(500).json({ error: 'Failed to fetch data' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});