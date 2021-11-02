import nc from "next-connect";
import Course from "../../../models/postCourse";
import db from "../../../utils/db";

const handler = nc();
handler.post(async (req, res) => {

  await db.connect();
  const newCourse = new Course({
    inputList: req.body.inputList,
    title: req.body.title,
    slug: req.body.slug,
    videoUrl: req.body.videoUrl,
    shortDesc: req.body.shortDesc,
    categories: req.body.categories,
    level: req.body.level,
    price: req.body.price,
    desc: req.body.desc,
    certificate: req.body.certificate,
    img: req.body.img,
    prichard: false
  });
  const course = await newCourse.save();
  await db.disconnect();

  res.send({
    inputList: course.inputList,
    title: course.title,
    slug: course.slug,
    videoUrl: course.videoUrl,
    shortDesc: course.shortDesc,
    categories: course.categories,
    level: course.level,
    price: course.price,
    desc: course.desc,
    certificate: course.certificate,
    img: course.img,
    prichard: course.prichard,
  });
});
export default handler;
