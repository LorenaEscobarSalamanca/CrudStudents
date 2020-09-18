const EXPRESS = require('express');
const BODYPARSER = require('body-parser')
const CORS = require('cors');
const APP = EXPRESS();

//Declarar las rutas de la API
const STUDENTROUTE = require('./routes/tasksRoute');
//Middlewares
APP.use(BODYPARSER.json());
APP.use(CORS());

//consumo de las rutas
APP.use('/api', STUDENTROUTE);
module.exports = APP;
