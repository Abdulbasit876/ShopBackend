const Sale = require("../schema/sale.model");
const Product = require("../../inventory/schema/product.model");

exports.createSale = async (req, res) => {
  let total = 0;
  for (let item of req.body.items) {
    const product = await Product.findById(item.productId);
    product.stock -= item.qty;
    await product.save();
    total += item.qty * item.price;
  }
  const sale = await Sale.create({
    shopId: req.user.shopId,
    items: req.body.items,
    totalAmount: total,
    paymentType: req.body.paymentType,
    udharCustomerId: req.body.udharCustomerId || null
  });
  res.status(201).json(sale);
};
exports.getSales = async (req, res) => {
  const sales = await Sale.find({ shopId: req.user.shopId });
  res.json(sales);
};

exports.getSaleById = async (req, res) => {
  const sale = await Sale.findOne({
    _id: req.params.id,
    shopId: req.user.shopId
  });
  res.json(sale);
}; 
exports.deleteSale = async (req, res) => {
  await Sale.findOneAndDelete({
    _id: req.params.id,
    shopId: req.user.shopId
  });
  res.status(204).end();
};
exports.updateSale = async (req, res) => {
  const sale = await Sale.findOneAndUpdate(
    { _id: req.params.id, shopId: req.user.shopId },
    req.body,
    { new: true }
  );
  res.json(sale);
};
