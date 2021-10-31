const express = require('express');
const mongoose = require('mongoose');

const app = express();

require('dotenv').config();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

const PORT = process.env.PORT || 4333;

// Routes
app.use(require('./routes/user'));
app.use(require('./routes/question'));
app.use(require('./routes/login'));

mongoose.connect(process.env.CONNSTRING, {useNewUrlParser: true, useUnifiedTopology: true});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    app.listen(PORT, () => {
        console.log(`App listening at http://localhost:${PORT}`);
    });
});