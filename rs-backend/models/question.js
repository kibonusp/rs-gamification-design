const mongoose = require('mongoose');

const questionSchema = mongoose.Schema({
    description: String,
    type: Number
});

module.exports = mongoose.model('Question', questionSchema);
