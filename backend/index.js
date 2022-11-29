// initiate express app
const express = require('express');
const app = express();

app.listen(3000, () => {
    console.log('Server started on port 3000');
});

app.post('/api/newpost', (req, res) => {
    console.log(req.body);
    res.send('POST request to the homepage');
})
app.post('/api/vote/:id', (req, res) => {
    console.log(req.body);
    res.send('POST request to the homepage');
})