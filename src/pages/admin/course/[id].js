import img from "assets/images/cycle.png";
import axios from "axios";
import dynamic from "next/dynamic";
import Image from "next/image";
import { useRouter } from "next/router";
import { useContext, useEffect, useReducer } from "react";
import { Store } from "utils/Store";
import { useForm } from "react-hook-form";
import Layout from "components/utilities/Layout";

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
    default:
      return state;
  }
}

function CourseEdit({ params }) {
  // console.log('params', params);
  const productId = params.id;
  const { state } = useContext(Store);
  const [{ loading, error, loadingUpdate }, dispatch] = useReducer(reducer, {
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
  const router = useRouter();
  const { userInfo } = state;
  useEffect(() => {
    if (!userInfo) {
      return router.push("/login");
    } else {
      const fetchData = async () => {
        try {
          dispatch({ type: "FETCH_REQUEST" });
          const { data } = await axios.get(`/api/admin/courses/${productId}`, {
            headers: { authorization: `Bearer ${userInfo.token}` },
          });
          console.log(data);
          dispatch({ type: "FETCH_SUCCESS" });
          setValue("title", data.title);
          setValue("slug", data.slug);
          setValue("shortDesc", data.shortDesc);
          setValue("categories", data.categories);
          setValue("level", data.level);
          setValue("price", data.price);
          setValue("courseProvider", data.courseProvider);
          setValue("videoUrl", data.videoUrl);
          setValue("img", data.img);
          setValue("desc", data.desc);
        } catch (err) {
          console.log(err.message);
          // dispatch({ type: 'FETCH_FAIL', payload: getError(err) });
        }
      };
      fetchData();
    }
  }, []);

  const submitHandler = async ({
    title,
    slug,
    shortDesc,
    categories,
    level,
    price,
    courseProvider,
    videoUrl,
    img,
    desc,
  }) => {
    try {
      dispatch({ type: "UPDATE_REQUEST" });
      const { data } = await axios.put(
        `/api/admin/courses/${productId}`,
        {
          title,
          slug,
          shortDesc,
          categories,
          level,
          price,
          courseProvider,
          videoUrl,
          img,
          desc,
        },
        { headers: { authorization: `Bearer ${userInfo.token}` } }
      );
      dispatch({ type: "UPDATE_SUCCESS" });
      alert("Courses updated successfully");
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <Layout>
      <div className="flex items-center justify-center min-h-screen overflow-x-hidden bg-yellow-100 lg:overflow-x-auto lg:overflow-hidden">
        <div className="flex flex-col flex-wrap justify-between w-full border-gray-300 login-container lg:w-4/5 lg:bg-white lg:border lg:flex-nowrap lg:flex-row group">
          <div className="order-1 w-full min-h-screen lg:order-2">
            <div className="relative z-10 flex items-center min-h-screen px-10 pt-16 form-wrapper lg:pt-0">
              <div className="w-full space-y-2">
                <div className="flex items-end justify-center mb-8 space-x-3 text-center form-caption">
                  <span className="text-3xl font-semibold text-royal-blue">
                    Account Settings
                  </span>
                </div>
                <form onSubmit={handleSubmit(submitHandler)}>
                  <div className="form-element">
                    <label className="space-y-0.5 w-full lg:w-4/5 block mx-auto">
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
                          // placeholder="Full name"
                        />
                        <span className="py-2 text-sm text-red-400">
                          {errors?.name?.message}
                        </span>
                      </span>
                    </label>
                  </div>
                  <div className="form-element">
                    <label className="space-y-0.5 w-full lg:w-4/5 block mx-auto">
                      <span className="block text-lg tracking-wide text-gray-800">
                        Slug
                      </span>
                      <span className="block">
                        <input
                          type="text"
                          name="slug"
                          // eslint-disable-next-line react/jsx-props-no-spreading
                          {...register("slug", {
                            required: {
                              value: true,
                              message: "You most enter slug",
                            },
                          })}
                          className={`block w-full px-4 py-3 placeholder-gray-500 border-gray-300 rounded-md shadow focus:ring-blue-500 focus:border-blue-500 focus:outline-none focus:ring-2
               ${errors.name ? "ring-2 ring-red-500" : null}`}
                          // placeholder="Full name"
                        />
                        <span className="py-2 text-sm text-red-400">
                          {errors?.name?.message}
                        </span>
                      </span>
                    </label>
                  </div>
                  <div className="form-element">
                    <label className="space-y-0.5 w-full lg:w-4/5 block mx-auto">
                      <span className="block text-lg tracking-wide text-gray-800">
                        ShortDesc
                      </span>
                      <span className="block">
                        <input
                          type="text"
                          name="shortDesc"
                          // eslint-disable-next-line react/jsx-props-no-spreading
                          {...register("shortDesc", {
                            required: {
                              value: true,
                              message: "You most enter shortDesc",
                            },
                          })}
                          className={`block w-full px-4 py-3 placeholder-gray-500 border-gray-300 rounded-md shadow focus:ring-blue-500 focus:border-blue-500 focus:outline-none focus:ring-2
               ${errors.name ? "ring-2 ring-red-500" : null}`}
                          // placeholder="Full name"
                        />
                        <span className="py-2 text-sm text-red-400">
                          {errors?.name?.message}
                        </span>
                      </span>
                    </label>
                  </div>
                  <div className="form-element">
                    <label className="space-y-0.5 w-full lg:w-4/5 block mx-auto">
                      <span className="block text-lg tracking-wide text-gray-800">
                        Categories
                      </span>
                      <span className="block">
                        <input
                          type="text"
                          name="categories"
                          // eslint-disable-next-line react/jsx-props-no-spreading
                          {...register("categories", {
                            required: {
                              value: true,
                              message: "You most enter categories",
                            },
                          })}
                          className={`block w-full px-4 py-3 placeholder-gray-500 border-gray-300 rounded-md shadow focus:ring-blue-500 focus:border-blue-500 focus:outline-none focus:ring-2
               ${errors.name ? "ring-2 ring-red-500" : null}`}
                          // placeholder="Full name"
                        />
                        <span className="py-2 text-sm text-red-400">
                          {errors?.name?.message}
                        </span>
                      </span>
                    </label>
                  </div>
                  <div className="form-element">
                    <label className="space-y-0.5 w-full lg:w-4/5 block mx-auto">
                      <span className="block text-lg tracking-wide text-gray-800">
                        Level
                      </span>
                      <span className="block">
                        <input
                          type="text"
                          name="level"
                          // eslint-disable-next-line react/jsx-props-no-spreading
                          {...register("level", {
                            required: {
                              value: true,
                              message: "You most enter level",
                            },
                          })}
                          className={`block w-full px-4 py-3 placeholder-gray-500 border-gray-300 rounded-md shadow focus:ring-blue-500 focus:border-blue-500 focus:outline-none focus:ring-2
               ${errors.name ? "ring-2 ring-red-500" : null}`}
                          // placeholder="Full name"
                        />
                        <span className="py-2 text-sm text-red-400">
                          {errors?.name?.message}
                        </span>
                      </span>
                    </label>
                  </div>
                  <div className="form-element">
                    <label className="space-y-0.5 w-full lg:w-4/5 block mx-auto">
                      <span className="block text-lg tracking-wide text-gray-800">
                        Price
                      </span>
                      <span className="block">
                        <input
                          type="text"
                          name="price"
                          // eslint-disable-next-line react/jsx-props-no-spreading
                          {...register("price", {
                            required: {
                              value: true,
                              message: "You most enter price",
                            },
                          })}
                          className={`block w-full px-4 py-3 placeholder-gray-500 border-gray-300 rounded-md shadow focus:ring-blue-500 focus:border-blue-500 focus:outline-none focus:ring-2
               ${errors.name ? "ring-2 ring-red-500" : null}`}
                          // placeholder="Full name"
                        />
                        <span className="py-2 text-sm text-red-400">
                          {errors?.name?.message}
                        </span>
                      </span>
                    </label>
                  </div>
                  <div className="form-element">
                    <label className="space-y-0.5 w-full lg:w-4/5 block mx-auto">
                      <span className="block text-lg tracking-wide text-gray-800">
                        CourseProvider
                      </span>
                      <span className="block">
                        <input
                          type="text"
                          name="courseProvider"
                          // eslint-disable-next-line react/jsx-props-no-spreading
                          {...register("courseProvider", {
                            required: {
                              value: true,
                              message: "You most enter courseProvider",
                            },
                          })}
                          className={`block w-full px-4 py-3 placeholder-gray-500 border-gray-300 rounded-md shadow focus:ring-blue-500 focus:border-blue-500 focus:outline-none focus:ring-2
               ${errors.name ? "ring-2 ring-red-500" : null}`}
                          // placeholder="Full name"
                        />
                        <span className="py-2 text-sm text-red-400">
                          {errors?.name?.message}
                        </span>
                      </span>
                    </label>
                  </div>
                  <div className="form-element">
                    <label className="space-y-0.5 w-full lg:w-4/5 block mx-auto">
                      <span className="block text-lg tracking-wide text-gray-800">
                        VideoUrl
                      </span>
                      <span className="block">
                        <input
                          type="text"
                          name="videoUrl"
                          // eslint-disable-next-line react/jsx-props-no-spreading
                          {...register("videoUrl", {
                            required: {
                              value: true,
                              message: "You most enter videoUrl",
                            },
                          })}
                          className={`block w-full px-4 py-3 placeholder-gray-500 border-gray-300 rounded-md shadow focus:ring-blue-500 focus:border-blue-500 focus:outline-none focus:ring-2
               ${errors.name ? "ring-2 ring-red-500" : null}`}
                          // placeholder="Full name"
                        />
                        <span className="py-2 text-sm text-red-400">
                          {errors?.name?.message}
                        </span>
                      </span>
                    </label>
                  </div>
                  <div className="form-element">
                    <label className="space-y-0.5 w-full lg:w-4/5 block mx-auto">
                      <span className="block text-lg tracking-wide text-gray-800">
                        Img
                      </span>
                      <span className="block">
                        <input
                          type="text"
                          name="img"
                          // eslint-disable-next-line react/jsx-props-no-spreading
                          {...register("img", {
                            required: {
                              value: true,
                              message: "You most enter img",
                            },
                          })}
                          className={`block w-full px-4 py-3 placeholder-gray-500 border-gray-300 rounded-md shadow focus:ring-blue-500 focus:border-blue-500 focus:outline-none focus:ring-2
               ${errors.name ? "ring-2 ring-red-500" : null}`}
                          // placeholder="Full name"
                        />
                        <span className="py-2 text-sm text-red-400">
                          {errors?.name?.message}
                        </span>
                      </span>
                    </label>
                  </div>
                  <div className="form-element">
                    <label className="space-y-0.5 w-full lg:w-4/5 block mx-auto">
                      <span className="block text-lg tracking-wide text-gray-800">
                        Desc
                      </span>
                      <span className="block">
                        <input
                          type="text"
                          name="desc"
                          // eslint-disable-next-line react/jsx-props-no-spreading
                          {...register("desc", {
                            required: {
                              value: true,
                              message: "You most enter desc",
                            },
                          })}
                          className={`block w-full px-4 py-3 placeholder-gray-500 border-gray-300 rounded-md shadow focus:ring-blue-500 focus:border-blue-500 focus:outline-none focus:ring-2
               ${errors.name ? "ring-2 ring-red-500" : null}`}
                          // placeholder="Full name"
                        />
                        <span className="py-2 text-sm text-red-400">
                          {errors?.name?.message}
                        </span>
                      </span>
                    </label>
                  </div>

                  <div className="form-element">
                    <span className="block w-full mx-auto lg:w-4/5 ">
                      <input
                        type="submit"
                        className="flex w-full px-6 py-3 text-lg text-white bg-indigo-600 border-0 rounded cursor-pointer focus:outline-none hover:bg-aquamarine-800"
                        value="Update Account"
                      />
                    </span>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export async function getServerSideProps({ params }) {
  return {
    props: { params },
  };
}

export default dynamic(() => Promise.resolve(CourseEdit), { ssr: false });
