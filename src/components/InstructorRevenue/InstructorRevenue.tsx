import { ICourses, IOrders, IUser } from "type";
import InstructorRevenueCart from "./InstructorRevenueCart";
import fakeData from "./InstructorRevenueData";

interface IProp {
  orderCourses: IOrders;
}

const InstructorRevenue = ({ orderCourses }: IProp) => {

  return (
    <div>
     <table className="table-auto">
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
          {orderCourses?.map((orderCourse) => (
            <InstructorRevenueCart orderCourse={orderCourse} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default InstructorRevenue;
