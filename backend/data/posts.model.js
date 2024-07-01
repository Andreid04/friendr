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
        id: Number,
        date: String,
        user_id: String,
        title: String,
        description: String
    }
);

module.exports = PostModel;