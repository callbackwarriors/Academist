import React from 'react';
import Sidebar from 'components/Dashboard/Sidebar';
import Layout from 'components/utilities/Layout';
import Title from 'components/utilities/Title';
import CourseCategory from 'components/CourseCategory/CourseCategory';

const courseCategory = () => {
    return (
        <Layout>
            <div className="flex items-stretch w-full bg-gray-200">
                <Sidebar />
                <div className="w-full min-h-screen p-5 m-5 transition-all bg-white section-padding">
                <Title title="Course category" subtitle="" description="Dear admin, Welcome to your add new course page. You can set the courses as categories by filling the form below."></Title>
                    <CourseCategory></CourseCategory>
                </div>
            </div>
        </Layout>
    );
};

export default courseCategory;