import InstractorCard from "components/InstractorCard/InstractorCard";
import Title from "components/utilities/Title";
import User from "models/User";
import React from "react";
import db from "utils/db";
import Layout from "../../components/utilities/Layout";
import PageTitle from "../../components/utilities/PageTitle";
const instructor = (props) => {
  const { user } = props;

  const instructors = user.filter((instructor) => instructor.instructor === true);

  return (
    <Layout>
      <section className="FeaturedTeacher">

        <Title subtitle="Our all instractors" title="Instructors" description="" />
        <div className="container">
          <div className="grid gap-4 lg:grid-cols-4 sm:grid-cols-2">
            {instructors.map((instructor) => (
              <InstractorCard key={instructor._id} instructor={instructor} />
            ))}
          </div>
        </div>
      </section>
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
