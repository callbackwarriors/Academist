import AdminRevenue from "components/AdminRevenue/AdminRevenue";
import Sidebar from "components/Dashboard/Sidebar";
import Layout from "components/utilities/Layout";
import db from "utils/db";
import Order from "../../../models/Orders";

const adminRevenue = ({ props }: any) => {
  return (
    <Layout>
      <div className="flex items-stretch w-full bg-gray-200">
        <Sidebar />
        <div className="w-full h-screen py-20 transition-all">
          <AdminRevenue />
        </div>
      </div>
    </Layout>
  );
};

export default adminRevenue;


export async function getServerSideProps() {
  await db.connect();
  const order = await Order.find({}).lean();
  await db.disconnect();
  return {
    props: {
      courses: order.map(db.convertDocToObj),
    },
  };
}

