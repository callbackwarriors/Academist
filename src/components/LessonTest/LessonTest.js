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
      D;
    default:
      return state;
  }
}

const LessonTest = () => {
  const [inputList, setInputList] = useState([{}]);
  console.log(inputList);
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
    setInputList([...inputList, { link: "", title: ""}]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const { data } = await axios.post("/api/lesson/lesson", {
        inputList,
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
            <label htmlFor="title">Enter lecture title</label>
            {inputList.map((x, i) => {
              return (
                <div>
                  <input
                    required
                    className="w-full px-4 py-3 mb-4 text-lg border-1 focus:border-royal-blue"
                    name="title"
                    type="text"
                    placeholder="Enter lecture title"
                    value={x.title}
                    onChange={(e) => handleInputChange(e, i)}
                  />
                  <input
                    required
                    className="w-full px-4 py-3 text-lg border-1 focus:border-royal-blue"
                    name="link"
                    type="text"
                    placeholder="Enter lecture link"
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

          <input
            className="px-12 py-3 text-lg text-white border-0 cursor-pointer bg-royal-blue focus:outline-none hover:bg-indigo-600"
            type="submit"
          />
        </div>
      </form>
    </div>
  );
};

export default LessonTest;
