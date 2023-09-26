const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const app = express()
app.use(bodyParser.json())
app.use(cors())

    const posts = {}

app.get('/posts',(req, res) => {
    console.log("Posts: ",posts);

    res.send(posts);
})

app.post('/events', (req, res) => {
    const {type, data} = req.body;

    if (type === 'PostCreated'){
        const {id, title} = data;
        posts[id] = {id, title, comments: []}
        console.log(posts[id]);

    }
    else if (type === 'CommentCreated'){
        const {id, content, postId, status} = data;
        const post = posts[postId];
        post.comments.push({id,content,status}); 
        console.log(posts[postId]);
    }
    else if(type === 'CommentUpdated'){
        const { id, postId, status } = data;
        const comments = posts[postId];
        const comment = comments.find((comment) => {
        return comment.id === id;
        });
        comment.status = status;
        comment.content=content;
    }
    res.send({});
})

app.listen(4002, () => {
    console.log('Listening on 4002')
})