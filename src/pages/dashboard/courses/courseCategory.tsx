import React from 'react';
import Sidebar from 'components/Dashboard/Sidebar';
import Layout from 'components/utilities/Layout';
import CourseCategory from 'components/CourseCategory/CourseCategory';

const courseCategory = () => {
    return (
        <Layout>
            <div className="flex w-full items-stretch bg-gray-200">
                <Sidebar />
                <div className="w-full bg-white m-5 p-5 h-screen transition-all">
                    <CourseCategory></CourseCategory>
                </div>
            </div>
        </Layout>
    );
};

export default courseCategory;