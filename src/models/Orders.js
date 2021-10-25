
import mongoose from "mongoose";

const ordersSchema = new mongoose.Schema(
  {
    paymentInfo: {
      brand: { type: String, required: true },
      country: { type: String, required: true },
      last4: { type: String, required: true },
    },
    phone: { type: String, required: true },
    address: { type: String, required: true },

    userInfo: {
      name: { type: String, required: true },
      email: { type: String, required: true },
      isAdmin: { type: Boolean, required: true, default: false },
      token: { type: String, required: true},
      _id: { type: String, required: true },
    },

    cartItems: [
      {
        title: { type: String, required: true }, // unique: true
        slug: { type: String, required: true },
        shortDesc: { type: String, required: true },
        categories: { type: String, required: true },
        level: { type: String, required: true },
        price: { type: Number, required: true },
        quantity: { type: Number, required: true },
        // courseProvider: { type: String, required: true },
        videoUrl: { type: String, required: true },
        img: { type: String, required: true },
        desc: { type: String, required: true },
        createdAt: { type: String, required: true },
        updatedAt: { type: String, required: true },
        __v: { type: Number, required: true },
        _id: { type: String, required: true },
      },
    ],
  },
  { timestamps: true }
);

const Order = mongoose.models.testorder || mongoose.model("testorder", ordersSchema);
export default Order;
