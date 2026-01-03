// modules/inventory/stockLog.model.js
const mongoose = require("mongoose");

const stockLogSchema = new mongoose.Schema({
  shopId: mongoose.Schema.Types.ObjectId,
  productId: mongoose.Schema.Types.ObjectId,

  type: {
    type: String,
    enum: ["SALE", "PURCHASE"]
  },

  qty: Number,
  note: String
}, { timestamps: true });

module.exports = mongoose.model("StockLog", stockLogSchema);
