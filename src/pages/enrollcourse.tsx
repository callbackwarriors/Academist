import EnrollCourse from 'components/EnrollCourse/EnrollCourse';
import Layout from 'components/utilities/Layout';
import Order from 'models/Orders';
import React from 'react';
import db from 'utils/db';
import PageTitle from "../components/utilities/PageTitle";
const enrollcourse = (props: any) => {
const {orders} = props;

    return (
        <Layout>
      <PageTitle background="bg-gray-50" title="Your enrolled coures" subtitle="" />
      {
        orders.length === 0 ? 
        
        <div className="section-padding">
          <div className="container text-center">
            <h3>You don't have any enrolled course</h3>
          </div>
        </div>
        
        :
        <div className="section-padding">
        <EnrollCourse key={orders._id} orders={orders} />
        </div>
      }
      

        </Layout>
    );
};

export default enrollcourse;

export async function getServerSideProps() {
    await db.connect();
    const order = await Order.find({}).lean();
    await db.disconnect();
    return {
      props: {
        orders: order.map(db.convertDocToObj),
      },
    };
  }
  