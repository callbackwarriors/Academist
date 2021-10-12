import mongoose from "mongoose";

const ordersSchema = new mongoose.Schema(
  {  
    cartItems : [
      {
          title: { type: String, required: true },
          id: { type: String, required: true },
          quantity: { type: Number, required: true },
          img: { type: String, required: true },
          price: { type: String, required: true },
          createdAt: { type: Date},
          updatedAt: { type: Date},
      },
    ],
  userInfo:{
      name: { type: String, required: true },
      email: { type: String, required: true },
    },
  billingAddress:{
    phone: { type: String, required: true },
    address: { type: String, required: true },
  },
  paymentId:{id: { type: String, required: true }},
  status:{ type: String, required: true },
 
}


);

const Orders = mongoose.models.orders || mongoose.model("orders", ordersSchema);
export default Orders;