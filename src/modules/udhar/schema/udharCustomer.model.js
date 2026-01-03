const mongoose = require("mongoose");

const udharCustomerSchema = new mongoose.Schema({
  shopId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Shop",
    required: true
  },

  name: String,
  phone: String,

  totalUdhar: {
    type: Number,
    default: 0
  },
  nextReminderDate: {
    type: Date,
    default: null  
  },

}, { timestamps: true });

module.exports = mongoose.model("UdharCustomer", udharCustomerSchema);
