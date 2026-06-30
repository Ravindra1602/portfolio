const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// Serve all static assets from the "public" directory
app.use(express.static(path.join(__dirname, 'public')));

// Fallback route to serve index.html for any root requests
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
    console.log(`Server running smoothly at http://localhost:${PORT}`);
});