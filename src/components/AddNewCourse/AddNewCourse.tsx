import React, { useState } from 'react';

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
                    <div className="grid grid-cols-2">
                        <div className="leftInput">
                            <p>Title</p>
                            <input onBlur={handleBlur} type="text" name="title" />

                            <p>Short Description</p>
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
                            <textarea onBlur={handleBlur} name="desc" id=""></textarea>

                        </div>
                        <input type="submit"></input>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default AddNewCourse;