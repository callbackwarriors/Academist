import Sidebar from 'components/Dashboard/Sidebar';
import Layout from 'components/utilities/Layout';
import db from 'utils/db';
import Course from 'models/postCourse';
import AdminManageCourses from 'components/AdminManageCourses/AdminManageCourses';

const managecourses = (props: any) => {
    const { allCourses } = props;
    return (
        <Layout>
            <div className="flex items-stretch w-full bg-gray-200">
                <Sidebar />
                <div className="w-full min-h-screen p-5 m-5 transition-all bg-white manageCourses__items section-padding page-content__body">
                    <AdminManageCourses courses={allCourses} />
                </div>
            </div>
        </Layout>
    )
}

export default managecourses


export async function getServerSideProps() {
    await db.connect();
    const courses = await Course.find({}).lean();
    const allCourses = JSON.parse(JSON.stringify(courses));
    await db.disconnect();
    return {
        props: {
            allCourses,
        },
    };
}