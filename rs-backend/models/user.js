const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    password: {type: String, required: true},
    email: {type: String, required: true, unique: true},
    userTypes: Object, // {"disruptor": 8, ...}
    choice: Object, // {"performance": x, "accomplishment": y}
    recommendation: Object // {"performance": x, "accomplishment": y}
});

module.exports = mongoose.model('User', userSchema);