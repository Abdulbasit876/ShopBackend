// modules/shops/shop.model.js
const mongoose = require("mongoose");

const shopSchema = new mongoose.Schema({
  name: String,
  address: String,
  isActive: { type: Boolean, default: true },
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  }
}, { timestamps: true });

module.exports = mongoose.model("Shop", shopSchema);
