import axios from "axios";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import NextLink from "next/link";
import React, { useEffect, useContext, useReducer, useState } from "react";
// import { getError } from "../../../utils/error";
import { Store } from "../../../utils/Store";
import { Controller, useForm } from "react-hook-form";
// import { useSnackbar } from "notistack";

function reducer(state, action) {
  switch (action.type) {
    case "FETCH_REQUEST":
      return { ...state, loading: true, error: "" };
    case "FETCH_SUCCESS":
      return { ...state, loading: false, error: "" };
    case "FETCH_FAIL":
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
}

function ProductEdit({ params }) {
  const [user, setUser] = useState();
  useEffect(() => {
    const value = localStorage.getItem("userInfo");
    const user = !!value ? JSON.parse(value) : undefined;
    setUser(user);
  }, []);

  const {
    handleSubmit,
    register,
    formState: { errors },
    setValue,
  } = useForm();
  const courseId = params.id;
  const { state } = useContext(Store);
  const [{ loading, error }, dispatch] = useReducer(reducer, {
    loading: true,
    error: "",
  });
  // const { enqueueSnackbar, closeSnackbar } = useSnackbar();
  const router = useRouter();

  useEffect(() => {
    // if (!user) {
    //   return router.push("/login");
    // } else {
    //   const fetchData = async () => {
    //     try {
    //       dispatch({ type: "FETCH_REQUEST" });
    //       const { data } = await axios.get(`/api/admin/course/${courseId}`, {
    //         headers: { authorization: `Bearer ${user.token}` },
    //       });
    //       console.log("data data", data);
    //       dispatch({ type: "FETCH_SUCCESS" });
    //       setValue("name", data.title);
    //       //   setValue("slug", data.slug);
    //       //   setValue("price", data.price);
    //       //   setValue("image", data.img);
    //       //   setValue("category", data.category);
    //       //   //   setValue('brand', data.brand);
    //       //   //   setValue('countInStock', data.countInStock);
    //       //   //   setValue('description', data.description);
    //     } catch (err) {
    //       // dispatch({ type: "FETCH_FAIL", payload: getError(err) });
    //       console.log(err);
    //     }
    //   };
    //   fetchData();
    // }
    const fetchData = async () => {
      try {
        dispatch({ type: "FETCH_REQUEST" });
        const { data } = await axios.get(`/api/admin/course/${courseId}`, {
          headers: { authorization: `Bearer ${user.token}` },
        });
        dispatch({ type: "FETCH_SUCCESS" });
        setValue("title", data.title);
        setValue("slug", data.slug);
        setValue("price", data.price);
        setValue("image", data.img);
        setValue("category", data.category);
        //   setValue('brand', data.brand);
        //   setValue('countInStock', data.countInStock);
        //   setValue('description', data.description);
      } catch (err) {
        // dispatch({ type: "FETCH_FAIL", payload: getError(err) });
        console.log(err.message);
      }
    };
    fetchData();
  }, []);
  const submitHandler = async ({ name }) => {
    // closeSnackbar();
    try {
      const { data } = await axios.put(
        `/api/admin/course/${courseId}`,
        {
          name,
        },
        { headers: { authorization: `Bearer ${user?.token}` } }
      );
      // enqueueSnackbar("Courses updated successfully", { variant: "success" });
    } catch (err) {
      // enqueueSnackbar(getError(err), { variant: "error" });
      console.log(err.message);
    }
  };
  return (
    <div title={`Edit Course ${courseId}`}>
      <div>
        <div>
          <div>
            <ul>
              {/* <ListItem>
                <Typography component="h1" variant="h1">
                  Edit Product {courseId}
                </Typography>
              </ListItem>
              <ListItem>
                {loading && <CircularProgress></CircularProgress>}
                {error && (
                  <Typography>{error}</Typography>
                )}
              </ListItem> */}
              <div>
                <form action="" onSubmit={handleSubmit(submitHandler)}>
                  <div className="container">
                    <div className="mb-4">
                      <label htmlFor="title">Title</label>
                      <input
                        id="title"
                        className="w-full px-4 py-3 rounded focus:border-royal-blue"
                        type="text"
                        name="title"
                        value={data.title}
                        placeholder="Write your course title here..."
                        {...register("name", {
                          required: {
                            value: true,
                            message: "You most enter name",
                          },
                        })}
                      />
                    </div>
                    <div className="mb-4">
                      <label htmlFor="slug">Slug</label>
                      <input
                        id="slug"
                        className="w-full px-4 py-3 rounded focus:border-royal-blue"
                        type="text"
                        name="slug"
                        placeholder="Write your course title here..."
                        {...register("name", {
                          required: {
                            value: true,
                            message: "You most enter name",
                          },
                        })}
                      />
                    </div>
                    {/* <div className="mb-4">
                      <label htmlFor="intro">Intro video</label>
                      <InputEvent
                        id="intro"
                        className="w-full px-4 py-3 rounded focus:border-royal-blue"
                        type="text"
                        name="intro"
                        placeholder="Add intro video link"
                        {...register("name", {
                          required: {
                            value: true,
                            message: "You most enter name",
                          },
                        })}
                      />
                    </div> */}
                    <div className="mb-4">
                      <label htmlFor="shortDesc">Short Description</label>
                      <textarea
                        className="w-full px-4 py-3 rounded focus:border-royal-blue"
                        name="shortDesc"
                        placeholder="Write short description"
                        id="shortDesc"
                        {...register("name", {
                          required: {
                            value: true,
                            message: "You most enter name",
                          },
                        })}
                      ></textarea>
                    </div>
                    <div className="mb-4">
                      <label htmlFor="categories">Course Category</label>
                      <select
                        id="categories"
                        name="categories"
                        className="w-full px-4 py-3 rounded form-select focus:border-royal-blue"
                        {...register("name", {
                          required: {
                            value: true,
                            message: "You most enter name",
                          },
                        })}
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
                        name="level"
                        className="w-full px-4 py-3 rounded form-select focus:border-royal-blue"
                        {...register("name", {
                          required: {
                            value: true,
                            message: "You most enter name",
                          },
                        })}
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
                        className="w-full px-4 py-3 rounded focus:border-royal-blue"
                        placeholder="Write your course overview..."
                        id="desc"
                        name="desc"
                        {...register("name", {
                          required: {
                            // value: true,
                            message: "You most enter name",
                          },
                        })}
                      ></textarea>
                    </div>
                    <div className="mb-4">
                      <label htmlFor="price">Course Price</label>
                      <input
                        id="price"
                        className="w-full px-4 py-3 rounded focus:border-royal-blue"
                        type="number"
                        name="price"
                        placeholder="Write your course price here..."
                      />
                    </div>
                    <div className="mb-4">
                      <input
                        id="certificate"
                        className="rounded focus:border-royal-blue "
                        type="checkbox"
                        name="certificate"
                      />
                      <label htmlFor="certificate">
                        {" "}
                        Is certificate include?
                      </label>
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
                                      stroke-linecap="round"
                                      stroke-linejoin="round"
                                      stroke-width="2"
                                      d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                                    />
                                  </svg>
                                  <p className="pt-1 text-sm tracking-wider text-gray-400 group-hover:text-gray-600">
                                    Attach a file
                                  </p>
                                </div>
                                <input
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
                    <button
                      // disabled={!selectImage}
                      className="px-12 py-3 text-lg text-white border-0 bg-royal-blue focus:outline-none hover:bg-indigo-600"
                    >
                      img-upload
                    </button>
                    <br /> <br />
                    <input
                      className="px-12 py-3 text-lg text-white border-0 bg-royal-blue focus:outline-none hover:bg-indigo-600"
                      type="submit"
                    />
                    <button type="submit">Update</button>
                  </div>
                </form>
                {/* <form
                  onSubmit={handleSubmit(submitHandler)}
                >
                  <List>
                    <ListItem>
                      <Controller
                        name="name"
                        control={control}
                        defaultValue=""
                        rules={{
                          required: true,
                        }}
                        render={({ field }) => (
                          <TextField
                            variant="outlined"
                            fullWidth
                            id="name"
                            label="Name"
                            error={Boolean(errors.name)}
                            helperText={errors.name ? 'Name is required' : ''}
                            {...field}
                          ></TextField>
                        )}
                      ></Controller>
                    </ListItem>
                    <ListItem>
                      <Controller
                        name="slug"
                        control={control}
                        defaultValue=""
                        rules={{
                          required: true,
                        }}
                        render={({ field }) => (
                          <TextField
                            variant="outlined"
                            fullWidth
                            id="slug"
                            label="Slug"
                            error={Boolean(errors.slug)}
                            helperText={errors.slug ? 'Slug is required' : ''}
                            {...field}
                          ></TextField>
                        )}
                      ></Controller>
                    </ListItem>
                    <ListItem>
                      <Controller
                        name="price"
                        control={control}
                        defaultValue=""
                        rules={{
                          required: true,
                        }}
                        render={({ field }) => (
                          <TextField
                            variant="outlined"
                            fullWidth
                            id="price"
                            label="Price"
                            error={Boolean(errors.price)}
                            helperText={errors.price ? 'Price is required' : ''}
                            {...field}
                          ></TextField>
                        )}
                      ></Controller>
                    </ListItem>
                    <ListItem>
                      <Controller
                        name="image"
                        control={control}
                        defaultValue=""
                        rules={{
                          required: true,
                        }}
                        render={({ field }) => (
                          <TextField
                            variant="outlined"
                            fullWidth
                            id="image"
                            label="Image"
                            error={Boolean(errors.image)}
                            helperText={errors.image ? 'Image is required' : ''}
                            {...field}
                          ></TextField>
                        )}
                      ></Controller>
                    </ListItem>
                    <ListItem>
                      <Controller
                        name="category"
                        control={control}
                        defaultValue=""
                        rules={{
                          required: true,
                        }}
                        render={({ field }) => (
                          <TextField
                            variant="outlined"
                            fullWidth
                            id="category"
                            label="Category"
                            error={Boolean(errors.category)}
                            helperText={
                              errors.category ? 'Category is required' : ''
                            }
                            {...field}
                          ></TextField>
                        )}
                      ></Controller>
                    </ListItem>
                    <ListItem>
                      <Controller
                        name="brand"
                        control={control}
                        defaultValue=""
                        rules={{
                          required: true,
                        }}
                        render={({ field }) => (
                          <TextField
                            variant="outlined"
                            fullWidth
                            id="brand"
                            label="Brand"
                            error={Boolean(errors.brand)}
                            helperText={errors.brand ? 'Brand is required' : ''}
                            {...field}
                          ></TextField>
                        )}
                      ></Controller>
                    </ListItem>
                    <ListItem>
                      <Controller
                        name="countInStock"
                        control={control}
                        defaultValue=""
                        rules={{
                          required: true,
                        }}
                        render={({ field }) => (
                          <TextField
                            variant="outlined"
                            fullWidth
                            id="countInStock"
                            label="Count in stock"
                            error={Boolean(errors.countInStock)}
                            helperText={
                              errors.countInStock
                                ? 'Count in stock is required'
                                : ''
                            }
                            {...field}
                          ></TextField>
                        )}
                      ></Controller>
                    </ListItem>
                    <ListItem>
                      <Controller
                        name="description"
                        control={control}
                        defaultValue=""
                        rules={{
                          required: true,
                        }}
                        render={({ field }) => (
                          <TextField
                            variant="outlined"
                            fullWidth
                            multiline
                            id="description"
                            label="Description"
                            error={Boolean(errors.description)}
                            helperText={
                              errors.description
                                ? 'Description is required'
                                : ''
                            }
                            {...field}
                          ></TextField>
                        )}
                      ></Controller>
                    </ListItem>

                    <ListItem>
                      <Button
                        variant="contained"
                        type="submit"
                        fullWidth
                        color="primary"
                      >
                        Update
                      </Button>
                    </ListItem>
                  </List>
                </form> */}
              </div>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export async function getServerSideProps({ params }) {
  return {
    props: { params },
  };
}

export default dynamic(() => Promise.resolve(ProductEdit), { ssr: false });
