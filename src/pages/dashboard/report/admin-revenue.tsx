import AdminRevenue from "components/AdminRevenue/AdminRevenue";
import Sidebar from "components/Dashboard/Sidebar";
import Layout from "components/utilities/Layout";
import db from "utils/db";
import Order from "../../../models/Orders";


const adminRevenue = (props: any) => {
  const { orderCourses } = props

  return (
    <Layout>
      <div className="flex items-stretch w-full h-full bg-gray-100">
        <Sidebar />
        <div className="w-full min-h-screen p-5 py-4 transition-all bg-white">
          <AdminRevenue data={orderCourses} />
        </div>
      </div>
    </Layout>
  );
};

export default adminRevenue;


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
