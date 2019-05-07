var express = require('express');
var cors = require('cors');
var bodyParser = require('body-parser');
var app = express();
var mongoose = require('mongoose');
const passport = require('passport');

const users = require('./routes/api/users');

var port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(cors());
app.use(
    bodyParser.urlencoded({
        extended: false
    })
);

// DB Config
const db = require("./config/keys").mongoURI;

mongoose
    .connect(db, {useNewUrlParser: true})
    .then(() => console.log("mongoDb connected"))
    .catch(err => console.log(err))

// Passport middleware
app.use(passport.initialize());

// Passport config
require('./config/passport')(passport);

//  Routes
app.use('/api/users', users);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
});
