const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const passport = require('passport');

const users = require('./routes/api/users');
const profile = require('./routes/api/profile');
const posts = require('./routes/api/posts');
const questions = require('./routes/api/questions');

const app = express();

app.use(bodyParser.urlencoded({extended : true}));
app.use (bodyParser.json());

//DB config
const db = require('./config/keys').mongoURI;

//DB connect
mongoose
	.connect(db)
	.then(() => console.log('DB connected'))
	.catch(err => console.log(err));

//Passport middleware
app.use(passport.initialize());

//Passport Config
require('./config/passport')(passport);

//use routes
app.use('/api/users', users);
app.use('/api/profile', profile);
app.use('/api/posts', posts);
app.use('/api/question', questions);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`server is running on ${port}`));