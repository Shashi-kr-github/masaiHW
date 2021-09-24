const express = require('express');



const connect = require('./config/db')
const app = express();
app.use(express.json());

// create a model
//  import User 


const userController = require('./controller/user.controller');

const postController = require('./controller/post.controller');

const commentController = require('./controller/comment.controller');

const tagController = require('./controller/tag.controller');


app.use('/user', userController);

app.use('/post', postController);

app.use('/comment', commentController);

app.use('/tag', tagController);


app.listen(8884 ,async function ()  {

    await connect();
    console.log("listen port 8884")

})