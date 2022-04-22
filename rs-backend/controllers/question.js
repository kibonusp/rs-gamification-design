const questionModel = require('../models/question');

// TODO: add CORS middleware
module.exports.createQuestion = async (req, res) => {
    const question = new questionModel({
        description: req.body.description,
        type: req.body.type
    });
    
    const questionCreated = await question.save();
    return res.status(200).json(questionCreated);
}

function shuffle (arr) {
    var j, x, index;
    for (index = arr.length - 1; index > 0; index--) {
        j = Math.floor(Math.random() * (index + 1));
        x = arr[index];
        arr[index] = arr[j];
        arr[j] = x;
    }
    return arr;
}

module.exports.getQuestions = async (req, res) => {
    const questions = await questionModel.find({});
    return res.status(200).send(shuffle(questions));
}