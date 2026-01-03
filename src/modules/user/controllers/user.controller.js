const User = require("../schema/user.schema");
const bcrypt = require("bcryptjs");

/**
 * SUPER ADMIN -> Create OWNER
 */
// exports.createOwner = async (req, res) => {
//   try {
//     const { name, email, password, shopId } = req.body;

//     const exists = await User.findOne({ email });
//     if (exists) {
//       return res.status(400).json({ message: "Email already exists" });
//     }

//     const hashedPassword = await bcrypt.hash(password, 10);

//     const owner = await User.create({
//       name,
//       email,
//       password: hashedPassword,
//       role: "OWNER",
//       shopId
//     });

//     res.status(201).json(owner);
//   } catch (err) {
//     res.status(500).json({ message: err.message });
//   }
// };

/**
 * OWNER -> Create STAFF
 */
exports.createStaff = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const exists = await User.findOne({ email });
    if (exists) {
      return res.status(400).json({ message: "Email already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const staff = await User.create({
      name,
      email,
      password: hashedPassword,
      role: "STAFF",
      shopId: req.user.shopId
    });

    res.status(201).json(staff);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

/**
 * Get all users of a shop (OWNER only)
 */
exports.getShopUsers = async (req, res) => {
  try {
    const users = await User.find({
      shopId: req.user.shopId,
      role: { $ne: "SUPER_ADMIN" }
    }).select("-password");

    res.json(users);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
