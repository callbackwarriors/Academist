// import axios from "axios";
// import Layout from "../components/utilities/Layout";
// import PageTitle from "../components/utilities/PageTitle";
// import { useRouter } from "next/dist/client/router";
// import React, { useContext } from "react";
// import { useForm } from "react-hook-form";
// import Swal from "sweetalert2";
// import { Store } from "../utils/Store";

// const ContactPage = () => {


//   return (
//     <Layout>
//       <PageTitle background="bg-gray-50" title="Contact us" subtitle="" />
//       <div className="section-padding">
//         <div className="container">
//           <section className="relative">
//             <div className="">
//               <div className="mx-auto lg:w-1/2 md:w-2/3">
//                 <div className="flex flex-wrap -m-2">
//                   {/* <div className="w-1/2 p-2">
//                     <div className="relative">
//                       <label className="text-sm leading-7 ">
//                         Name
//                       </label>
//                       <input
//                         type="text"
//                         id="name"
//                         name="name"
//                         placeholder="Enter your name"
//                         className="w-full px-3 py-1 text-base leading-8 text-gray-700 transition-colors duration-200 ease-in-out bg-gray-100 bg-opacity-50 border border-gray-300 rounded outline-none focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200"
//                       />
//                     </div>
//                   </div>
//                   <div className="w-1/2 p-2">
//                     <div className="relative">
//                       <label className="text-sm leading-7">
//                         Email
//                       </label>
//                       <input
//                         type="email"
//                         id="email"
//                         placeholder="Enter your email"
//                         name="email"
//                         className="w-full px-3 py-1 text-base leading-8 text-gray-700 transition-colors duration-200 ease-in-out bg-gray-100 bg-opacity-50 border border-gray-300 rounded outline-none focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200"
//                       />
//                     </div>
//                   </div>
//                   <div className="w-full p-2">
//                     <div className="relative">
//                       <label

//                         className="text-sm leading-7 "
//                       >
//                         Message
//                       </label>
//                       <textarea
//                       placeholder="Write your message..."
//                         id="message"
//                         name="message"
//                         className="w-full h-32 px-3 py-1 text-base leading-6 text-gray-700 transition-colors duration-200 ease-in-out bg-gray-100 bg-opacity-50 border border-gray-300 rounded outline-none resize-none focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200"
//                       ></textarea>
//                     </div>
//                   </div>
//                   <div className="w-full p-2">
//                     <button className="flex px-8 py-2 mx-auto text-lg text-white bg-indigo-500 border-0 rounded focus:outline-none hover:bg-indigo-600">
//                       SUBMIT
//                     </button>
//                   </div> */}
//                  
//                   <div className="w-full p-2 pt-8 mt-8 text-center border-t border-gray-200">
//                     <a className="text-indigo-500">
//                       callbackwarriors@email.com
//                     </a>
//                     <p className="my-5 leading-normal">
//                       15/E Lake circus
//                       <br />
//                       Kalabagan, Dhaka
//                     </p>
//                     <span className="inline-flex">
//                       <a className="text-gray-500">
//                         <svg
//                           fill="currentColor"
//                           stroke-linecap="round"
//                           stroke-linejoin="round"
//                           stroke-width="2"
//                           className="w-5 h-5"
//                           viewBox="0 0 24 24"
//                         >
//                           <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
//                         </svg>
//                       </a>
//                       <a className="ml-4 text-gray-500">
//                         <svg
//                           fill="currentColor"
//                           stroke-linecap="round"
//                           stroke-linejoin="round"
//                           stroke-width="2"
//                           className="w-5 h-5"
//                           viewBox="0 0 24 24"
//                         >
//                           <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
//                         </svg>
//                       </a>
//                       <a className="ml-4 text-gray-500">
//                         <svg
//                           fill="none"
//                           stroke="currentColor"
//                           stroke-linecap="round"
//                           stroke-linejoin="round"
//                           stroke-width="2"
//                           className="w-5 h-5"
//                           viewBox="0 0 24 24"
//                         >
//                           <rect
//                             width="20"
//                             height="20"
//                             x="2"
//                             y="2"
//                             rx="5"
//                             ry="5"
//                           ></rect>
//                           <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
//                         </svg>
//                       </a>
//                       <a className="ml-4 text-gray-500">
//                         <svg
//                           fill="currentColor"
//                           stroke-linecap="round"
//                           stroke-linejoin="round"
//                           stroke-width="2"
//                           className="w-5 h-5"
//                           viewBox="0 0 24 24"
//                         >
//                           <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
//                         </svg>
//                       </a>
//                     </span>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </section>
//         </div>
//       </div>
//     </Layout>
//   );
// };

// export default ContactPage;


