import Sidebar from 'components/Dashboard/Sidebar';
import DashboardChart from 'components/DashboardChart/DashboardChart';
import FeaturedCourse from 'components/FeaturedCources/FeaturedCourse';
import Stuck from 'components/Stack/Stuck';
import Layout from 'components/utilities/Layout';
import React from 'react';
import Title from 'components/utilities/Title';
import db from 'utils/db';
import Orders from 'models/Orders';

const index = (props:any) => {

    console.log('this is stack data', props);

    const orderingData = props.order;

    return (
        
         <Layout> 
         <div className="flex items-stretch w-full h-full bg-gray-100">
                 <Sidebar />
            <div className="w-full min-h-screen p-5 m-5 transition-all bg-white section-padding">
            <Title title="Add new courses" subtitle="" description=""></Title>
                <div className="mt-5 h-screen-50">
                <DashboardChart />
                </div>
                <div className="block mt-5">
                    <Stuck orderingData={orderingData} />
                </div>
                <div className="block mt-5">
                    <FeaturedCourse />
                </div>
            </div>
            </div>
         </Layout>
         
        
    );
};

export default index;



export async function getServerSideProps() {
    await db.connect();
    const order = await Orders.find({}).lean();
    await db.disconnect();
    return {
      props: {
        order: order.map(db.convertDocToObj),
      },
    };
  
  }