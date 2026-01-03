const express = require('express');
const {createSale,getSales,getSaleById,updateSale,deleteSale} = require('../controllers/sales.controller');
const router = express.Router();

// Create a new sale
router.post('/addSale', createSale);
// Get all sales
router.get('/sales', getSales); 
// Get a specific sale by ID
router.get('/sales/:id', getSaleById);
// Update a specific sale by ID
router.put('/sales/:id', updateSale);
// Delete a specific sale by ID
router.delete('/sales/:id', deleteSale);        
module.exports = router;