import axios from "axios";
import Sidebar from "components/Dashboard/Sidebar";
import Title from "components/utilities/Title";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import { useContext, useEffect, useReducer, useState } from "react";
import { useForm } from "react-hook-form";
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

function CourseEdit({ params }) {
  const productId = params.id;
  const { state } = useContext(Store);
  const [{ loading, error, loadingUpdate, loadingUpload }, dispatch] =
    useReducer(reducer, {
      loading: true,
      error: "",
    });

  const {
    handleSubmit,
    control,
    register,
    formState: { errors },
    setValue,
  } = useForm();
  const [prichard, setPrichard] = useState(false);
  const router = useRouter();
  const { userInfo } = state;
  useEffect(() => {
    if (!userInfo) {
      return router.push("/login");
    } else {
      const fetchData = async () => {
        try {
          dispatch({ type: "FETCH_REQUEST" });
          const { data } = await axios.get(
            `/api/admin/admincourses/${productId}`,
            {
              headers: { authorization: `Bearer ${userInfo.token}` },
            }
          );

          setPrichard(data.prichard);
          dispatch({ type: "FETCH_SUCCESS" });
          setValue("title", data.title);
        } catch (err) {
          Swal.fire({
            icon: "error",
            text: err.message ? "Course updated failed" : "",
          });
        }
      };
      fetchData();
    }
  }, []);

  const submitHandler = async ({ title }) => {
    try {
      dispatch({ type: "UPDATE_REQUEST" });
      const { data } = await axios.put(
        `/api/admin/admincourses/${productId}`,
        {
          title,
          prichard,
        },
        { headers: { authorization: `Bearer ${userInfo.token}` } }
      );
      dispatch({ type: "UPDATE_SUCCESS" });
      Swal.fire({
        icon: "success",
        text: "Course updated successfully",
      });
    } catch (err) {
      Swal.fire({
        icon: "error",
        text: err.message,
      });
    }
  };

  return (
    <>
      <div className="flex items-stretch w-full bg-gray-200">
        <Sidebar />
        <div className="w-full min-h-screen transition-all bg-white">
          <div className="flex items-center justify-center min-h-screen overflow-x-hidden lg:overflow-x-auto lg:overflow-hidden">
            <div className="flex flex-col flex-wrap justify-between w-full login-container lg:flex-nowrap lg:flex-row group">
              <div className="order-1 w-full min-h-screen lg:order-2">
                <div className="relative flex min-h-screen px-10 mt-16 form-wrapper lg:pt-0">
                  <div className="w-full space-y-2">
                    <Title
                      title="Course update"
                      subtitle=""
                      description=""
                    ></Title>
                    <form onSubmit={handleSubmit(submitHandler)}>
                      <div className="py-2 form-element">
                        <label className="space-y-0.5 w-full block mx-auto">
                          <span className="block text-lg tracking-wide text-gray-800">
                            Title
                          </span>
                          <span className="block">
                            <input
                              type="text"
                              name="title"
                              // eslint-disable-next-line react/jsx-props-no-spreading
                              {...register("title", {
                                required: {
                                  value: true,
                                  message: "You most enter title",
                                },
                              })}
                              className={`block w-full px-4 py-3 placeholder-gray-500 border-gray-300 rounded-md shadow focus:ring-blue-500 focus:border-blue-500 focus:outline-none focus:ring-2
               ${errors.name ? "ring-2 ring-red-500" : null}`}
                            />
                            <span className="py-2 text-sm text-red-400">
                              {errors?.name?.message}
                            </span>
                          </span>
                        </label>
                      </div>
                      <div className="flex gap-4">
                        <div className="mb-4">
                          <input
                            id="prichard"
                            onClick={(e) => setPrichard(e.target.checked)}
                            className="rounded focus:border-royal-blue "
                            type="radio"
                            name="prichard"
                          />
                          <label htmlFor="prichard">Is prichard</label>
                        </div>
                      </div>
                      <div className="py-4 form-element">
                        <span className="my-4 ">
                          <input
                            type="submit"
                            className="flex px-6 py-3 text-lg text-white bg-indigo-700 border-0 rounded cursor-pointer focus:outline-none hover:bg-aquamarine-800"
                            value="Update Course"
                          ></input>
                        </span>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export async function getServerSideProps({ params }) {
  return {
    props: { params },
  };
}

export default dynamic(() => Promise.resolve(CourseEdit), { ssr: false });
