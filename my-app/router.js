const express = require("express");
const router = express.Router();
const authentication = require('./controller/authentication');
const test = require('./controller/test');
const user = require('./controller/user');
const question = require('./controller/question');
const result = require('./controller/result');
const student = require('./controller/student');

// create
router.post('/signup', authentication.signup);
router.post('/login', authentication.login);
router.post('/question/create', question.create);
router.post('/test/create', test.create);
router.post('/student/create', student.create);
router.post('/result/create', result.create);

// read
router.get('/test/read/:id', test.readById);
router.get('/user/read/:id', user.readById);
router.get('/student/read/:id', student.readById);
router.get('/result/read/:id', result.read);

//update
router.put('/test/update/:id', test.updateById);
router.put('/question/update/:id', question.updateById);
router.put('/user/update/:id', user.updateById);

//delete
router.delete('/question/delete/:id', question.deleteById);
router.delete('/test/delete/:id', test.deleteById);

module.exports = router;