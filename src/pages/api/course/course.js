


import nc from 'next-connect';
import db from '../../../utils/db';
import Course from './testCourses'


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















// import Courses from '../../../models/Courses';
// import nc from 'next-connect';
// import db from '../../../utils/db';


// const handler = nc();
// handler.post(async ({req, res}:any) => {
//   await db.connect();
//   const newCourse = new Courses({
    
//     title: req.body.title,
//     shortDesc: req.body.shortDesc,
//     courseOverview: req.body.courseOverview,
//     courseFeatures: req.body.courseFeatures,
//     categories: req.body.categories,
//     price: req.body.price,
//     courseProvider: req.body.courseProvider,
//     intro: req.body.intro,
//   });
//   const course = await newCourse.save();
//   await db.disconnect();

//   res.send({
   
//     title: course.title,
//     shortDesc: course.shortDesc,
//     courseOverview: course.courseOverview,
//     courseFeatures: course.courseFeatures,
//     categories: course.categories,
//     price: course.price,
//     courseProvider: course.courseProvider,
//     intro: course.intro,
//   });
// });
// export default handler;