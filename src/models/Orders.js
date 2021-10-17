import mongoose from "mongoose";

const ordersSchema = new mongoose.Schema({
  paymentId: { type: String, required: true },
  phone: { type: String, required: true },
  address: { type: String, required: true },

  userInfo: {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    // password: { type: String, required: true },
    isAdmin: { type: Boolean, required: true, default: false },
    _id: { type: String, required: true },
  },

  // orderItems: [
  //   {
  //     title: { type: String, required: true }, // unique: true
  //     slug: { type: String, required: true, unique: true },
  //     shortDesc: { type: String, required: true },
  //     categories: { type: String, required: true },
  //     level: { type: String, required: true },
  //     price: { type: Number, required: true },
  //     courseProvider: { type: String, required: true },
  //     videoUrl: { type: String, required: true },
  //     img: { type: String, required: true },
  //     desc: { type: String, required: true },
  //     _id: { type: String, required: true },
  //   },
  // ],
});

const Order = mongoose.models.OrderTest || mongoose.model("OrderTest", ordersSchema);
export default Order;
