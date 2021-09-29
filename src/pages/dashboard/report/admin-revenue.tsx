import Sidebar from "components/Dashboard/Sidebar";
import Layout from "components/utilities/Layout";
const adminRevenue = () => {
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
                      <th className="p-3 text-left">Name</th>
                      <th className="p-3 text-left">Mail</th>
                      <th className="p-3 text-left">Phone</th>
                      <th className="p-3 text-left">Role</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="bg-blue-200 lg:text-black">
                      <td className="p-3 font-medium capitalize">Probir Ghosh</td>
                      <td className="p-3">Probirghosh@gmail.com</td>
                      <td className="p-3">01614563314</td>
                      <td className="p-3 uppercase">admin</td>
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

export default adminRevenue;
