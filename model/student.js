const MONGOOSE = require('mongoose');
const SCHEMA = MONGOOSE.Schema;
const TASKSCHEMA = new SCHEMA({
    name: String,
    lastName: String,
    age: String,
    email: String,
    direction: String,
    phone: String
})

module.exports = MONGOOSE.model('Student', TASKSCHEMA);