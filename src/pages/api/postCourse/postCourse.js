import nc from "next-connect";
import Course from "../../../models/postCourse";
import db from "../../../utils/db";

const handler = nc();
handler.post(async (req, res) => {
  console.log(req.body);
  await db.connect();
  const newCourse = new Course({
    inputList:req.body.inputList,
    title: req.body.title,
    slug: req.body.slug,
    videoUrl: req.body.videoUrl,
    shortDesc: req.body.shortDesc,
    categories: req.body.categories,
    level: req.body.level,
    price: req.body.price,
    desc: req.body.desc,
    img: req.body.img,
  });

  console.log('newCourse',newCourse)
  const course = await newCourse.save();
  await db.disconnect();
  console.log('this course',course)

  res.send({
    inputList:course.inputList,
    title: course.title,
    slug: course.slug,
    videoUrl: course.videoUrl,
    shortDesc: course.shortDesc,
    categories: course.categories,
    level: course.level,
    price: course.price,
    desc: course.desc,
    img: course.img,
  });
});
export default handler;
