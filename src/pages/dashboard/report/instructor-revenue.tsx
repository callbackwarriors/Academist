import Sidebar from "components/Dashboard/Sidebar";
import InstructorRevenue from "components/InstructorRevenue/InstructorRevenue";
import Layout from "components/utilities/Layout";
import Order from "models/Orders";
import db from "utils/db";

const instructorRevenue = (props: any) => {
  const { orderCourses } = props;



  return (
    <Layout>
      <div className="flex items-stretch w-full h-full bg-gray-100">
        <Sidebar />
        <div className="w-full min-h-screen p-5 py-4 transition-all bg-white">
          <InstructorRevenue orderCourses={orderCourses} />
        </div>
      </div>
    </Layout>
  );
};

export default instructorRevenue;

export async function getServerSideProps() {
  await db.connect();
  const courses = await Order.find({}).lean();
  const orderCourses = JSON.parse(JSON.stringify(courses))
  await db.disconnect();
  return {
    props: {
      orderCourses,
    },
  };
}
