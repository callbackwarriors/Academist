import AdminRevenue from "components/AdminRevenue/AdminRevenue";
import Sidebar from "components/Dashboard/Sidebar";
import Layout from "components/utilities/Layout";
const adminRevenue = () => {
  return (
    <Layout>
      <div className="flex w-full items-stretch bg-gray-200">
        <Sidebar />
       <div className="w-full py-20 h-screen transition-all">
          <AdminRevenue />
        </div>
      </div>
    </Layout>
  );
};

export default adminRevenue;
