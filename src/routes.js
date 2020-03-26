const express = require('express');
const routes = express.Router();


const OngController = require('./controllers/OngController');
routes.get('/ongs', OngController.index);
routes.post('/ongs', OngController.create);


const IncidentController = require('./controllers/IncidentController');
routes.get('/incidents', IncidentController.index);
routes.post('/incidents', IncidentController.create);
routes.delete('/incidents/:id', IncidentController.delete);


const SessionController = require('./controllers/SessionController');
routes.post('/session', SessionController.create);


const ProfileController = require('./controllers/ProfileController');
routes.get('/profile', ProfileController.index);

module.exports = routes;