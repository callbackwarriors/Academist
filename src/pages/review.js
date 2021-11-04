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

const Review = () => {
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
      const { data } = await axios.post("/api/review/review", {
        name,
        email,
        message,
        img,
      });
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
      <PageTitle background="bg-gray-50" title="Testimonials" subtitle="" />
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
                  <label htmlFor="email">Email</label>
                  <input
                    onChange={(e) => setEmail(e.target.value)}
                    id="title"
                    className="w-full px-3 py-1 text-base leading-8 text-gray-700 transition-colors duration-200 ease-in-out bg-gray-100 bg-opacity-50 border border-gray-300 rounded outline-none focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200"

                    type="text"
                    name="email"
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

export default Review;

