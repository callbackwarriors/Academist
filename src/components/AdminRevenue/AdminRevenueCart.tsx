import React from "react";

const AdminRevenueCart = ({ revenueData }: any) => {
  const { cartItems } = revenueData;
  const cartItem = cartItems[0]

  return (
    <tr className="bg-gray-200 border-2 border-gray-300">
      <td className="p-3 font-medium capitalize">{cartItem.title}</td>
      <td className="p-3">$ {cartItem.price}</td>
      <td className="p-3">$ {cartItem.price/2}</td>
      <td className="p-3">{cartItem.createdAt}</td>
    </tr>
  );
};

export default AdminRevenueCart;
