import AddNewCourse from 'components/AddNewCourse/AddNewCourse';
import Sidebar from 'components/Dashboard/Sidebar';
import Layout from 'components/utilities/Layout';
import Title from 'components/utilities/Title';
import React from 'react';

const addNewCourse = () => {
    return (
        <Layout>
            <div className="flex w-full items-stretch bg-gray-200">
                <Sidebar />
                <div className="w-full bg-white m-5 p-5 min-h-screen transition-all section-padding">
                    <Title title="Add new course" subtitle="" description="Dear username, Welcome to your add new course page. You may add new course by filling below form and start selling from now."></Title>
                    <AddNewCourse></AddNewCourse>
                </div>
            </div>
        </Layout>
    );
};

export default addNewCourse;