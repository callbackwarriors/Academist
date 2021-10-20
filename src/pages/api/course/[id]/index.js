import nc from 'next-connect';
import { isAdmin, isAuth } from '../../../../utils/auth';
import Courses from '../../../../models/Courses'
import db from '../../../../utils/db';

const handler = nc();
handler.use(isAuth, isAdmin);

handler.get(async (req, res) => {
  await db.connect();
  const course = await Courses.findById(req.query.id);
  await db.disconnect();
  res.send(course);
});
export default handler;