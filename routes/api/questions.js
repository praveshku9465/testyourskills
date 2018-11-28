const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');
const Post = require('../../models/Post');
const Profile = require('../../models/Profile');
const validatePostInput = require('../../validation/post');
const QuestionsController = require('../../controller/QuestionController');

// @route   GET api/posts/test
// @desc 	Tests posts route
// @access  public
router.get('/test', (req, res) => res.json({msg : 'Questions works'}));

// @route   POST api/questions/
// @desc 	Create questions
// @access  private
router.post('/', QuestionsController.create);

// @route   GET api/questions/
// @desc 	get questions
// @access  public
router.get('/', QuestionsController.getAll);

module.exports = router;