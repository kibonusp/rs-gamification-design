// TODO: Remover os controllers e routes que promovem que alguém altere o banco de dado das questões ou limitá-lo com o CORS

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

require('dotenv').config();

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors())
app.use(cors({origin: 'http://localhost:3000'}));

const PORT = process.env.PORT || 5300;

// Routes
app.use(require('./routes/user'));
app.use(require('./routes/question'));

mongoose.connect(process.env.CONNSTRING, {useNewUrlParser: true, useUnifiedTopology: true});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    app.listen(PORT, () => {
        console.log(`App listening at http://localhost:${PORT}`);
    });
});