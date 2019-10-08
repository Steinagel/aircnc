const express = require('express');
const multer = require('multer');

const SessionController = require('./controller/Sessioncontroller');
const SpotController = require('./controller/SpotController');
const DashboardController = require('./controller/DashboardController');
const BookingController = require('./controller/BookingController');
const uploadConfig = require('../config/upload');

const routes = express.Router();
const upload = multer(uploadConfig);
//GET, POST, PUT, DELETE

//req.query = Acessar query params /users?idade=20 -> 20 (para filtros)
//req.params = Acessar route params /users/1 for /users/:id -> 1 (para atualizar, deletar)
//

routes.post('/sessions', SessionController.store);


routes.post('/spot', upload.single('thumbnail') ,SpotController.store);
routes.get('/spot', SpotController.index);
routes.get('/dashboard', DashboardController.show);

routes.post('/spots/:spot_id/booking', BookingController.store);

module.exports = routes;