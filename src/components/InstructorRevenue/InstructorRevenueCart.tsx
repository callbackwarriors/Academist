const InstructorRevenueCart = ({ orderCourse }: any) => {
  const { userInfo, cartItems } = orderCourse;
  
  const cartItem  = cartItems[0];
  console.log(cartItem);
  

  return (
    <>
      <tr className="bg-gray-200 border-2 border-gray-300">
        <td className="p-3">{cartItem.title}</td>
        <td className="p-3">{userInfo.name}</td>
        <td className="p-3">$ {cartItem.price}</td>
        <td className="p-3">$ {cartItem.price/2}</td>
        <td className="p-3">{cartItem.createdAt}</td>
      </tr>
    </>
  );
};

export default InstructorRevenueCart;
