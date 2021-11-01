import nc from 'next-connect';
import Course from '../../../models/postCourse';
import db from '../../../utils/db';
const handler = nc();

handler.get(async(req, res) => {
  await db.connect();
  const course = await Course.findById(req.query.id);
  await db.disconnect()
  res.send(course);
});
export default handler;
