const Product = require("../schema/product.model");

exports.addProduct = async (req, res) => {
  const product = await Product.create({
    ...req.body,
    shopId: req.user.shopId
  });
  res.status(201).json(product);
};
exports.getByCode = async (req, res) => {
  const product = await Product.findOne({
    code: req.params.code,
    shopId: req.user.shopId
  });
  res.json(product);
};
exports.getProducts = async (req, res) => {
  const products = await Product.find({ shopId: req.user.shopId });
  res.json(products);
};

exports.updateProduct = async (req, res) => {
  const product = await Product.findOneAndUpdate(
    { _id: req.params.id, shopId: req.user.shopId },
    req.body, 
    { new: true }
  );
  res.json(product);
};
exports.deleteProduct = async (req, res) => {
  await Product.findOneAndDelete({
    _id: req.params.id,
    shopId: req.user.shopId
  });
  res.status(204).end();
}; 
exports.getLowStockProducts = async (req, res) => {
  const products = await Product.find({
    shopId: req.user.shopId,    
    stock: { $lte: req.query.threshold || 5 }
    });
    res.json(products);
};
