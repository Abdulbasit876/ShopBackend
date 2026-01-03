const Shop = require("../schema/shop.schema");
const User = require("../../user/schema/user.schema");  // Tumhara User model
const bcrypt = require("bcryptjs");
const mongoose = require("mongoose");


exports.createShopAndOwner = async (req, res) => {
  const session = await mongoose.startSession();
  session.startTransaction();
  try {
    const { shopName, ownerName, ownerEmail, ownerPassword } = req.body;

    const existingUser = await User.findOne({ email: ownerEmail });
    if (existingUser) {
      return res.status(400).json({ message: "Email already exists" });
    }
    // 2. Create OWNER user first
    const hashedPassword = await bcrypt.hash(ownerPassword, 10);

    const owner = await User.create([{
      name: ownerName,
      email: ownerEmail,
      password: hashedPassword,
      role: "OWNER",  // Tumhare enum mein "OWNER" hona chahiye
      // shopId abhi null rahega, baad mein update kar denge
    }], { session });

    const ownerId = owner[0]._id;
    // 3. Now create Shop with ownerId
    const shop = await Shop.create([{
      name: shopName,
      ownerId: ownerId,
      createdBy: req.user._id  // Superadmin ka ID (auth middleware se)
    }], { session });

    const shopId = shop[0]._id;

    // 4. Update owner user with shopId
    await User.updateOne(
      { _id: ownerId },
      { shopId: shopId },
      { session }
    );

    await session.commitTransaction();

    res.status(201).json({
      message: "Shop and Owner created successfully",
      shop: shop[0],
      owner: {
        _id: owner[0]._id,
        name: owner[0].name,
        email: owner[0].email,
        role: owner[0].role
      }
    });

  } catch (err) {
    await session.abortTransaction();
    console.error(err);
    res.status(500).json({ message: err.message });
  } finally {
    session.endSession();
  }
};
