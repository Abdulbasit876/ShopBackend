const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const User = require("./modules/user/schema/user.schema");  // tumhara User model path sahi kar lena
const connectDB = require("./config/db");
require("dotenv").config();
const createSuperAdmin = async () => {
  try {
    connectDB();
    const existing = await User.findOne({ role: "SUPER_ADMIN" });
    if (existing) {
      console.log("Super Admin already exists!");
      console.log("Email:", existing.email);
      return process.exit();
    }
    const hashedPassword = await bcrypt.hash("superadmin@123456789", 10);  // password change kar lena

    const superAdmin = await User.create({
      name: "Abdul Basit",
      email: "codesoftz1@gmail.com",    
      password: hashedPassword,
      role: "SUPER_ADMIN",
        shopId: null
    });
    console.log("Super Admin created successfully!");
    console.log("Email: super@shop.com");
    console.log(superAdmin);
  } catch (err) {
    console.error("Error creating Super Admin:", err.message);
  } finally {
    process.exit();
  }
};

createSuperAdmin();