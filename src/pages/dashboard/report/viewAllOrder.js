import Sidebar from "components/Dashboard/Sidebar";
import Layout from "components/utilities/Layout";
import ViewAllOrder from "components/ViewAllOrder/ViewAllOrder";
import React from "react";
import db from "utils/db";
import Orders from "../../../models/Orders";

const viewAllOrder = (props) => {
  const orderingData = props;
  console.log('orderingData', orderingData);

  return (
    <Layout>
      <div className="flex items-stretch w-full h-full bg-gray-100">
        <Sidebar />
        <div className="w-full min-h-screen p-5 py-4 transition-all bg-white">
          <ViewAllOrder orderingData={orderingData}></ViewAllOrder>
        </div>
      </div>
    </Layout>
  );
};
export default viewAllOrder;

export async function getServerSideProps() {
  await db.connect();
  const order = await Orders.find({}).lean();
  const orderCourses = JSON.parse(JSON.stringify(order))
  await db.disconnect();
  return {
    props: {
      orderCourses
    },
  };
}

