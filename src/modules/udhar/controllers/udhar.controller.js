const UdharCustomer = require("../schema/udharCustomer.model");

exports.addUdharCustomer = async (req, res) => {
  const customer = await UdharCustomer.create({
    ...req.body,
    shopId: req.user.shopId
  });

  res.status(201).json(customer);
};

exports.getUdharCustomers = async (req, res) => {
  const customers = await UdharCustomer.find({ shopId: req.user.shopId });
  res.json(customers);
};

exports.getUdharCustomerById = async (req, res) => {
  const customer = await UdharCustomer.findOne({
    _id: req.params.id,
    shopId: req.user.shopId
  });
  res.json(customer);
};
exports.updateUdharCustomer = async (req, res) => {
  const customer = await UdharCustomer.findOneAndUpdate(
    { _id: req.params.id, shopId: req.user.shopId },
    req.body,
    { new: true }
  );
  res.json(customer);
};
exports.deleteUdharCustomer = async (req, res) => {
  await UdharCustomer.findOneAndDelete({
    _id: req.params.id,
    shopId: req.user.shopId
  });
  res.status(204).end();
};