import React, { useEffect, useState } from 'react';
import Sidebar from "components/Dashboard/Sidebar";
import Layout from "components/utilities/Layout";
import ViewAllOrder from 'components/ViewAllOrder/ViewAllOrder';
// import type { NextPage } from 'next';
import db from 'utils/db';
import Orders from '../../../models/Orders';


const viewAllOrder = (props) => {
  console.log('this is order props', props.order)
      
      const orderingData = props.order;
      console.log('ordering data',orderingData)

    return (
        <Layout>
        <div className="flex w-full items-stretch bg-gray-200">
          <Sidebar />
         <div className="w-full py-20 h-screen transition-all">
            <ViewAllOrder orderingData={orderingData} ></ViewAllOrder>
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