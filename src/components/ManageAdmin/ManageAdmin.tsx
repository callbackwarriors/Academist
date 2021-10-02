import React from 'react';
import adminpicture from './../../assets/images/admin.jpg'
import ManageTable from './ManageTable';
const admindata = [
    {
    id:'01',    
    name:'MD shoab',
    email:'mdshoab@gmail.com',
    image:adminpicture
},
{
    id:'02',
    name:'Probin Ghosh',
    email:'probin.ghosh@gmail.com',
    image:adminpicture
},
 { 
    id:'03',
    name:'Foysal Imran',
    email:'foysal.imran@gmail.com',
    image:adminpicture
}, 
  {
    id:'04',
    name:'Anayet Khan',
    email:'anayet.khan@gmail.com',
    image:adminpicture
}, 

]

const ManageAdmin = () => {
    return (
        <div>
              <div className="flex flex-col">
  <div className="-my-2 ">
    <div className="py-2 align-middle ">
      <div className="shadow  border-gray-200 ">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Name
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Title
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Status
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Role
              </th>
              <th scope="col" className="relative px-6 py-3">
                <span className="sr-only">Edit</span>
              </th>
            </tr>
          </thead>
          {
              admindata.map((md)=> <ManageTable md={md} /> ) 
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