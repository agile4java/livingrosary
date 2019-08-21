const express = require("express");

const landingController = require("../controllers/landing_controller");

const router = express.Router();

router.get('/', landingController.getLanding);

module.exports = router;