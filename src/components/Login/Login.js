import img from "assets/images/cycle.png";
import axios from "axios";
import Cookies from "js-cookie";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useContext, useEffect } from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { Store } from "utils/Store";

const Login = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();
  const router = useRouter();
  const { redirect } = router.query;
  const { state, dispatch } = useContext(Store);
  const { userInfo } = state;
  useEffect(() => {
    if (userInfo) {
      router.push("/");
    }
  }, []);

  const submitHandler = async ({ email, password }) => {
    try {
      const { data } = await axios.post("/api/users/login", {
        email,
        password,
      });

      dispatch({ type: "USER_LOGIN", payload: data });
      Cookies.set("userInfo", JSON.stringify(data));
      router.push(redirect || "/");
    } catch (err) {
      Swal.fire({
        icon: "error",
        text: err.message,
      });
    }
  };

  return (
    <div>
      <div className="flex items-center justify-center overflow-x-hidden bg-chateau-green-50 lg:overflow-x-auto lg:overflow-hidden">
        <div className="flex flex-col flex-wrap justify-between w-full border-gray-300 login-container lg:w-4/5 lg:bg-white lg:h-screen lg:border lg:flex-nowrap lg:flex-row group">
          <div className="relative flex order-2 w-full mt-32 lg:w-1/2 h-28 lg:h-full lg:mt-0 lg:bg-royal-blue lg:order-1">
            <div className="items-center justify-start hidden w-full h-full text-center select-none lg:flex">
              <span className="transform block whitespace-nowrap h-full -rotate-90 text-[55px] 2xl:text-[70px] font-black uppercase text-yellow-300 opacity-0 transition-all group-hover:opacity-100 ml-10 2xl:ml-12 group-hover:-ml-20 2xl:group-hover:ml-26 lg:group-hover:ml-20 duration-1000 lg:duration-700 ease-in-out">
                Academist
              </span>
            </div>
            <div className="absolute bottom-0 right-0 flex items-center w-full opacity-50 product lg:justify-center lg:opacity-100">
              <Image
                src={img}
                alt="product"
                className="-mb-5 lg:mb-0 -ml-12 lg:ml-0 product h-[500px] xl:h-[700px] 2xl:h-[900px] w-auto object-cover transform group-hover:translate-x-26 2xl:group-hover:translate-x-48 transition-all duration-1000 lg:duration-700 ease-in-out"
              />
              <div className="absolute bottom-0 left-0 w-full h-5 transform bg-black bg-opacity-25 rounded-full shadow filter blur lg:bottom-14 lg:left-24 skew-x-10"></div>
            </div>
            <div className="hidden w-1/3 ml-auto bg-white lg:block"></div>
          </div>
          <div className="order-1 w-full lg:w-1/2 lg:order-2">
            <div className="relative flex items-center px-10 pt-16 form-wrapper lg:h-full lg:pt-0">
              <div className="w-full space-y-2">
                <div className="flex items-end justify-center mb-8 space-x-3 text-center form-caption">
                  <span className="text-3xl font-semibold text-royal-blue center">
                    Log in now
                  </span>
                </div>
                <form onSubmit={handleSubmit(submitHandler)}>
                  <div className="form-element">
                    <label className="space-y-0.5 w-full lg:w-4/5 block mx-auto">
                      <span className="block text-lg tracking-wide text-gray-800">
                        Email
                      </span>
                      <span className="block">
                        <input
                          type="email"
                          name="Email"
                          {...register("email", {
                            required: {
                              value: true,
                              message: "You most enter email address",
                            },
                            minLength: {
                              value: 8,
                              message: "This is not long enough to be an email",
                            },
                            maxLength: {
                              value: 120,
                              message: "This is too long",
                            },
                            pattern: {
                              value: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
                              message: "invalid email address",
                            },
                          })}
                          className={`block w-full px-4 py-3 placeholder-gray-500 border-gray-300 rounded-md shadow focus:ring-blue-500 focus:border-blue-500 focus:outline-none focus:ring-2
           ${errors.email ? "ring-2 ring-red-500" : null}`}
                          placeholder="Email"
                        />
                        <span className="py-2 text-sm text-red-400">
                          {errors?.email?.message}
                        </span>
                      </span>
                    </label>
                  </div>
                  <div className="form-element">
                    <label className="space-y-0.5 w-full lg:w-4/5 block mx-auto">
                      <span className="block text-lg tracking-wide text-gray-800">
                        Password
                      </span>
                      <span className="block">
                        <input
                          type="password"
                          name="password"
                          // eslint-disable-next-line react/jsx-props-no-spreading
                          {...register("password", {
                            required: {
                              value: true,
                              message: "You most enter password",
                            },
                            minLength: {
                              value: 6,
                              message: "Password lenth is more then 5",
                            },
                          })}
                          className={`block w-full px-4 py-3 placeholder-gray-500 border-gray-300 rounded-md shadow focus:ring-blue-500 focus:border-blue-500 focus:outline-none focus:ring-2
               ${errors.password ? "ring-2 ring-red-500" : null}`}
                          placeholder="password"
                        />
                        <span className="py-2 text-sm text-red-400">
                          {errors?.password?.message}
                        </span>
                      </span>
                    </label>
                  </div>
                  <div className="form-element">
                    <div className="flex items-center justify-between w-full py-2 mx-auto lg:w-4/5">
                      <label className="flex items-center space-x-2 tracking-wide text-gray-800 select-none">
                        <input type="checkbox" name="" id="" />
                        <span className="block tracking-wide text-gray-800">
                          Remember me
                        </span>
                      </label>
                      <Link
                        href="#"
                        className="block tracking-wide text-gray-800 border-b border-gray-300"
                      >
                        Forgot Password?
                      </Link>
                    </div>
                  </div>

                  <div className="form-element">
                    <span className="block w-full mx-auto lg:w-full ">
                      <input
                        type="submit"
                        className="flex w-full px-6 py-3 mx-auto text-lg text-white bg-indigo-600 border-0 rounded cursor-pointer lg:w-4/5 focus:outline-none hover:bg-aquamarine-800"
                        value="Log in now"
                      />
                    </span>
                  </div>
                </form>
                <p className="text-center d-block">
                  Don't have an account?{" "}
                  <Link href="/register">
                    <a className="text-royal-blue">Create an account</a>
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
