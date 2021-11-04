import { IOrders } from "type";
import InstructorRevenueCart from "./InstructorRevenueCart";

interface IProp {
  orderCourses: IOrders;
}

const InstructorRevenue = ({ orderCourses }: IProp) => {

  const instractorsOrder = orderCourses?.slice(0, 4);



const totalOrder = instractorsOrder.map((order: { cartItems: { price: number; }[]; }) => order.cartItems[0]?.price/2).reduce((order: any, acc: any) => order + acc);

  return (
    <div>
      <h3 className="my-6">Revenue Report</h3>
      <div className="p-3 border rounded mb-5 inline-block text-xl bg-yellow-200">You will get 50% revinue based on total sales of your courses.</div>
     <table className="table-auto w-full">
      <thead className="text-white bg-gray-900 border-gray-300">
          <tr>
            <th className="p-3 text-left">Enrolled Course</th>
            <th className="p-3 text-left">Instructor Name</th>
            <th className="p-3 text-left">Total Amount</th>
            <th className="p-3 text-left">Instructor Revenue</th>
            <th className="p-3 text-left">Enrolled Date</th>
          </tr>
        </thead>
        <tbody>
          {instractorsOrder.map((orderCourse: any) => (
            <InstructorRevenueCart orderCourse={orderCourse} />
          ))}
        </tbody>

        {
         <h3 className="mt-5">Your total revenue: ${totalOrder}</h3>
       }
      </table>
    </div>
  );
};

export default InstructorRevenue;
