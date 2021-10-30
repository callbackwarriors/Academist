import nc from "next-connect";
import Lessons from "../../../models/Lessons";
import db from "../../../utils/db";

const handler = nc();
handler.post(async (req, res) => {
  await db.connect();
  const newCourse = new Lessons({
    inputList: req.body.inputList,
  });

  console.log("newCourse", newCourse);
  const course = await newCourse.save();
  await db.disconnect();

  res.send({
    inputList: course.inputList,
  });
});

// handler.post(async (req, res) => {
//   await db.connect();
//   const newLesson = new Lessons({
//     ...req.body,
//   });

//   const Lesson = await newLesson.save();
//   res.send(Lesson);
// });

export default handler;
