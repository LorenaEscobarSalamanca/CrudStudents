const MONGOOSE = require('mongoose');
const SCHEMA = MONGOOSE.Schema;
const TASKSCHEMA = new SCHEMA({
    name: String,
    lastName: String,
    age: Number,
    email: String,
    direction: String,
    phone: Number
})

module.exports = MONGOOSE.model('Student', TASKSCHEMA);