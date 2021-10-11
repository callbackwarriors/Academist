import Sidebar from 'components/Dashboard/Sidebar';
import Layout from 'components/utilities/Layout';
import db from 'utils/db';
import Courses from 'models/Courses';
import { ICourses } from 'type';
import ManageCourses from 'components/ManageCourses/ManageCourses';

const managecourses = (props: any) => {
    const { courses } = props;
    // console.log('managecourses', courses);
    
    return (
        <Layout>
           <div className="flex items-stretch bg-gray-200">
               <div className="w-1/4"> 
               <Sidebar />
               </div>
            <div className="w-3/4 min-h-screen p-5 m-5 transition-all bg-white">
             <ManageCourses courses={courses} />
            </div>
            </div>
        </Layout>
    )
}

export default managecourses


export async function getServerSideProps() {
    await db.connect();
    const courses = await Courses.find({}).lean();
    await db.disconnect();
    return {
      props: {
        courses: courses.map(db.convertDocToObj),
      },
    };
  }