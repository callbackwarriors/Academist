import axios from "axios";
import React, { useContext, useReducer, useState } from "react";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import Swal from "sweetalert2";
import { Store } from "utils/Store";

function reducer(state, action) {
  switch (action.type) {
    case "FETCH_REQUEST":
      return { ...state, loading: true, error: "" };
    case "FETCH_SUCCESS":
      return { ...state, loading: false, error: "" };
    case "FETCH_FAIL":
      return { ...state, loading: false, error: action.payload };
    case "UPDATE_REQUEST":
      return { ...state, loadingUpdate: true, errorUpdate: "" };
    case "UPDATE_SUCCESS":
      return { ...state, loadingUpdate: false, errorUpdate: "" };
    case "UPDATE_FAIL":
      return { ...state, loadingUpdate: false, errorUpdate: action.payload };
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

const AddNewCourse = () => {
  const [inputList, setInputList] = useState([{ link: "" }]);
  const [title, setTitle] = useState("");
  const [slug, setSlug] = useState("");
  const [videoUrl, setVideoUrl] = useState("");
  const [shortDesc, setShortDesc] = useState("");
  const [categories, setCategories] = useState("");
  const [level, setLevel] = useState("");
  const [price, setPrice] = useState(0);
  const [desc, setDesc] = useState("");
  const [img, setImg] = useState("");
  const { state } = useContext(Store);
  const { userInfo } = state;
  const [{ loading, error, loadingUpdate, loadingUpload }, dispatch] =
    useReducer(reducer, {
      loading: true,
      error: "",
    });

  const handleInputChange = (e, index) => {
    const { name, value } = e.target;
    const list = [...inputList];
    list[index][name] = value;
    setInputList(list);
  };

  const handleRemoveClick = (index) => {
    const list = [...inputList];
    list.splice(index, 1);
    setInputList(list);
  };

  const handleAddClick = () => {
    setInputList([...inputList, { link: "" }]);
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("inputList", inputList);
    console.log("title", title);
    try {
      const { data } = await axios.post("/api/postcourses/postCourse", {
        inputList,
        title,
        slug,
        videoUrl,
        shortDesc,
        categories,
        price,
        level,
        desc,
        img,
      });
      console.log("data", data);
      Swal.fire({
        icon: "success",
        text: "Course uploaded successfully",
      });
    } catch (error) {
      Swal.fire({
        icon: "error",
        text: error.message,
      });
    }
  };

  return (
    <div className="addNewCourse">
      <form action="" onSubmit={handleSubmit}>
        <div className="container">
          <div className="mb-4">
            <label htmlFor="title">Title</label>
            <input
              onChange={(e) => setTitle(e.target.value)}
              id="title"
              className="w-full px-4 py-3 rounded focus:border-royal-blue"
              type="text"
              name="title"
              placeholder="Write your course title here..."
            />
          </div>
          <div className="mb-4">
            <label htmlFor="slug">Slug</label>
            <input
              onChange={(e) => setSlug(e.target.value)}
              id="slug"
              className="w-full px-4 py-3 rounded focus:border-royal-blue"
              type="text"
              name="slug"
              placeholder="Write your course title here..."
            />
          </div>
          <div className="mb-4">
            <label htmlFor="intro">Intro video</label>
            <input
              onChange={(e) => setVideoUrl(e.target.value)}
              id="intro"
              className="w-full px-4 py-3 rounded focus:border-royal-blue"
              type="text"
              name="intro"
              placeholder="Add intro video link"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="title">Enter Lesion</label>
            {inputList.map((x, i) => {
              return (
                <div>
                  <input
                    className="w-full px-4 py-3 text-lg border-1 focus:border-royal-blue"
                    name="link"
                    type="text"
                    placeholder="Enter Lesion Link"
                    value={x.link}
                    onChange={(e) => handleInputChange(e, i)}
                  />

                  <div className="btn-box">
                    {inputList.length !== 1 && (
                      <button
                        className="px-4 py-1 my-4 mr-4 text-lg text-white bg-red-600 border-0 cursor-pointer focus:outline-none hover:bg-red-400"
                        onClick={() => handleRemoveClick(i)}
                      >
                        Remove
                      </button>
                    )}
                    {inputList.length - 1 === i && (
                      <button
                        className="px-4 py-1 my-4 text-lg text-white border-0 cursor-pointer bg-royal-blue focus:outline-none hover:bg-indigo-600"
                        onClick={handleAddClick}
                      >
                        Add
                      </button>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
          <div className="mb-4">
            <label htmlFor="shortDesc">Short Description</label>
            <textarea
              onChange={(e) => setShortDesc(e.target.value)}
              className="w-full px-4 py-3 rounded focus:border-royal-blue"
              name="shortDesc"
              placeholder="Write short description"
              id="shortDesc"
            ></textarea>
          </div>

          <div className="mb-4">
            <label htmlFor="categories">Course Category</label>
            <select
              onChange={(e) => setCategories(e.target.value)}
              id="categories"
              name="categories"
              className="w-full px-4 py-3 rounded form-select focus:border-royal-blue"
            >
              <option value="javascript">Javascript</option>
              <option value="react">React</option>
              <option value="nodejs">Nodejs</option>
              <option value="nextjs">Nextjs</option>
            </select>
          </div>

          <div className="mb-4">
            <label htmlFor="level">Course Label</label>
            <select
              id="level"
              onChange={(e) => setLevel(e.target.value)}
              name="level"
              className="w-full px-4 py-3 rounded form-select focus:border-royal-blue"
            >
              <option value="basic">Basic</option>
              <option value="beginner">Beginner</option>
              <option value="medium">Medium</option>
              <option value="advance">Advance</option>
            </select>
          </div>

          <div className="mb-4">
            <label htmlFor="price">Course Price</label>
            <input
              onChange={(e) => setPrice(e.target.value)}
              id="price"
              className="w-full px-4 py-3 rounded focus:border-royal-blue"
              type="number"
              name="price"
              placeholder="Write your course price here..."
            />
          </div>
          <div className="mb-4">
            <label htmlFor="desc">Course Overview</label>
            <textarea
              onChange={(e) => setDesc(e.target.value)}
              className="w-full px-4 py-3 rounded focus:border-royal-blue"
              placeholder="Write your course overview..."
              id="desc"
              name="desc"
            ></textarea>
          </div>
          <div className="mb-4">
            <input
              id="certificate"
              className="rounded focus:border-royal-blue "
              type="checkbox"
              name="certificate"
            />
            <label htmlFor="certificate"> Is certificate include?</label>
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
  );
};

export default AddNewCourse;
