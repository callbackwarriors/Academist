import React from 'react';
import Sidebar from 'components/Dashboard/Sidebar';
import Layout from 'components/utilities/Layout';
import CourseCategory from 'components/CourseCategory/CourseCategory';

const courseCategory = () => {
    return (
        <Layout>
            <div className="flex items-stretch w-full bg-gray-200">
                <Sidebar />
                <div className="w-full min-h-screen p-5 m-5 transition-all bg-white">
                    <CourseCategory></CourseCategory>
                </div>
            </div>
        </Layout>
    );
};

export default courseCategory;