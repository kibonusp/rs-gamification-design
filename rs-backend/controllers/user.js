const userModel = require('../models/user');
const questionModel = require('../models/question');
const bcrypt = require('bcrypt');
const recommendationTable = require('../models/recommendation');

module.exports.createUser = async (req, res) => {
    const hashedPassword = await bcrypt.hash(req.body.password, 10);

    try {
        const user = new userModel({
            email: req.body.email,
            password: hashedPassword,
            userTypes: {
                "philantropist": 0,
                "socializer": 0,
                "free spirit": 0,
                "achiever": 0,
                "player": 0,
                "disruptor": 0
            },
            choice: {
                "preference": 0,
                "accomplishment": 0
            }
        });
        const userCreated = await user.save();
        return res.status(200).json(userCreated);
    }
    catch (error) {
        console.log(JSON.stringify(error));
        if(error.code === 11000)
            return res.send({status:'error', error:'email already exists'})
        throw error
    }
};

module.exports.answerQuestion = async (req, res) => {
    try {
        const question = await questionModel.findById(req.params.question_id);
        if (!question)
            return {status:'error',error:'question not found'};
        const user = await userModel.findById(req.params.user_id);
        if(!user)
            return {status:'error',error:'user not found'};
        let newUserTypes = user.userTypes;
        newUserTypes[question.type] += req.body.likert;
        const newUser = await userModel.findByIdAndUpdate(req.params.user_id, {
            userTypes:  newUserTypes
        }, {new: true})
        res.status(200).send(newUser);
    }
    catch (error) {
        console.log(JSON.stringify(error));
        return {status:'error',error:'timed out'}
    }
}

module.exports.makeChoice = async (req, res) => {
    try {
        const user = await userModel.findByIdAndUpdate(req.params.user_id, {
            choice: {
                preference: req.body.preference,
                accomplishment: req.body.accomplishment
            }
        }, {new: true});
        res.status(200).send(user);
    }
    catch (error) {
        console.log(error);
        return {status:'error',error:'timed out'}
    }
}

/*
module.exports.createRecommendation = async(req, res) => {
    
}
*/