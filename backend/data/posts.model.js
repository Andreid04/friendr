/*
id
date
user_id
title
description
*/

const mongoose = require('mongoose');

const PostModel = mongoose.model('Post',
    {
        id: String,
        date: String,
        author: String,
        title: String,
        description: String,
        likes: [String]
    }
);

module.exports = PostModel;