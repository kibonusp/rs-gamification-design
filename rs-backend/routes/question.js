const express = require('express');
const router = express.Router();
const questionController = require('../controllers/question');

router.post('/question', questionController.createQuestion);
router.get('/question', questionController.getQuestions);
router.get('/question/:type', questionController.getQuestionsByType);

module.exports = router;