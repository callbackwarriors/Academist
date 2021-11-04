import AdminRevenueCart from "./AdminRevenueCart";


const AdminRevenues = ({ data }) => {
  const totalOrder = data.map(order => order.cartItems[0]?.price/2).reduce((order, acc) => order + acc);

  return (
    <div>
<h3 className="my-6">Revenue Report</h3>
<div className="p-3 border rounded mb-5 inline-block text-xl bg-yellow-200">The site owoner will get 50% revinue based on total sales of courses.</div>
      <table className="table-auto w-full">
        <thead className="text-white bg-gray-900 border-gray-300">
          <tr>
            <th className="p-3 text-left">Enrolled Course</th>
            <th className="p-3 text-left">Total Amount</th>
            <th className="p-3 text-left">Admin Revenue</th>
            <th className="p-3 text-left">Enrolled Date</th>
          </tr>
        </thead>
        <tbody>
          {
            data?.map((revenueData) => (<AdminRevenueCart key={revenueData._id} revenueData={revenueData} />))
          }
        </tbody>

        {
         <h3 className="mt-5">Your total revenue: ${totalOrder}</h3>
       }
      </table>
    </div>
  );
};

export default AdminRevenues;
