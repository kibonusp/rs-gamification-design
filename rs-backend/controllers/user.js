const userModel = require('../models/user');
const questionModel = require('../models/question');
const bcrypt = require('bcrypt');
const recommendationModel = require('../models/recommendation');

module.exports.createUser = async (req, res) => {
    const user = new userModel({
        userTypes: [0, 0, 0, 0, 0, 0],
        choice: [0, 0],
        recommendation: [0, 0]
    });
    const userCreated = await user.save();
    return res.status(200).json(userCreated);
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


// need to check if user exists
module.exports.makeChoice = async (req, res) => {
    try {
        const user = await userModel.findByIdAndUpdate(req.params.user_id, {
            choice: [req.body.accomplishment, req.body.preference]
        }, {new: true});
        res.status(200).send(user);
    }
    catch (error) {
        console.log(error);
        return {status:'error',error:'timed out'}
    }
}

const max = arr => {
    return arr.reduce((a, b) =>
        Math.max(a,b)
    );
};

const maxIndexes = arr => {
    let indexes = [];
    const maxValue = max(arr);
    for (const [index, value] of arr.entries()) {
        if (value === maxValue)
            indexes.push(index);
    }
    return indexes;
}

const MaxIndexBPTable = (b_arr, p_arr) => {
    // I get the indexes which the value of B is maximum
    let indexes = maxIndexes(b_arr);

    console.log(indexes);

    // If I have multiple indexes I get the one who has minimum p-value
    let min = p_arr[indexes[0]];
    let min_index = indexes[0];
    for (index of indexes) {
        if (p_arr[index] < min)  {
            min = p_arr[index];
            min_index = index
        }
    }

    return min_index;
}

module.exports.createRecommendation = async (req, res) => {
    try {
        const user = await userModel.findById(req.params.user_id);
        if (!user)
            return {status:'error',error:'user not found'};
        const accomplishment = []
        const preference = []
        console.log(maxIndexes(user.userTypes));
        for (userType of maxIndexes(user.userTypes)) {
            console.log(recommendationModel.BTable[userType][0])
            let usertypeAcc = MaxIndexBPTable(recommendationModel.BTable[userType][0], recommendationModel.PTable[userType][0]);
            let userTypeP = MaxIndexBPTable(recommendationModel.BTable[userType][1], recommendationModel.PTable[userType][1]);

            accomplishment.push(usertypeAcc);
            preference.push(userTypeP);
        }
        const newUser = await userModel.findByIdAndUpdate(req.params.user_id, {
            recommendation: [accomplishment, preference]
        }, {new: true})
        res.status(200).send(newUser);
    }
    catch (error) {
        console.log(error);
        return {status:'error',error:'timed out'}
    }
}