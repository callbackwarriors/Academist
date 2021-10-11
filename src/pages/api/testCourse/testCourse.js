import nc from 'next-connect';
import Course from '../../../models/testCourse';
import db from '../../../utils/db';


const handler = nc();
handler.post(async (req, res) => {
  await db.connect();
  const newCourse = new Course({
    name: req.body.name,
  });
  const course = await newCourse.save();
  await db.disconnect();

  res.send({
    name: course.name,
  });
});
export default handler;