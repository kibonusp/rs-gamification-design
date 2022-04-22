const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    // Value for each hexad user type
    userTypes: Array,

    // User's dominant types
    dominantTypes: Array,

    // Number of questions answered by the user
    nQuestionsAnswered: Number,

    // Mantain record of which questions were not answered
    questions: Object,

    // Gamification design recommendation given sense of accomplishment and preference
    recommendation: Array,
    
    // Demographics (age, scholarity, gender, country)
    demographics: Object
});

module.exports = mongoose.model('User', userSchema);