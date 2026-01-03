// modules/sales/sale.model.js
const mongoose = require("mongoose");

const saleSchema = new mongoose.Schema({
  shopId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Shop",
    required: true
  },
  items: [{
    productId: mongoose.Schema.Types.ObjectId,
    name: String,
    qty: Number,
    unit: String,
    price: Number,
    total: Number
  }],

  totalAmount: Number,

  paymentType: {
    type: String,
    enum: ["CASH", "UDHAR"],
    required: true
  },
  udharCustomerId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "UdharCustomer",
    default: null
  }
}, { timestamps: true });

module.exports = mongoose.model("Sale", saleSchema);
