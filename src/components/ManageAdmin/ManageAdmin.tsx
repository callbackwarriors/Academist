import React from 'react';
import adminpicture from './../../assets/images/admin.jpg'
import ManageTable from './ManageTable';


const ManageAdmin = ({ user }: any) => {

  return (
    <div>
      <div className="flex flex-col">
        <div className="-my-2 ">
          <div className="py-2 align-middle ">
            <div className="border-gray-200 shadow ">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className=" bg-gray-50">
                  <tr>
                    <th scope="col" className="px-2 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase">
                      Name
                    </th>
                    <th scope="col" className="px-2 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase">
                      Email
                    </th>
                    <th scope="col" className="px-2 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase">
                      isAdmin
                    </th>
                    <th scope="col" className="px-2 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase">
                      Edit/Delete
                    </th>
                  </tr>
                </thead>
                {
                  user.map((user: { id: any; }) => <ManageTable key={user.id} user={user} />)
                }
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManageAdmin;
