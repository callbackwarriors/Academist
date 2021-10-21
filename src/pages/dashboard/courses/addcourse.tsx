import AddNewCourse from 'components/AddNewCourse/AddNewCourse';
import Sidebar from 'components/Dashboard/Sidebar';
import Layout from 'components/utilities/Layout';
import Title from 'components/utilities/Title';
import React from 'react';

const addNewCourse = () => {
    return (
        <Layout>
            <div className="flex items-stretch w-full bg-gray-200">
                <Sidebar />
                <div className="w-full min-h-screen p-5 transition-all bg-white section-padding">
                    <Title title="Course category" subtitle="" description="Dear admin, Welcome to your course category page. You may add new course by filling below form and start selling from now."></Title>
                    <AddNewCourse />
                </div>
            </div>
        </Layout>
    );
};

export default addNewCourse;