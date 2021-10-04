import React from 'react';

const AddNewCourse = () => {
    return (
        <div className="addNewCourse">
            <form action="">
                <div className="container">
                    <div className="grid grid-cols-2">
                        <div className="leftInput">
                            <p>Title</p>
                            <input type="text" name="title" />

                            <p>Short Description</p>
                            <input type="text" name="title" /> <br/>

                            <select>
                                <option value="">Select Category</option>
                                <option value="">Bank</option>
                                <option value="">Programing</option>
                                <option value="">Microsoft Office</option>
                                <option value="">Accounting</option>
                                <option value="">Management</option>
                            </select> <br/>

                            <select>
                                <option value="">Select Level</option>
                                <option value="">Biginer</option>
                                <option value="">Biginer</option>
                                <option value="">Biginer</option>
                                <option value="">Biginer</option>
                            </select>

                            <p>Price</p>
                            <input type="text" name="title" />
                            
                        </div>

                        <div className="mt-5 leftInput">

                            <select>
                                <option value="">Course Provider</option>
                                <option value="">Rohim</option>
                                <option value="">Korim</option>
                                <option value="">Shorim</option>
                                <option value="">Mamun</option>
                            </select>

                            <p>Video Url</p>
                            <input type="text" name="title" />

                            <p>Thumbnail</p>
                            <input type="file" name="title" />

                            <p>Description</p>
                            <textarea name="" id=""></textarea>

                        </div>
                       <input type="submit"></input>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default AddNewCourse;