import AdminRevenueCart from "./AdminRevenueCart";
import fakeData from "./AdminRevenueData"

const AdminRevenue = () => {

    interface IAdminRevenue {
        id:number;
        enrolledCourse:string;
        totalAmount:number;
        adminRevenue:number;
        enrolledDate:string;
    }


  return (
    <div>
      <div className="container pt-10 min-h-screen bg-white">
        <div className="col-span-12">
          <div className="overflow-auto lg:overflow-visible">
            <table className="table text-gray-400 border-separate space-y-4 text-sm w-full">
              <thead className="bg-blue-500 text-white">
                <tr>
                  <th className="p-3 text-left">Enrolled Course</th>
                  <th className="p-3 text-left">Total Amount</th>
                  <th className="p-3 text-left">Admin Revenue</th>
                  <th className="p-3 text-left">Enrolled Date</th>
                </tr>
              </thead>
              <tbody>
                {
                        fakeData?.map((fd:IAdminRevenue)=> (<AdminRevenueCart fakeData={fd} /> ))
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
