const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    userTypes: Array,
    choice: Array,
    recommendation: Array 
});

module.exports = mongoose.model('User', userSchema);