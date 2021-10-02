import AddAdmin from 'components/AddAdmin/AddAdmin';
import Sidebar from 'components/Dashboard/Sidebar';
import Layout from 'components/utilities/Layout';
import React from 'react';

const addadmin = () => {
    return (
        <Layout>
        <div className="flex w-full items-stretch bg-gray-200">
              <Sidebar />
         <div className="w-full bg-white m-5 p-5 h-screen transition-all">
           <AddAdmin />
         </div>
         </div>
     </Layout>
    );
};

export default addadmin;