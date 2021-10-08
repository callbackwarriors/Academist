import img from "assets/images/cycle.png";
import Image from "next/image";
import { useState } from "react";
import { FaFacebook } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

const Login = () => {
  const [newUser, setNewUser] = useState(false);
  const [user, setUser] = useState({
    isLoggedIn: false,
    name: "",
    email: "",
    photoUrl: "",
    password: "",
    password1: "",
    password2: "",
    error: "",
    emailError: "",
    passError: "",
    success: false,
  });

  return (
    <div>
      <div className="flex items-center justify-center py-40 overflow-x-hidden bg-yellow-100 lg:overflow-x-auto lg:overflow-hidden">
        <div className="flex flex-col flex-wrap justify-between w-full border-gray-300 rounded-lg login-container lg:w-4/5 lg:bg-white lg:h-screen lg:border lg:flex-nowrap lg:flex-row group">
          <div className="relative flex order-2 w-full mt-32 lg:w-1/2 h-28 lg:h-full lg:mt-0 lg:bg-theme-yellow-dark lg:order-1">
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
            <div className="relative z-10 flex items-center px-10 pt-16 form-wrapper lg:h-full lg:pt-0">
              <div className="w-full space-y-2">
                <div className="flex items-end justify-center mb-20 space-x-3 text-center form-caption">
                  <span className="text-3xl font-semibold text-red-400 ">
                    {newUser ? "Create an account" : "Login"}
                  </span>
                </div>

                <form >
                  {newUser && (
                    <div className="form-element">
                      <label className="space-y-0.5 w-full lg:w-4/5 block mx-auto">
                        <span className="block text-lg tracking-wide text-gray-800">
                          Name
                        </span>
                        <span className="block">
                          <input
                            type="text"
                            className="w-full p-3 bg-yellow-100 border border-gray-400 lg:bg-white lg:border-2 lg:border-gray-200 focus:outline-none active:outline-none focus:border-gray-400 active:border-gray-400"
                          />
                        </span>
                      </label>
                    </div>
                  )}
                  <div className="form-element">
                    <label className="space-y-0.5 w-full lg:w-4/5 block mx-auto">
                      <span className="block text-lg tracking-wide text-gray-800">
                        Email
                      </span>
                      <span className="block">
                        <input 
                          type="email"
                          className="w-full p-3 bg-yellow-100 border border-gray-400 lg:bg-white lg:border-2 lg:border-gray-200 focus:outline-none active:outline-none focus:border-gray-400 active:border-gray-400"
                        />
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
                          className="w-full p-3 bg-yellow-100 border border-gray-400 lg:bg-white lg:border-2 lg:border-gray-200 focus:outline-none active:outline-none focus:border-gray-400 active:border-gray-400"
                        />
                      </span>
                    </label>
                  </div>

                  {newUser && (
                    <div className="form-element">
                      <label className="block w-full mx-auto space-y-2 lg:w-4/5">
                        <span className="block text-lg tracking-wide text-gray-800">
                          Confirm Password
                        </span>
                        <span className="block">
                          <input 
                            type="password"
                            className="w-full p-3 bg-yellow-100 border border-gray-400 lg:bg-white lg:border-2 lg:border-gray-200 focus:outline-none active:outline-none focus:border-gray-400 active:border-gray-400"
                          />
                        </span>
                      </label>
                    </div>
                  )}

                  <div className="form-element">
                    <div className="flex items-center justify-between block w-full mx-auto lg:w-4/5">
                      <label className="flex items-center block space-x-2 tracking-wide text-gray-800 select-none">
                        <input type="checkbox" name="" id="" />
                        <span className="block tracking-wide text-gray-800">
                          Remember me
                        </span>
                      </label>
                      <a
                        href="#"
                        className="block inline-block tracking-wide text-gray-800 border-b border-gray-300"
                      >
                        Forgot Password?
                      </a>
                    </div>
                  </div>

                  <div className="form-element">
                    <span className="block w-full mx-auto lg:w-4/5 ">
                      <input
                        type="submit"
                        className="w-full p-3 transition-all bg-yellow-200 border-2 border-yellow-200 cursor-pointer focus:outline-none active:outline-none focus:bg-theme-yellow active:bg-theme-yellow hover:bg-theme-yellow"
                        value={newUser ? "Create an Account" : "Login"}
                      />
                    </span>
                  </div>
                </form>
                {newUser ? (
                  <p className="text-center d-block">
                    <small>
                      Already have an account?{" "}
                      <button
                        onClick={() => {
                          setNewUser(!newUser);
                          const newUserInfo = { ...user };
                          newUserInfo.error = "";
                          setUser(newUserInfo);
                        }}
                        className="mini-btn"
                      >
                        Login
                      </button>
                    </small>
                  </p>
                ) : (
                  <p className="text-center d-block">
                    <small>
                      Don't have an account?{" "}
                      <button
                        onClick={() => {
                          setNewUser(!newUser);
                          const newUserInfo = { ...user };
                          newUserInfo.error = "";
                          setUser(newUserInfo);
                        }}
                        
                      >
                        Create an account
                      </button>
                    </small>
                  </p>
                )}
                <p className="text-center d-block">or</p>
                <div className="flex flex-col justify-center">
                <button  className="flex w-full px-6 py-3 mx-auto text-lg text-white bg-indigo-500 border-0 rounded lg:w-4/5 focus:outline-none hover:bg-indigo-600">
                  <FcGoogle className="mt-1.5 mr-1 " />Continue with Google
                </button> <br />
                <button  className="flex w-full px-6 py-3 text-lg text-white bg-indigo-500 border-0 rounded lg:w-4/5 md:mx-auto focus:outline-none hover:bg-indigo-600">
                  <FaFacebook className="mt-1.5 mr-1 " />
                   Continue with Facebook
                </button>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
