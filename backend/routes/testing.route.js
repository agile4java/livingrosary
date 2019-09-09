const express = require('express');

const testingController = require('../controllers/testing_controller');

const router = express.Router();

router.get('/', testingController.getTesting);

router.get('/navbars/', testingController.navbarTest);

module.exports = router;
