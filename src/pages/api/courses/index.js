import nc from 'next-connect';
import Courses from '../../../models/Courses';
import db from '../../../utils/db';
const handler = nc();

handler.get(async(req, res) => {
  await db.connect();
  const courses = await Courses.find({});
  await db.disconnect()
  res.send(courses);
});
export default handler;
