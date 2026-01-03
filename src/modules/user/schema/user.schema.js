// modules/user/user.model.js
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  shopId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Shop",
    required:false,
    default: null
  },

  name: String,
  email: { type: String, unique: true },
  password: String,

  role: {
    type: String,
    enum: ["SUPER_ADMIN", "OWNER", "STAFF"],
    required: true
  },

  isActive: { type: Boolean, default: true }

}, { timestamps: true });

module.exports = mongoose.model("User", userSchema);
