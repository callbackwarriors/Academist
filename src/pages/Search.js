import { useRouter } from 'next/router';
import react from 'react'
import Layout from '../components/utilities/Layout'
import Course from '../models/postCourse';
import db from '../utils/db';
import allCourses from '../components/AllCourses/AllCourses'

const PAGE_SIZE = 3;
const Search = ({props}) => {
    const router = useRouter();
    const {query='all'} = router.query;
    const {allCourses} = props;

    const filterSearch = ({
        page,
        searchQuery,
      
      }) => {
        const path = router.pathname;
        const { query } = router;
        if (page) query.page = page;
        if (searchQuery) query.searchQuery = searchQuery;
        router.push({
          pathname: path,
          query: query,
        });
      };

    return (
       
       <Layout>
          <div className=" container grid lg:grid-cols-3 grid-col-1">
              <h1>Your Search result</h1>
              <div className="flex flex-wrap page-content__body">
                    {allCourses
                      .filter((course) => {
                        if (filterSearch == "") {
                          return course;
                        } else if (
                          course.title
                            .toLowerCase()
                            .includes(filterSearch.toLowerCase())
                        ) {
                          return course;
                        }
                      })
                      .map((course) => (
                        <allCourses key={course.title} course={course} />
                      ))}
                  </div>
          </div>
       </Layout>
    );
};

export default Search;


export async function getServerSideProps({query}) {
    await db.connect();
    const pageSize = query.pageSize || PAGE_SIZE;
    const page = query.page || 1;
    const searchQuery = query.query || '';

    const queryFilter = 
    searchQuery && searchQuery !== 'all'
    ? {
        name:{
            $regex: searchQuery,
            $options: 'i',
        },
    }:{},

    const courses = await Course.find({}).lean();
    const allCourses = JSON.parse(JSON.stringify(courses));
    await db.disconnect();
    return {
        props: {
            allCourses
        }
    }  
      
}