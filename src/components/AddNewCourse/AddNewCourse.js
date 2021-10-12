


import React, { useState } from 'react';
import axios from "axios";
import { useRouter } from "next/router";

const AddNewCourse = () => {
    const router = useRouter();
    const [name, setName] = useState("");
  

    const handleSubmit = async ( e ) => {
        e.preventDefault();

        try {
            const { data } = await axios.post("/api/course/testCourses", {
                name,
            });
            console.log("couse name", data);
          } catch (err) {
               console.log(err)
          }
        };
       

    return (
        <div className="addNewCourse">
            <form action="" onSubmit={handleSubmit}>
                <div className="container">
                    <div className="grid grid-cols-2">
                        <div className="leftInput">
                            <p>Title</p>
                            <input  onChange={(e) => setName(e.target.value)} type="text" name="title" />

                            {/* <p>Short Description</p>
                            <input onBlur={handleBlur} type="text" name="desc" /> <br />
                            <select onBlur={handleBlur}>
                                <option value="">Select Category</option>
                                <option value="">Bank</option>
                                <option value="">Programing</option>
                                <option value="">Microsoft Office</option>
                                <option value="">Accounting</option>
                                <option value="">Management</option>
                            </select> <br />
                            <select onBlur={handleBlur}>
                                <option value="">Select Level</option>
                                <option value="">Biginer</option>
                                <option value="">Biginer</option>
                                <option value="">Biginer</option>
                                <option value="">Biginer</option>
                            </select>
                            <p>Price</p>
                            <input onBlur={handleBlur} type="number" name="price" />
                        </div>
                        <div className="mt-5 leftInput">
                            <select onBlur={handleBlur}>
                                <option value="">Course Provider</option>
                                <option value="">Rohim</option>
                                <option value="">Korim</option>
                                <option value="">Shorim</option>
                                <option value="">Mamun</option>
                            </select>
                            <p>Video Url</p>
                            <input onBlur={handleBlur} type="text" name="videoUrl" />
                            <p>Thumbnail</p>
                            <input onChange={handleFileChange} type="file" name="thumbnail" />
                            <p>Description</p>
                            <textarea onBlur={handleBlur} name="desc" id=""></textarea> */}

                        </div>
                        <input type="submit"></input>
                    </div>
                </div>
            </form>
        </div>
    );
}
;

export default AddNewCourse;
























// this is my-----------------------------------------------------------------------------------------------


// import axios from 'axios';
// import React, { useState } from 'react';
// import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

// const AddNewCourse = () => {
   
// const [title , setTitle] = useState("")
// const [sortDes, setSortDes] = useState("")
// const [courseOverview, setCourseOverview]= useState("")
// const [courseFeature, setCourseFeature] =useState("")
// const [courseCategory, setCourseCategory] =useState("")
// const [courseLabel, setCourseLabel] =useState("")
// const [price, setPrice] =useState("")
// const [courseProvider, setCourseProvider] =useState("")
// const [certificate, setCertificate] =useState(false)
// const [intro, setIntro] =useState("")

// const handleSubmit = async ( e ) => {
//     e.preventDefault();

//     try {
//         const { data } = await axios.post("/api/course/course", {
//             title,
//             sortDes,
//             courseOverview,
//             courseFeature,
//             courseCategory,
//             courseLabel,
//             price,
//             courseProvider,
//             certificate,
//             intro
//         });
//         console.log("couse name", data);
//       } catch (err) {
//            console.log(err)
//       }
//     };



// //  const { register, handleSubmit, formState: { errors } } = useForm();
// //  console.log(errors);
 

// //  const submitHandler = async ({ title}:any) => {
// //     try {
// //       const { data } = await axios.post("/api/course/course", {
// //         title,

// //       });
// //       console.log("data", data);
  
// //     } catch ({err}:any) {
// //         console.log(err);
// //     //   alert(err.response.data ? err.response.data.message : err.message);
// //     }
// //   };


//     // const [course, setCourse] = useState({});
//     // // const [file, setFile] = useState(null)
//     // const handleBlur = (e: any) => {
//     //     // const newCourse = { ...course };
//     //     // newCourse[e.target.name] = e.target.value;
//     //     // console.log(newCourse);
//     // }

//     // const handleFileChange = () => { }

//     // const handleSubmit = (e: any) => {
//     //     e.preventDefault();
//         // const formData = new FormData()
//         // // formData.append('file', file)
//         // formData.append('name', course.name);
//         // formData.append('price', course.price);
//         // formData.append('textarea', course.textarea);

//         // fetch('http://localhost:5000/api/courses', {
//         //     method: 'POST',
//         //     body: formData
//         // })
//         //     .then(response => response.json())
//         //     .then(data => {
//         //         console.log(data);
//         //         alert("Course added successfully.")
//         //     })
//         //     .catch(error => {
//         //         console.log(error)
//         //     })
//     // }


//     return (
//         <div className="addNewCourse">
//             <form action=""  onSubmit={handleSubmit}>
//                 <div className="container">
                    
