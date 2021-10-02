import React from 'react';
import Sidebar from 'components/Dashboard/Sidebar';
import Layout from 'components/utilities/Layout';
import AddNewCourse from 'components/AddNewCourse/AddNewCourse';

const addNewCourse = () => {
    return (
        <Layout>
            <div className="flex w-full items-stretch bg-gray-200">
                <Sidebar />
                <div className="w-full bg-white m-5 p-5 h-screen transition-all">
                    <AddNewCourse></AddNewCourse>
                </div>
            </div>
        </Layout>
    );
};

export default addNewCourse;