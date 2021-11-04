import { IOrders } from "type";
import AdminRevenueCart from "./AdminRevenueCart";

interface IProp {
  data: IOrders;
}

const AdminRevenues = ({ data }: IProp) => {


  return (
    <div>

      <table className="table-auto">
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
      </table>
    </div>
  );
};

export default AdminRevenues;
