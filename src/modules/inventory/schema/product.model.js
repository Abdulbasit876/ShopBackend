// modules/inventory/product.model.js
const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  shopId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Shop",
    required: true
  },
  name: String,
  code: {
    type: String,
    required: true // barcode OR manual code
  },

  unit: {
    type: String,
    enum: ["KG", "PIECE", "LITER", "PACKET"],
    required: true
  },

  purchasePrice: Number,
  salePrice: Number,
  stock: { type: Number, default: 0 }

}, { timestamps: true });

productSchema.index({ shopId: 1, code: 1 }, { unique: true });

module.exports = mongoose.model("Product", productSchema);
