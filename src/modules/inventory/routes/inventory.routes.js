const express = require('express');
const {addProduct,getProducts,getByCode,updateProduct,deleteProduct,getLowStockProducts} = require('../controllers/inventory.controller');
const { protect } = require('../../../middlewares/auth');
const router = express.Router();
// Create a new product
router.post('/addProduct',protect,addProduct);
// Get all products
router.get('/products', protect,getProducts);
// Get a specific product by code
router.get('/findProduct/:code', protect,getByCode);
// Update a specific product by ID
router.put('/updateProduct/:id', protect,updateProduct);
// Delete a specific product by ID
router.delete('/deleteProduct/:id', protect,deleteProduct);
// Get low stock products
router.get('/lowStockProducts', getLowStockProducts);
module.exports = router;