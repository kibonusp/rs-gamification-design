const userModel = require('../models/user');
const questionModel = require('../models/question');
const recommendationModel = require('../models/recommendation');

module.exports.createUser = async (req, res) => {
    if (typeof req.body.age !== 'number')
        return res.status(400).send({error: 'age is not number'});
    if (typeof req.body.scholarity !== 'string')
        return res.status(400).send({error: 'scholarity is not string'});
    if (typeof req.body.gender !== 'string')
        return res.status(400).send({error: 'gender is not string'});
    if (typeof req.body.country !== 'string')
        return res.status(400).send({error: 'country is not string'});

    const questions = await questionModel.find({});
    let questionObject = {};
    for (let question of questions)
        questionObject[question._id] = false;
    
    const user = new userModel({
        userTypes: [0, 0, 0, 0, 0, 0],
        nQuestionsAnswered: 0,
        questions: questionObject,
        recommendation: [0, 0],
        demographics: {
            // add req.body
            age: req.body.age,
            scholarity: req.body.scholarity,
            gender: req.body.gender,
            country: req.body.country
        }
    });
    const userCreated = await user.save();
    return res.status(200).json(userCreated);
};

module.exports.answerQuestion = async (req, res) => {
    try {
        const question = await questionModel.findById(req.params.question_id);
        if (!question)
            return res.status(404).send({error: 'question not found'});
        
        const user = await userModel.findById(req.params.user_id);
        if(!user)
            return res.status(404).send({error: 'user not found'});
        
        // Check if question has already been answered
        if (user.questions[question._id])
            return res.status(409).send({error:'question has already been answered'})

        // Update userType value summing up the likert scale for the question    
        user.userTypes[question.type] += req.body.likert;
        
        // Update that the question was answered
        user.questions[question._id] = true;
        user.nQuestionsAnswered += 1;

        // If all questions were answered, I get the dominant user types
        if (user.nQuestionsAnswered == 24)
            user.dominantTypes = maxIndexes(user.userTypes);

        const newUser = await userModel.findByIdAndUpdate(req.params.user_id, {
            userTypes:  user.userTypes,
            dominantTypes: user.dominantTypes,
            nQuestionsAnswered: user.nQuestionsAnswered,
            questions: user.questions
        }, {new: true});

        res.status(200).send(newUser);
    }
    catch (error) {
        console.log(JSON.stringify(error));
        return res.status(504).send({'error': 'timed out'});
    }
}

module.exports.answerQuestions = async (req, res) => {
    try {
        const user = await userModel.findById(req.params.user_id);
        if(!user)
            return res.status(404).send({error: 'user not found'});

        const questions = req.body.questions;

        if (questions.length > 24)
            return res.status(400).send({error: 'there cannot be more than 24 valid questions'})

        let isInModel = true;
        let i = 0;
        while (isInModel && i < questions.length) {
            if (!questionModel.exists({_id: questions[i]._id}))
                isInModel = false;
            i += 1
        }

        if (!isInModel)
            return res.status(404).send({error: 'one or more of the questions were not found'})
        
        let newUser;
        for (let questionReq of questions) {
            if (user.questions[questionReq._id])
                return res.status(409).send({error:'question has already been answered'})

            user.userTypes[questionReq.type] += questionReq.likert;
            
            user.questions[questionReq._id] = true;
            user.nQuestionsAnswered += 1;

            if (user.nQuestionsAnswered == 24)
                user.dominantTypes = maxIndexes(user.userTypes);

            // Adicionar no final para fazer uma requisição só
            newUser = await userModel.findByIdAndUpdate(req.params.user_id, {
                userTypes:  user.userTypes,
                dominantTypes: user.dominantTypes,
                nQuestionsAnswered: user.nQuestionsAnswered,
                questions: user.questions
            }, {new: true});
        }
        res.status(200).send(newUser);
    }
    catch (error) {
        console.log(JSON.stringify(error));
        return res.status(504).send({'error': 'timed out'});
    }
}

// function to get maximum value of array
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
            return res.status(404).send({error: 'user not found'});

        if (user.nQuestionsAnswered != 24)
            return res.status(428).send({error: 'not all questions were answered'});

        const accomplishment = []
        const preference = []
        for (userType of user.dominantTypes) {
            let usertypeAcc = MaxIndexBPTable(recommendationModel.BTable[userType][0], recommendationModel.PTable[userType][0]);
            let userTypeP = MaxIndexBPTable(recommendationModel.BTable[userType][1], recommendationModel.PTable[userType][1]);

            accomplishment.push(usertypeAcc);
            preference.push(userTypeP);
        }
        const newUser = await userModel.findByIdAndUpdate(req.params.user_id, {
            recommendation: [accomplishment, preference]
        }, {new: true})
        return res.status(200).send(newUser);
    }
    catch (error) {
        console.log(error);
        return res.status(504).send({'error': 'timed out'});
    }
}