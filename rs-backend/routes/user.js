const express = require("express")
const router = express.Router()
const userController = require('../controllers/user');

router.post('/user', userController.createUser);
router.post('/user/:user_id/question/:question_id', userController.answerQuestion);
router.post('/user/:user_id/question', userController.answerQuestions)
router.get('/user/:user_id/recommendation', userController.createRecommendation);

module.exports = router;