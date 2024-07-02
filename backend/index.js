const express = require('express');
const usersRouter = require('./routers/users.router');
const postsRouter = require('./routers/posts.router');

const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const port = 3000;

app.use(express.json());
app.use(cors());//conteaza ordinea!!!!

//Routers
app.use('/users',usersRouter);
app.use('/posts',postsRouter);


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
  mongoose
  .connect("mongodb+srv://andreid:Andrei2024@cluster0.txe9qs3.mongodb.net/friendr")
  .then(() => {
    console.log('Connected to DB and listening');
})
  .catch((err) => console.error(err));
})