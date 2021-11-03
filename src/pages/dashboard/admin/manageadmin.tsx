import Sidebar from 'components/Dashboard/Sidebar';
import ManageAdmin from 'components/ManageAdmin/ManageAdmin';
import Layout from 'components/utilities/Layout';
import React from 'react';
import db from 'utils/db';
import User from 'models/User';
import { IUser } from 'type';

const manageadmin = (props: any) => {
const {user} = props;

  return (
    <Layout>
      <div className="flex items-stretch w-full bg-gray-200">
        <Sidebar />
        <div className="w-full p-5 m-5 transition-all bg-white">
          <ManageAdmin key={user.id} user={user} />
        </div>
      </div>
    </Layout>
  );
};

export default manageadmin;

export async function getServerSideProps() {
  await db.connect();
  const user = await User.find({}).lean();
  await db.disconnect();
  return {
    props: {
      user: user.map(db.convertDocToObj),
    },
  };
}
