const express = require('express');
const udharRoutes = require('../modules/udhar/routes/udhar.routes');
const authRoutes = require('../modules/auth/routes/auth.routes');
const userRoutes = require('../modules/user/routes/user.routes');
const inventoryRoutes = require('../modules/inventory/routes/inventory.routes');
const saleRoutes = require('../modules/sales/routes/sale.routes');
const shopRoutes = require('../modules/shops/routes/shop.routes');
const routers = express.Router();

routers.use('/udhar', udharRoutes);
routers.use('/auth', authRoutes);
routers.use('/user', userRoutes);
routers.use('/inventory', inventoryRoutes);
routers.use('/sales', saleRoutes);
routers.use('/shop', shopRoutes);

module.exports = routers;