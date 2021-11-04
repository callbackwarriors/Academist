import { IOrders } from "type";
import AdminRevenueCart from "./AdminRevenueCart";
import fakeData from "./AdminRevenueData";


const AdminRevenue = () => {

    interface IAdminRevenue {
        id:number;
        enrolledCourse:string;
        totalAmount:number;
        adminRevenue:number;
        enrolledDate:string;
    }

interface IProp {
  data: IOrders;
}

const AdminRevenue = ({ data }: IProp) => {


  return (
    <div>
      <div className="container min-h-screen py-10 bg-white">

        <div className='max-w-md ml-auto'>
          <div className="relative flex w-full h-12 overflow-hidden rounded-lg shadow-lg items-right focus-within:shadow-lg bg-white-600">
            <div className="grid w-12 h-full text-gray-300 place-items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <input
              className="w-full h-full pr-2 text-sm text-gray-700 outline-none peer"
              type="text"
              id="search"
              placeholder="Search something.." />
          </div>
        </div>

        <div className="col-span-12">
          <div className="overflow-auto lg:overflow-visible">
            <table className="table w-full space-y-4 text-sm text-gray-400 border-separate">
              <thead className="text-white bg-blue-500">
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
        </div>
      </div>
    </div>
  );
};

export default AdminRevenue;
