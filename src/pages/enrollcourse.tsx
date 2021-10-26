import EnrollCourse from 'components/EnrollCourse/EnrollCourse';
import Layout from 'components/utilities/Layout';
import Order from 'models/Orders';
import React, { useContext } from 'react';
import db from 'utils/db';


const enrollcourse = (props: any) => {
const {orders} = props;

    return (
        <Layout>
            <div>
                <EnrollCourse key={orders._id} orders={orders} />
            </div>
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
  