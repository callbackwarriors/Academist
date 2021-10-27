import InstractorCard from "components/InstractorCard/InstractorCard";
import User from "models/User";
import React, { useState } from "react";
import Layout from "../../components/utilities/Layout";
import db from "utils/db";
const instructor = (props) => {
  const { user } = props;
  return (
    <Layout>
      <div className="bg-gray-300">
        <div className="container allCourses">
          <h2 className="pt-12 text-center">All instructor</h2>

          <div className="flex flex-wrap page-content__body">
            {user.map((ur) => (
              <InstractorCard key={ur._id} ur={ur} />
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default instructor;

export async function getServerSideProps() {
  await db.connect();
  const user = await User.find({}).lean();
  await db.disconnect();
  return {
    props: {
      user: user.map(db.convertDocToObj),
    },
  };
}
