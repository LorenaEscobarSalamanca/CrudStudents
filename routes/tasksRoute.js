const EXPRESS = require('express');
const STUDENTCONTROL = require('../controllers/studentsController');
let api = EXPRESS.Router();

//Route ADD homework
api.post('/', STUDENTCONTROL.createStudent);
//Route QUERY homework
api.get('/',STUDENTCONTROL.getStudent);
//Route UPDATE homework
api.put('/:id', STUDENTCONTROL.updateStudent);
//Route DELETE homework
api.delete('/:id', STUDENTCONTROL.deleteStudent);

module.exports = api;