//                     <div className="mb-4">
//                         <label className=" font-bold text-gray-500" htmlFor="title">Title</label>
//                         <input onChange={(e) => setTitle(e.target.value)} id="title" className="rounded focus:border-royal-blue px-4 py-3 w-full"  type="text" name="title" placeholder="Write your course title here..."/>
//                     </div>

//                     <div className="mb-4">
//                         <label className=" font-bold text-gray-500" htmlFor="short__desc">Short Description</label>

//                         <textarea  onChange={(e) => setSortDes(e.target.value)} className="rounded focus:border-royal-blue  px-4 py-3 w-full" name="shortDesc" placeholder="Write short description" id="short__desc"></textarea>
//                     </div>

//                     <div className="mb-4">
//                         <label className=" font-bold text-gray-500" htmlFor="course__overview">Course Overview</label>

//                         <textarea   onChange={(e) => setCourseOverview(e.target.value)}  className="rounded focus:border-royal-blue  px-4 py-3 w-full" name="courseOverview" placeholder="Write your course overview..." id="course__overview"></textarea>
//                     </div>

//                     <div className="mb-4">
//                         <label className=" font-bold text-gray-500" htmlFor="course__features">Course Features</label>

//                         <textarea  onChange={(e) => setCourseFeature(e.target.value)}   className="rounded focus:border-royal-blue  px-4 py-3 w-full" name="courseFeature" placeholder="Write your course overview..." id="course__features"></textarea>
//                     </div>

//                     <div className="mb-4">
//                         <label className=" font-bold text-gray-500" htmlFor="course__category">Course Category</label>
//                         <select  onChange={(e) => setCourseCategory(e.target.value)}  id="course__category" name="courseCategory" className="form-select focus:border-royal-blue w-full px-4 py-3 rounded">
//                         <option value="javascript">Javascript</option>
//                         <option value="react">React</option>
//                         <option value="nodejs">Nodejs</option>
//                         <option value="nextjs">Nextjs</option>
//                         </select>
//                     </div>

//                     <div className="mb-4">
//                         <label className=" font-bold text-gray-500" htmlFor="course__label">Course Label</label>
//                         <select   onChange={(e) => setCourseLabel(e.target.value)} name="courseLabel" id="course__label" className="form-select focus:border-royal-blue w-full px-4 py-3 rounded">
//                         <option value="basic">Basic</option>
//                         <option value="beginner">Beginner</option>
//                         <option value="medium">Medium</option>
//                         <option value="advance">Advance</option>
//                         </select>
//                     </div>

//                     <div className="mb-4">
//                         <label className=" font-bold text-gray-500" htmlFor="price">Course Price</label>
//                         <input  onChange={(e) => setPrice(e.target.value)}   id="price" className="rounded focus:border-royal-blue px-4 py-3 w-full" type="number" name="price" placeholder="Write your course price here..."/>
//                     </div>

//                     <div className="mb-4">
//                         <label className=" font-bold text-gray-500" htmlFor="price">Course Provider</label>
//                         <input  onChange={(e) => setCourseProvider(e.target.value)}   id="price" className="rounded focus:border-royal-blue px-4 py-3 w-full"  type="text" name="courseProvider" placeholder="Write Corse provider name"/>
//                     </div>

//                     <div className="mb-4">
//                     <input   onChange={(e) => setCertificate(e.target.value)}  id="certificate" className="rounded focus:border-royal-blue" type='checkbox' name="certificate"/>
                    
//                         <label className=" font-bold text-gray-500" htmlFor="certificate"> Is certificate include?</label>
                        
//                     </div> 
//                     <div> 


//                         <div className="flex mt-8 mb-8">
//                             <div className="max-w-2xl rounded-lg shadow-xl bg-gray-50">
//                                 <div className="m-4 ">
//                                     <label className="inline-block mb-2 text-gray-500">Upload thumbnail</label>
//                                     <div className="flex items-center justify-center w-full">
//                                         <label
//                                             className="flex flex-col w-full h-32 border-4 border-blue-200 border-dashed hover:bg-gray-100 hover:border-gray-300">
//                                             <div className="flex flex-col items-center justify-center pt-7 cursor-pointer">
//                                                 <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-gray-400 group-hover:text-gray-600"
//                                                     fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                                                     <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
//                                                         d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
//                                                 </svg>
//                                                 <p className="pt-1 text-sm tracking-wider text-gray-400 group-hover:text-gray-600">
//                                                     Attach a file</p>
//                                             </div>
//                                             <input type="file" className="opacity-0" />
//                                         </label>
//                                     </div>
//                                 </div>
                                
//                             </div>
//                         </div>  
//                      </div>


//                     <div className="mb-4">
//                         <label className=" font-bold text-gray-500" htmlFor="intro">Intro video</label>
//                         <input  onChange={(e) => setIntro(e.target.value)}   id="intro" className="rounded focus:border-royal-blue px-4 py-3 w-full" type="url" name="intro" placeholder="Add intro video link"/>
//                     </div>

//                     <input className=" rounded text-white bg-royal-blue border-0 py-3 px-12 focus:outline-none hover:bg-indigo-600 text-lg" type="submit"></input>

//                 </div>
//             </form>
//         </div>
//     );
// };       

// export default AddNewCourse;