import React, { useState } from 'react';
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";


const AddNewCourse = () => {

    const [course, setCourse] = useState({});
    // const [file, setFile] = useState(null)
    const handleBlur = (e: any) => {
        // const newCourse = { ...course };
        // newCourse[e.target.name] = e.target.value;
        // console.log(newCourse);
    }

    const handleFileChange = () => { }

    const handleSubmit = (e: any) => {
        e.preventDefault();
        // const formData = new FormData()
        // // formData.append('file', file)
        // formData.append('name', course.name);
        // formData.append('price', course.price);
        // formData.append('textarea', course.textarea);

        // fetch('http://localhost:5000/api/courses', {
        //     method: 'POST',
        //     body: formData
        // })
        //     .then(response => response.json())
        //     .then(data => {
        //         console.log(data);
        //         alert("Course added successfully.")
        //     })
        //     .catch(error => {
        //         console.log(error)
        //     })
    }


    return (
        <div className="addNewCourse">
            <form action="" onSubmit={handleSubmit}>
                <div className="container">
                    <div className="mb-4">
                        <label htmlFor="title">Title</label>
                        <input id="title" className="rounded focus:border-royal-blue px-4 py-3 w-full" onBlur={handleBlur} type="text" name="title" placeholder="Write your course title here..."/>
                    </div>

                    <div className="mb-4">
                        <label htmlFor="short__desc">Short Description</label>

                        <textarea  className="rounded focus:border-royal-blue  px-4 py-3 w-full" placeholder="Write short description" id="short__desc"></textarea>
                    </div>

                    <div className="mb-4">
                        <label htmlFor="course__overview">Course Overview</label>

                        <textarea  className="rounded focus:border-royal-blue  px-4 py-3 w-full" placeholder="Write your course overview..." id="course__overview"></textarea>
                    </div>

                    <div className="mb-4">
                        <label htmlFor="course__features">Course Features</label>

                        <textarea  className="rounded focus:border-royal-blue  px-4 py-3 w-full" placeholder="Write your course overview..." id="course__features"></textarea>
                    </div>

                    <div className="mb-4">
                        <label htmlFor="course__category">Course Category</label>
                        <select id="course__category" className="form-select focus:border-royal-blue w-full px-4 py-3 rounded">
                        <option value="javascript">Javascript</option>
                        <option value="react">React</option>
                        <option value="nodejs">Nodejs</option>
                        <option value="nextjs">Nextjs</option>
                        </select>
                    </div>

                    <div className="mb-4">
                        <label htmlFor="course__label">Course Label</label>
                        <select id="course__label" className="form-select focus:border-royal-blue w-full px-4 py-3 rounded">
                        <option value="basic">Basic</option>
                        <option value="beginner">Beginner</option>
                        <option value="medium">Medium</option>
                        <option value="advance">Advance</option>
                        </select>
                    </div>

                    <div className="mb-4">
                        <label htmlFor="price">Course Price</label>
                        <input id="price" className="rounded focus:border-royal-blue px-4 py-3 w-full" onBlur={handleBlur} type="number" name="price" placeholder="Write your course price here..."/>
                    </div>

                    <div className="mb-4">
                    <input id="certificate" className="rounded focus:border-royal-blue " onBlur={handleBlur} type='checkbox' name="certificate"/>
                    
                        <label htmlFor="certificate"> Is certificate include?</label>
                        
                    </div>

                    <div>


 <div className="flex mt-8 mb-8">
    <div className="max-w-2xl rounded-lg shadow-xl bg-gray-50">
        <div className="m-4 ">
            <label className="inline-block mb-2 text-gray-500">Upload thumbnail</label>
            <div className="flex items-center justify-center w-full">
                <label
                    className="flex flex-col w-full h-32 border-4 border-blue-200 border-dashed hover:bg-gray-100 hover:border-gray-300">
                    <div className="flex flex-col items-center justify-center pt-7 cursor-pointer">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-gray-400 group-hover:text-gray-600"
                            fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                        </svg>
                        <p className="pt-1 text-sm tracking-wider text-gray-400 group-hover:text-gray-600">
                            Attach a file</p>
                    </div>
                    <input type="file" className="opacity-0" />
                </label>
            </div>
        </div>
        
    </div>
</div> 
                    </div>


                    <div className="mb-4">
                        <label htmlFor="intro">Intro video</label>
                        <input id="intro" className="rounded focus:border-royal-blue px-4 py-3 w-full" onBlur={handleBlur} type="url" name="intro" placeholder="Add intro video link"/>
                    </div>

                    <input className="text-white bg-royal-blue border-0 py-3 px-12 focus:outline-none hover:bg-indigo-600  text-lg" type="submit"></input>

                </div>
            </form>
        </div>
    );
};

export default AddNewCourse;