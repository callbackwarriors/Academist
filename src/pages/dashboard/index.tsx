import AdminHeader from 'components/Dashboard/AdminHeader';
import Sidebar from 'components/Dashboard/Sidebar';
import DashboardChart from 'components/DashboardChart/DashboardChart';
import Layout from 'components/utilities/Layout';
import React from 'react';

const index = () => {
    return (
        <Layout>
           <div className="flex w-full items-stretch bg-gray-200">
                 <Sidebar />
            <div className="w-full p-6 h-screen transition-all">
                <AdminHeader />
                <div className="h-1/2 bg-white mt-5">
                <DashboardChart />
                </div>
            </div>
            </div>
        </Layout>
    );
};

export default index;