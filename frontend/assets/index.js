let articleTemplate = document.querySelector('article');
document.querySelectorAll('article').forEach(article => article.remove());
let posts = [];
fetch('/api/posts')
    .then(res => res.json())
    .then(data => {
        posts = data;
        posts.forEach(post => {
            let article = articleTemplate.cloneNode(true);
            article.querySelector('h2').innerText = post.title;
            article.querySelector('h5').innerText = post.author;
            article.querySelector('p').innerText = post.description;
            article.querySelector('a').href = `/post/${post.id}`;
            document.querySelector('.col').appendChild(article);

        });
    })