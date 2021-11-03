import FeaturedTeacher from "components/FeaturedTeacher/FeaturedTeacher";
import InstractorCard from "components/InstractorCard/InstractorCard";
import Layout from "components/utilities/Layout";
import PageTitle from "components/utilities/PageTitle";
import User from "models/User";
import React from "react";
import db from "utils/db";

const feturedinstractors = (props) => {
  const { user } = props;

  const instructors = user.filter((instructor) => instructor.instructor === true);
console.log('instructors', instructors);
  return (
    <Layout>
      <PageTitle background="bg-gray-50" title="Taught By Real Creators" subtitle="WORLD-CLASS INSTRUCTORS" />
      <div className="instractorsWrapper section-padding">
        <div className="container ">

          <div className="flex flex-wrap page-content__body">
            {/* {instructors.slice(0, 4).map((instructor) => (
              <FeaturedTeacher key={instructor._id} instructor={instructor} />
            ))} */}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default feturedinstractors;

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