import axios from "axios";
import { useRouter } from "next/router";
import React, { useContext, useReducer, useState } from "react";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import Swal from "sweetalert2";
import { Store } from "utils/Store";
import Layout from "../components/utilities/Layout";
import PageTitle from "../components/utilities/PageTitle";


function reducer(state, action) {
  switch (action.type) {
    case "UPLOAD_REQUEST":
      return { ...state, loadingUpload: true, errorUpload: "" };
    case "UPLOAD_SUCCESS":
      return {
        ...state,
        loadingUpload: false,
        errorUpload: "",
      };
    case "UPLOAD_FAIL":
      return { ...state, loadingUpload: false, errorUpload: action.payload };
    default:
      return state;
  }
}

const ContactPage = () => {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [img, setImg] = useState("");
  const { state } = useContext(Store);
  const { userInfo } = state;
  const [{ loading, error, loadingUpdate, loadingUpload }, dispatch] =
    useReducer(reducer, {
      loading: true,
      error: "",
    });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const { data } = await axios.post("/api/contact/contact", {
        name,
        email,
        message,
        img,
      });
      console.log('data', data);
      Swal.fire({
        icon: "success",
        text: "Message uploaded successfully",
      });

      router.push("/");
    } catch (error) {
      Swal.fire({
        icon: "error",
        text: error.message,
      });
    }
  };


  const uploadHandler = async (e) => {
    const file = e.target.files[0];
    const bodyFormData = new FormData();
    bodyFormData.append("file", file);
    try {
      dispatch({ type: "UPLOAD_REQUEST" });
      const { data } = await axios.post("/api/admin/upload", bodyFormData, {
        headers: {
          "Content-Type": "multipart/form-data",
          authorization: `Bearer ${userInfo.token}`,
        },
      });

      dispatch({ type: "UPLOAD_SUCCESS" });
      setImg(data.secure_url);

      Swal.fire({
        icon: "success",
        title: "Image",
        text: "Image uploaded successfully",
      });
    } catch (err) {
      Swal.fire({
        icon: "error",
        text: err.message,
      });
    }
  };

  return (
    <Layout>
      <PageTitle background="bg-gray-50" title="Contact us" subtitle="" />
      <div className="addNewCourse">
        <div className="mx-auto my-6 lg:w-1/2 md:w-2/3">
          <form action="" onSubmit={handleSubmit}>
            <div className="container">
              <div className="flex justify-between">
                <div className="mb-4">
                  <label htmlFor="title">Name</label>
                  <input
                    onChange={(e) => setName(e.target.value)}
                    id="title"
                    className="w-full px-3 py-1 text-base leading-8 text-gray-700 transition-colors duration-200 ease-in-out bg-gray-100 bg-opacity-50 border border-gray-300 rounded outline-none focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200"

                    type="text"
                    name="title"
                    placeholder="Write your name"
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="title">Email</label>
                  <input
                    onChange={(e) => setEmail(e.target.value)}
                    id="title"
                    className="w-full px-3 py-1 text-base leading-8 text-gray-700 transition-colors duration-200 ease-in-out bg-gray-100 bg-opacity-50 border border-gray-300 rounded outline-none focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200"

                    type="text"
                    name="title"
                    placeholder="Write your email"
                  />
                </div>
              </div>


              <div className="mb-4">
                <label htmlFor="message">Course Overview</label>
                <textarea
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full h-32 px-3 py-1 text-base leading-6 text-gray-700 transition-colors duration-200 ease-in-out bg-gray-100 bg-opacity-50 border border-gray-300 rounded outline-none resize-none focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200"

                  placeholder="Write your message..."
                  id="message"
                  name="message"
                ></textarea>
              </div>

              <div>
                <div className="flex mt-8 mb-8">
                  <div className="max-w-2xl rounded-lg shadow-xl bg-gray-50">
                    <div className="m-4 ">
                      <label className="inline-block mb-2 text-gray-500">
                        Upload thumbnail
                      </label>
                      <div className="flex items-center justify-center w-full">
                        <label className="flex flex-col w-full h-32 border-4 border-blue-200 border-dashed hover:bg-gray-100 hover:border-gray-300">
                          <div className="flex flex-col items-center justify-center cursor-pointer pt-7">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="w-8 h-8 text-gray-400 group-hover:text-gray-600"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                              />
                            </svg>
                            <p className="pt-1 text-sm tracking-wider text-gray-400 group-hover:text-gray-600">
                              Attach a file
                            </p>
                          </div>
                          <input
                            disabled={!setImg}
                            onChange={uploadHandler}
                            accept=".jpg, .jpeg, .png"
                            type="file"
                            className="opacity-0"
                          />
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>


              <input
                className="px-12 py-3 text-lg text-white border-0 cursor-pointer bg-royal-blue focus:outline-none hover:bg-indigo-600"
                type="submit"
              />
            </div>
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default ContactPage;

