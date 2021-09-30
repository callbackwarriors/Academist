import React from "react";

const AdminRevenueCart  = ({fakeData}:any) => {
  return (
    <tr className="bg-blue-200 lg:text-black">
      <td className="p-3 font-medium capitalize">{fakeData.enrolledCourse}</td>
      <td className="p-3">$ {fakeData.totalAmount}</td>
      <td className="p-3">$ {fakeData.adminRevenue}</td>
      <td className="p-3">{fakeData.enrolledDate}</td>
    </tr>
  );
};

export default AdminRevenueCart;
