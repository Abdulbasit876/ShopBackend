const express = require('express');
const shopController = require('../controllers/shop.controller');
const {protect,authorize} = require('../../../middlewares/auth');
const router = express.Router();

// Import controller

// Create shop route
router.post('/createShopAndOwner',protect,authorize("SUPER_ADMIN"),shopController.createShopAndOwner);
module.exports = router;