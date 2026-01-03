const express = require('express');
const {addUdharCustomer,getUdharCustomers,getUdharCustomerById,updateUdharCustomer,deleteUdharCustomer} = require('../controllers/udhar.controller');

const router = express.Router();

// Create a new udhar
router.post('/addUdhar', addUdharCustomer);

// Get all udhar customers
router.get('/udhar', getUdharCustomers);

// Get a specific udhar customer by ID
router.get('/udhar/:id', getUdharCustomerById);

// Update a specific udhar customer by ID
router.put('/udhar/:id', updateUdharCustomer);

// Delete a specific udhar customer by ID
router.delete('/udhar/:id', deleteUdharCustomer);


module.exports = router;