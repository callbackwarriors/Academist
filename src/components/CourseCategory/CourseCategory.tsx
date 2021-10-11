import React from 'react';
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

const CourseCategory = () => {
    const handleBlur = (e: any) => {
        e.preventDefault();
    }
    const handleSubmit = (e: any) => {
        e.preventDefault();
    }
    return (
        <div className="min-h-screen courseCategory">
            <form action="" onSubmit={handleSubmit}>
                <div className="container">
                    <div className="mb-4">
                        <label htmlFor="categoryTitle">Category Title</label>
                        <input id="categoryTitle" className="w-full px-4 py-3 rounded focus:border-royal-blue" onBlur={handleBlur} type="text" name="categoryTitle" placeholder="Write your course category title here..." />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="short__desc">Short Description</label>

                        <textarea className="w-full px-4 py-3 rounded focus:border-royal-blue" placeholder="Write short description" id="short__desc"></textarea>
                    </div>

                    <div>
                        <div className="flex mt-8 mb-8">
                            <div className="max-w-2xl rounded-lg shadow-xl bg-gray-50">
                                <div className="m-4 ">
                                    <label className="inline-block mb-2 text-gray-500">Upload thumbnail</label>
                                    <div className="flex items-center justify-center w-full">
                                        <label
                                            className="flex flex-col w-full h-32 border-4 border-blue-200 border-dashed hover:bg-gray-100 hover:border-gray-300">
                                            <div className="flex flex-col items-center justify-center cursor-pointer pt-7">
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

                    <input className="px-12 py-3 text-lg text-white border-0 bg-royal-blue focus:outline-none hover:bg-indigo-600" type="submit"></input>
                </div>
            </form>
        </div>
    );
};

export default CourseCategory;