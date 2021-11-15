const express = require("express")
const router = express.Router()
const userController = require('../controllers/user');

router.post('/user', userController.createUser);
router.put('/user/:user_id/question/:question_id', userController.answerQuestion);
router.put('/user/:user_id/choice', userController.makeChoice);
router.post('/user/:user_id/recommendation', userController.createRecommendation);

module.exports = router;