import Sidebar from 'components/Dashboard/Sidebar';
import Layout from 'components/utilities/Layout';
import db from 'utils/db';
import Courses from 'models/Courses';
import ManageCourses from 'components/ManageCourses/ManageCourses';

const managecourses = (props: any) => {
    const { courses } = props;

    return (
        <Layout>
            <div className="flex items-stretch w-full bg-gray-200">
                <Sidebar />
                <div className="w-full min-h-screen p-5 m-5 transition-all bg-white manageCourses__items section-padding page-content__body">
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