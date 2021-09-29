import Sidebar from 'components/Dashboard/Sidebar';
import ManageCourses from 'components/ManageCourses/ManageCourses';
import Layout from 'components/utilities/Layout';
const managecourses = () => {
    return (
        <Layout>
           <div className="flex w-full items-stretch bg-gray-200">
                 <Sidebar />
            <div className="w-full bg-white m-5 p-5 h-screen transition-all">
             <ManageCourses />
            </div>
            </div>
        </Layout>
    )
}

export default managecourses
