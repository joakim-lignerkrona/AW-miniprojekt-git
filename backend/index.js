// initiate express app
const express = require('express');
const app = express();
// import path 
const path = require('path');
var bodyParser = require('body-parser')
const __frontend = path.join(__dirname, '../frontend');

app.listen(3000, () => {
    console.log('Server started on port 3000');
});
app.use(express.json());

app.post('/api/newpost', (req, res) => {
    console.log(req.body);
    res.send('POST request to the homepage');
})
app.post('/api/vote/:id', (req, res) => {
    console.log(req.body);
    res.send('POST request to the homepage');
})
app.get('/', (req, res) => {
    res.sendFile(path.join(__frontend, 'index.html'));
})
app.get('/create', (req, res) => {
    res.sendFile(path.join(__frontend, 'newTip.html'));
})
app.get('/post/:id', (req, res) => {
    res.sendFile(path.join(__frontend, 'vote.html'));
})