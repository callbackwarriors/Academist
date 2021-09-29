import Sidebar from "components/Dashboard/Sidebar";
import InstructorRevenue from "components/InstructorRevenue/InstructorRevenue";
import Layout from "components/utilities/Layout";
const instructorRevenue = () => {
  return (
    <Layout>
      <div className="flex w-full items-stretch bg-gray-200">
        <Sidebar />
        <div className="w-full p-6 h-screen transition-all">
          <InstructorRevenue/>
        </div>
      </div>
    </Layout>
  );
};

export default instructorRevenue;
