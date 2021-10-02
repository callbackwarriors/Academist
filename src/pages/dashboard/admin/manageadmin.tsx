import Sidebar from 'components/Dashboard/Sidebar';
import ManageAdmin from 'components/ManageAdmin/ManageAdmin';
import Layout from 'components/utilities/Layout';
import React from 'react';

const manageadmin = () => {
    return (
        <Layout>
        <div className="flex w-full items-stretch bg-gray-200">
              <Sidebar />
         <div className="w-full bg-white m-5 p-5 h-screen transition-all">
           <ManageAdmin />
         </div>
         </div>
     </Layout>
    );
};

export default manageadmin;