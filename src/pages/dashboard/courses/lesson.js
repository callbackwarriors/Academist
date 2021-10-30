import Sidebar from "components/Dashboard/Sidebar";
import Layout from "components/utilities/Layout";
import Title from "components/utilities/Title";
import Lesson from "../../../models/Lessons";
import React from "react";
import LessonTest from "../../../components/LessonTest/LessonTest";
import db from "../../../utils/db";

const lesson = (props) => {
    console.log('props', props);
  return (
    <Layout>
      <div className="flex items-stretch w-full bg-gray-200">
        <Sidebar />
        <div className="w-full min-h-screen p-5 transition-all bg-white section-padding">
          <Title title="Add new lesson" subtitle="" description=""></Title>
          <LessonTest  />
        </div>
      </div>
    </Layout>
  );
};

export default lesson;

export async function getServerSideProps() {
  await db.connect();
  const Lessons = await Lesson.find({}).lean();
  await db.disconnect();
  return {
    props: {
        Lessons: Lessons.map(db.convertDocToObj),
    },
  };
}
