import Sidebar from "components/Dashboard/Sidebar";
import Layout from "components/utilities/Layout";
import ViewAllOrder from "components/ViewAllOrder/ViewAllOrder";
import React from "react";
// import type { NextPage } from 'next';
import db from "utils/db";
import Orders from "../../../models/Orders";

const viewAllOrder = (props) => {
  const orderingData = props.order;

  return (
    <Layout>
      <div className="flex items-stretch w-full h-full bg-gray-100">
        <Sidebar />
        <div className="w-full min-h-screen p-5 transition-all bg-white py-4">
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
  await db.disconnect();
  return {
    props: {
      order: order.map(db.convertDocToObj),
    },
  };
}
