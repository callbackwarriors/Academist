import React from "react";

const AdminRevenueCart  = ({revenueData}:any) => {
const {cartItems} = revenueData;
const cartItem = cartItems[0]

  return (
    <tr className="bg-blue-200 lg:text-black">
      <td className="p-3 font-medium capitalize">{cartItem.title}</td>
      <td className="p-3">$ 00</td>
      <td className="p-3">$ 00</td>
      <td className="p-3">{cartItem.createdAt}</td>
    </tr>
  );
};

export default AdminRevenueCart;
