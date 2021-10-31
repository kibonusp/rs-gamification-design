const questionModel = require('../models/question');

module.exports.createQuestion = async (req, res) => {
    const question = new questionModel({
        description: req.body.description,
        type: req.body.type
    });
    
    const questionCreated = await question.save();
    return res.status(200).json(questionCreated);
}

module.exports.getQuestions = async (req, res) => {
    const questions = await questionModel.find({});
    return res.status(200).send(questions);
}

module.exports.getQuestionsByType = async (req, res) => {
    const questions = await questionModel.find({type: req.params.type});
    return res.status(200).json(questions);
}