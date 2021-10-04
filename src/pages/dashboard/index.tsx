import AdminHeader from 'components/Dashboard/AdminHeader';
import Sidebar from 'components/Dashboard/Sidebar';
import DashboardChart from 'components/DashboardChart/DashboardChart';
import FeaturedCourse from 'components/FeaturedCources/FeaturedCourse';
import Stuck from 'components/Stack/Stuck';
import Layout from 'components/utilities/Layout';
import React from 'react';

const index = () => {
    return (
        
         <Layout> 
         <div className="flex w-full  h-full items-stretch bg-gray-100">
                 <Sidebar />
            <div className="w-full p-6  transition-all">
                <AdminHeader />
                <div className=" h-screen-50 bg-white mt-5">
                <DashboardChart />
                </div>
                <div className="mt-5 block">
                    <Stuck />
                </div>
                <div className="mt-5 block">
                    <FeaturedCourse />
                </div>
            </div>
            </div>
         </Layout>
         
        
    );
};

export default index;