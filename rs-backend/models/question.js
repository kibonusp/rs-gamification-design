const mongoose = require('mongoose');

const questionSchema = mongoose.Schema({
    description: String,
    type: String
});

module.exports = mongoose.model('Question', questionSchema);
