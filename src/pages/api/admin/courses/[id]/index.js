import nc from "next-connect";
import { isAdmin, isAuth } from "../../../../../utils/auth";
import Courses from "../../../../../models/Courses";
import db from "../../../../../utils/db";

const handler = nc();
handler.use(isAuth, isAdmin);

handler.get(async (req, res) => {
  await db.connect();
  const courses = await Courses.findById(req.query.id);
  await db.disconnect();
  res.send(courses);
});

handler.put(async (req, res) => {
  await db.connect();
  const courses = await Courses.findById(req.query.id);
  if (courses) {
    courses.title = req.body.title;
    courses.slug = req.body.slug;
    courses.shortDesc = req.body.shortDesc;
    courses.categories = req.body.categories;
    courses.level = req.body.level;
    courses.price = req.body.price;
    courses.courseProvider = req.body.courseProvider;
    courses.videoUrl = req.body.videoUrl;
    courses.img = req.body.img;
    courses.desc = req.body.desc;
    await courses.save();
    await db.disconnect();
    res.send({ message: "Courses Updated Successfully" });
  } else {
    await db.disconnect();
    res.status(404).send({ message: "Courses Not Found" });
  }
});
export default handler;
