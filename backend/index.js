// initiate express app
const express = require('express');
const app = express();
// import path 
const path = require('path');
const {v4: uuid} = require('uuid');
const __frontend = path.join(__dirname, '../frontend');
let posts = []

// read posts from file
const fs = require('fs');
fs.readFile(path.join(__dirname, 'posts.json'), (err, data) => {
    if (err) {
        console.log(err);
        writePosts();
    } else {
        posts = JSON.parse(data);
    }
});



app.listen(3000, () => {
    console.log('Server started on port 3000');
});
app.use(express.json());
app.use(express.urlencoded());

app.post('/api/newpost', (req, res) => {
    console.log(req.body);
    let post = req.body;
    post.id = uuid();
    post.votes = [{id: "first", vote: 0}];
    res.json(post);
    posts.push(post);
    writePosts();
    res.redirect('/');
})
app.post('/api/vote/:id', (req, res) => {
    console.log(req.body);
    let id = req.params.id;
    res.send(`POST request to the homepage with id ${id}`);
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


function writePosts() {
    fs.writeFile(path.join(__dirname, 'posts.json'), JSON.stringify(posts), (err) => {
        if (err) {
            console.log(err);
        }
    });
};