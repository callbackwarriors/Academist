import React, { useEffect, useState } from "react";
import Sidebar from "components/Dashboard/Sidebar";
import Layout from "components/utilities/Layout";
import ViewAllOrder from "components/ViewAllOrder/ViewAllOrder";
// import type { NextPage } from 'next';
import db from "utils/db";
import Orders from "../../../models/Orders";

const viewAllOrder = (props) => {
  const orderingData = props.order;

  return (
    <Layout>
      <div className="flex items-stretch w-full bg-gray-200">
        <Sidebar />
        <div className="w-full h-screen py-20 transition-all">
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
