import EnrollCourse from 'components/EnrollCourse/EnrollCourse';
import Layout from 'components/utilities/Layout';
import Order from 'models/Orders';
import React from 'react';
import db from 'utils/db';
import PageTitle from "../components/utilities/PageTitle";
const enrollcourse = (props: any) => {
  const { orderCourses } = props;

  return (
    <Layout>
      <PageTitle background="bg-gray-50" title="Your enrolled coures" subtitle="" />
      {
        orderCourses.length === 0 ?

          <div className="section-padding">
            <div className="container text-center">
              <h3>You don't have any enrolled course</h3>
            </div>
          </div>

          :
          <div className="section-padding">
            <EnrollCourse key={orderCourses._id} orders={orderCourses} />
          </div>
      }


    </Layout>
  );
};

export default enrollcourse;

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
