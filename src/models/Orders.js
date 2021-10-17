
import mongoose from "mongoose";

const ordersSchema = new mongoose.Schema({

  userDetails: [
    {
      name: { type: String, required: true },
      email: { type: String, required: true, unique: true },
      password: { type: String, required: true },
      token: { type: String, required: true },
      isAdmin: { type: Boolean, required: true, default: false },
      address: { type: String, required: true },
      _id: { type: String, required: true },
    },
  ],
  userAddress: [
    {
      phone: { type: String, required: true },
      address: { type: String, required: true },

    }
  ],
  paymentId: { type: String, required: true },
  orderItems: [
    {
      categories: { type: String, required: true },
      courseProvider: { type: String, required: true },
      createdAt: { type: Date },
      desc: { type: String, required: true },
      img: { type: String, required: true },
      level: { type: String, required: true },
      price: { type: Number, required: true },
      quantity: { type: Number, required: true },
      shortDesc: { type: String, required: true },
      slug: { type: String, required: true, unique: true },
      title: { type: String, required: true },
      updatedAt: { type: Date },
      videoUrl: { type: String, required: true },
      _id: { type: String, required: true },
    },
  ],
});

const Order =
  mongoose.models.Order || mongoose.model("Order", ordersSchema);
export default Order;



// import mongoose from "mongoose";

// const ordersSchema = new mongoose.Schema(
//   {  
//     cartItems : [
//       {
//           title: { type: String, required: true },
//           id: { type: String, required: true },
//           quantity: { type: Number, required: true },
//           img: { type: String, required: true },
//           price: { type: String, required: true },
//           createdAt: { type: Date},
//           updatedAt: { type: Date},
//       },
//     ],
//   userInfo:{
//       name: { type: String, required: true },
//       email: { type: String, required: true },
//     },
//   billingAddress:{
//     phone: { type: String, required: true },
//     address: { type: String, required: true },
//   },
//   paymentId:{id: { type: String, required: true }},
//   status:{ type: String, required: true },
 
// }


// );

// const Orders = mongoose.models.orders || mongoose.model("orders", ordersSchema);
// export default Orders;