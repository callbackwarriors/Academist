import React, { useState } from 'react';
import axios from "axios";
import { useRouter } from "next/router";

const AddNewCourse = () => {
    const router = useRouter();
    const [name, setName] = useState("");
  

    const handleSubmit = async ( e:any ) => {
        e.preventDefault();

        try {
            const { data } = await axios.post("/api/testCourse/testCourse", {
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