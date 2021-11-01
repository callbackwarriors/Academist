import nc from "next-connect";
import { isAuth } from "../../../../../utils/auth";
import Courses from "../../../../../models/postCourse";
import db from "../../../../../utils/db";

const handler = nc();
handler.use(isAuth);

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
    courses.prichard = Boolean(req.body.prichard);
    await courses.save();
    await db.disconnect();
    res.send({ message: "Courses Updated Successfully" });
  } else {
    await db.disconnect();
    res.status(404).send({ message: "Courses Not Found" });
  }
});

handler.delete(async (req, res) => {
  await db.connect();
  const courses = await Courses.findById(req.query.id);
  if (courses) {
    await courses.remove();
    await db.disconnect();
    res.send({ message: 'Courses Deleted' });
  } else {
    await db.disconnect();
    res.status(404).send({ message: 'Courses Not Found' });
  }
});

export default handler;
