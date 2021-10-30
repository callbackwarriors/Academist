import Sidebar from "components/Dashboard/Sidebar";
import Layout from "components/utilities/Layout";
import Title from "components/utilities/Title";
import LessonData from "../../../models/LessonData";
import React from "react";
import LessonTest from "../../../components/LessonTest/LessonTest";
import db from "../../../utils/db";

const lesson = (props) => {
  console.log("lessonData", props);
  return (
    <Layout>
      <div className="flex items-stretch w-full bg-gray-200">
        <Sidebar />
        <div className="w-full min-h-screen p-5 transition-all bg-white section-padding">
          <Title title="Add new lesson" subtitle="" description=""></Title>
          <LessonTest />
        </div>
      </div>
    </Layout>
  );
};

export default lesson;

export async function getServerSideProps() {
  await db.connect();
  const lessonData = await LessonData.find({}).lean();
  console.log("lessonData", lessonData);
  await db.disconnect();
  return {
    props: {
      lessonData: lessonData.map(db.convertDocToObj),
    },
  };
}
