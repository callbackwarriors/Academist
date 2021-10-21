import React from 'react';

const ViewAllOrder = ({ orderingData }) => {
    console.log("this is view all order ", orderingData)
    return (
        <div>
            <h5> Views all Order</h5>
            <table className="table-auto">
                <thead className="bg-green-900 text-white ">
                    <tr>
                        <th className="py-3">
                            Name
                        </th>
                        <th className="w-1/4">
                            Title
                        </th>
                        <th>
                            Price
                        </th>
                        <th  className="w-1/4">
                            Payment Id
                        </th>
                        <th>
                            Phone
                        </th>
                        <th>
                            Date
                        </th>
                        <th>
                            Status
                        </th>
                    </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                    {
                        orderingData.map(data => <tr className="bg-blue-900 text-white">
                            <td className="px-4 py-2"  >{data.userInfo.name}</td>
                            <td  className="px-4 py-2"  >{data.cartItems[0].title}</td>
                            <td  className="px-4 py-2"  >{data.cartItems[0].price}</td>
                            <td  className="px-4 py-2"  >{data.paymentId}</td>
                            <td  className="px-4 py-2"  >{data.phone}</td>
                            <td className="px-4 py-2"  >{data.updatedAt}</td>
                            <td   className="px-4 py-2" >...</td>
                        </tr>)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default ViewAllOrder;