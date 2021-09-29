import Sidebar from "components/Dashboard/Sidebar";
import Layout from "components/utilities/Layout";
const instructorRevenue = () => {
  return (
    <Layout>
      <div className="flex w-full items-stretch bg-gray-200">
        <Sidebar />
        <div className="w-full p-6 h-screen transition-all">
          <div className="container pt-10 min-h-screen bg-white">
            <div className="col-span-12">
              <div className="overflow-auto lg:overflow-visible">
                <table className="table text-gray-400 border-separate space-y-4 text-sm w-full">
                  <thead className="bg-blue-500 text-white">
                    <tr>
                      <th className="p-3 text-left">Enrolled Course</th>
                      <th className="p-3 text-left">Instructor Name</th>
                      <th className="p-3 text-left">Total Amount</th>
                      <th className="p-3 text-left">Instructor Revenue</th>
                      <th className="p-3 text-left">Enrolled Date</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="bg-blue-200 lg:text-black">
                      <td className="p-3 font-medium capitalize">UI/UX Design Pattern</td>
                      <td className="p-3">Sara J. Jones</td>
                      <td className="p-3">$570</td>
                      <td className="p-3">$320</td>
                      <td className="p-3">07th Jul 2021</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default instructorRevenue;
