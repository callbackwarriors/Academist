import Sidebar from 'components/Dashboard/Sidebar';
import Layout from 'components/utilities/Layout';
const managecourses = () => {
    return (
        <Layout>
           <div className="flex w-full items-stretch bg-gray-200">
                 <Sidebar />
            <div className="w-full p-6 h-screen transition-all">
                <h1>Manage courses page</h1>
            </div>
            </div>
        </Layout>
    )
}

export default managecourses
