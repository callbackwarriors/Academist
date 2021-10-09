import CourseDetails from "components/CourseDetails/CourseDetails";
import Layout from "components/utilities/Layout";
import { ICourses } from "type";
import Courses from '../../models/Courses';
import db from '../../utils/db';

<<<<<<< HEAD
export default function courseDetails({ evt }: any) {
    const router = useRouter();
    const id = router.query;

    const [coursesId, setCoursesId] = useState({});

    console.log('this is unique id', id)

    useEffect(() => {
        async function fetchCoursesData() {
            const response = fetch(`http://localhost:5000/api/courses/${id}`)
            const data = await (await response).json()
            setCoursesId(data)
        }
        fetchCoursesData()
    },[])

    console.log('courses',coursesId );
=======
interface IProps {
  course: ICourses;
}


const courseDetails = (props: IProps) =>{

    const { course } = props;
    if(!course) {
        return <Layout>
         <div className="container py-20 text-center">
         Loading...
         </div>
       </Layout>
    }
>>>>>>> develop

    return (
        <Layout title={course.title}>
         <CourseDetails course={course}></CourseDetails>
        </Layout>
    );
};

<<<<<<< HEAD


export async function getServerSideProps({ query: { slug } }: any) {
    const res = await fetch(`http://localhost:5000/api/courses?slug=${slug}`)
    const events = await res.json()
     console.log("this is responso",res)
     console.log("this is event",events)
    return {
        props: {
            evt: events[3],
        },
    }
}



// export default courseDetails;

// export async function getStaticPaths() {
//     const res = await fetch(`http://localhost:5000/api/courses`);
//     const events = await res.json();
=======
export default courseDetails;
>>>>>>> develop


<<<<<<< HEAD
//     return {
//         paths,
//         fallback: true,
//     };
// }

// export async function getStaticProps({ params: { slug } }: any) {
//     const res = await fetch(`http://localhost:5000/api/courses?slug=${slug}`);
//     const events = await res.json();

//     return {
//         props: {
//             evt: events[0],
//         },
//         revalidate: 1,
//     };
// }

//888888888888888888888888888888888888888888888888888888888888888

// export async function getServerSideProps({ query: { slug } }: any) {
//     const res = await fetch(`http://localhost:5000/api/courses?slug=${slug}`)
//     const events = await res.json()

//     return {
//         props: {
//             evt: events[0],
//         },
//     }
// }




//******************* */




// export async function getServerSideProps({ query: { slug } }: any) {
//     const res = await fetch(`http://localhost:5000/api/courses?slug=${slug}`)
//     const events = await res.json()

//     return {
//         props: {
//             evt: events[0],
//         },
//     }
// }
=======

export async function getServerSideProps(context: { params: any; }) {
    const {params} = context;
    const {slug} = params;
    await db.connect();
    const course = await Courses.findOne({slug}).lean();
    await db.disconnect();
    return {
      props: {
        course: db.convertDocToObj(course),
      },
    };
  }
>>>>>>> develop
