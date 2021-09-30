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
      <div className="container py-10  min-h-screen bg-white">

      <div className='max-w-md ml-auto'>
         <div className="relative flex items-right w-full shadow-lg h-12 rounded-lg focus-within:shadow-lg bg-white-600 overflow-hidden">
        <div className="grid place-items-center h-full w-12 text-gray-300">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
               <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
        </div>
        <input
        className="peer h-full w-full outline-none text-sm text-gray-700 pr-2"
        type="text"
        id="search"
        placeholder="Search something.." /> 
        </div>
      </div>   

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
