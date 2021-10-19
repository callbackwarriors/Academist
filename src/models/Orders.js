
import mongoose from "mongoose";

const ordersSchema = new mongoose.Schema({
  paymentId: { type: String, required: true },
  phone: { type: String, required: true },
  address: { type: String, required: true },

  userInfo: {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    isAdmin: { type: Boolean, required: true, default: false },
    _id: { type: String, required: true },
  },

  cartItems: [
    {
      title: { type: String, required: true }, // unique: true
      slug: { type: String, required: true, unique: true },
      shortDesc: { type: String, required: true },
      categories: { type: String, required: true },
      level: { type: String, required: true },
      price: { type: Number, required: true },
      quantity: { type: Number, required: true },
      courseProvider: { type: String, required: true },
      videoUrl: { type: String, required: true },
      img: { type: String, required: true },
      desc: { type: String, required: true },
      createdAt: { type: String, required: true },
      updatedAt: { type: String, required: true },
      __v: { type: Number, required: true },
      _id: { type: String, required: true },
    },
  ],
});

const Order =
  mongoose.models.orders || mongoose.model("orders", ordersSchema);
export default Order;
