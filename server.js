const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.urlencoded({ extended: true }));

app.use(express.static('public'));

app.post('/submit', (req, res) => 
    {
    const { name, email, message } = req.body;
    console.log(`Received form submission: ${name}, ${email}, ${message}`);
    res.send('Form submission successful!');
});

app.listen(PORT, () => 
    {
    console.log(`Server is running on http://localhost:${PORT}`);
});
