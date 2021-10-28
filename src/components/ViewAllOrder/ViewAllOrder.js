import React from "react";

const ViewAllOrder = ({ orderingData }) => {
  return (
    <div>
      <h5> All orders</h5>
      <table className="table-auto">
        <thead className="text-white bg-gray-900 border-gray-300">
          <tr>
            <th className="px-4 py-4">Student name</th>
            <th className="px-4 py-4">Coruse name</th>
            <th className="px-4 py-4">Price</th>
            <th className="px-4 py-4">Payment with</th>
            <th className="px-4 py-4">Phone</th>
            <th className="px-4 py-4">Billing address</th>
            <th className="px-4 py-4">Card last digit</th>
          </tr>
        </thead>
        <tbody className="">
          {console.log("ordering dat", orderingData)}

          {orderingData.map((data) => (
           
            <tr className="bg-gray-200 border-2 border-gray-300">
              <td className="px-4 py-2">{data.userInfo.name}</td>
              <td className="px-4 py-2">{data.cartItems[0]?.title}</td>
              <td className="px-4 py-2">{data.cartItems[0]?.price}</td>
              <td className="px-4 py-2 uppercase">{data.paymentInfo.brand}</td>
              <td className="px-4 py-2">{data.phone}</td>
              <td className="px-4 py-2">{data.address}</td>

           
              <td className="px-4 py-2">{data.paymentInfo.last4}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ViewAllOrder;
