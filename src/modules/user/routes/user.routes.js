const express = require('express');
const {createOwner,createStaff,getShopUsers} = require('../controllers/user.controller');

const router = express.Router();

// router.post('/createOwner', createOwner);
router.post('/createStaff', createStaff);
router.get('/shopUsers', getShopUsers);

module.exports = router;