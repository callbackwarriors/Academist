import img from "assets/images/cycle.png";
import Image from "next/image";
import { useState } from "react";
import { FaFacebook } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import {useRouter} from 'next/router'

// export default function Login ({evt}:any){
//    console.log('evt',evt);
// }

// const router =useRouter();


// export async function getServerSideProps(){
//   const res =await fetch(`localhost:5000/api/auth/register`)
//   const events = await res.json()

//  return {
//   props:{
//     evt:event [0]
//   }
// }

// }



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
      <div className="bg-yellow-100 overflow-x-hidden lg:overflow-x-auto lg:overflow-hidden flex items-center justify-center py-40">
        <div className="login-container w-full  lg:w-4/5 lg:bg-white lg:h-screen lg:border border-gray-300 rounded-lg flex flex-wrap lg:flex-nowrap flex-col lg:flex-row justify-between group">
          <div className="w-full lg:w-1/2 h-28 lg:h-full mt-32 lg:mt-0 lg:bg-theme-yellow-dark flex relative order-2 lg:order-1">
            <div className="text-center hidden lg:flex items-center justify-start h-full w-full select-none">
              <span className="transform block whitespace-nowrap h-full -rotate-90 text-[55px] 2xl:text-[70px] font-black uppercase text-yellow-300 opacity-0 transition-all group-hover:opacity-100 ml-10 2xl:ml-12 group-hover:-ml-20 2xl:group-hover:ml-26 lg:group-hover:ml-20 duration-1000 lg:duration-700 ease-in-out">
                Academist
              </span>
            </div>

            <div className="product absolute right-0 bottom-0 flex items-center lg:justify-center w-full opacity-50 lg:opacity-100">
              <Image
                src={img}
                alt="product"
                className="-mb-5 lg:mb-0 -ml-12 lg:ml-0 product h-[500px] xl:h-[700px] 2xl:h-[900px] w-auto object-cover transform group-hover:translate-x-26 2xl:group-hover:translate-x-48 transition-all duration-1000 lg:duration-700 ease-in-out"
              />

              <div className="shadow w-full h-5 bg-black bg-opacity-25 filter blur absolute bottom-0 lg:bottom-14 left-0 lg:left-24 rounded-full transform skew-x-10"></div>
            </div>

            <div className="hidden lg:block w-1/3 bg-white ml-auto"></div>
          </div>

          <div className="w-full lg:w-1/2 order-1 lg:order-2">
            <div className="form-wrapper flex items-center lg:h-full px-10 relative z-10 pt-16 lg:pt-0">
              <div className="w-full space-y-2">
                <div className="form-caption flex items-end justify-center text-center space-x-3 mb-20">
                  <span className="text-3xl font-semibold text-red-400 ">
                    {newUser ? "Create an account" : "Login"}
                  </span>
                </div>

                <form >
                  {newUser && (
                    <div className="form-element">
                      <label className="space-y-0.5 w-full lg:w-4/5 block mx-auto">
                        <span className="block text-lg text-gray-800 tracking-wide">
                          Name
                        </span>
                        <span className="block">
                          <input
                            type="text"
                            className="bg-yellow-100 lg:bg-white border lg:border-2 border-gray-400 lg:border-gray-200 w-full p-3 focus:outline-none active:outline-none focus:border-gray-400 active:border-gray-400"
                          />
                        </span>
                      </label>
                    </div>
                  )}
                  <div className="form-element">
                    <label className="space-y-0.5 w-full lg:w-4/5 block mx-auto">
                      <span className="block text-lg text-gray-800 tracking-wide">
                        Email
                      </span>
                      <span className="block">
                        <input 
                          type="text"
                          className="bg-yellow-100 lg:bg-white border lg:border-2 border-gray-400 lg:border-gray-200 w-full p-3 focus:outline-none active:outline-none focus:border-gray-400 active:border-gray-400"
                        />
                      </span>
                    </label>
                  </div>

                  <div className="form-element">
                    <label className="space-y-0.5 w-full lg:w-4/5 block mx-auto">
                      <span className="block text-lg text-gray-800 tracking-wide">
                        Password
                      </span>
                      <span className="block">
                        <input 
                          type="password"
                          className="bg-yellow-100 lg:bg-white border lg:border-2 border-gray-400 lg:border-gray-200 w-full p-3 focus:outline-none active:outline-none focus:border-gray-400 active:border-gray-400"
                        />
                      </span>
                    </label>
                  </div>

                  {newUser && (
                    <div className="form-element">
                      <label className="space-y-2 w-full lg:w-4/5 block mx-auto">
                        <span className="block text-lg text-gray-800 tracking-wide">
                          Confirm Password
                        </span>
                        <span className="block">
                          <input 
                            type="password"
                            className="bg-yellow-100 lg:bg-white border lg:border-2 border-gray-400 lg:border-gray-200 w-full p-3 focus:outline-none active:outline-none focus:border-gray-400 active:border-gray-400"
                          />
                        </span>
                      </label>
                    </div>
                  )}

                  <div className="form-element">
                    <div className="w-full lg:w-4/5 block mx-auto flex items-center justify-between">
                      <label className="block text-gray-800 tracking-wide flex items-center space-x-2 select-none">
                        <input type="checkbox" name="" id="" />
                        <span className="block text-gray-800 tracking-wide">
                          Remember me
                        </span>
                      </label>
                      <a
                        href="#"
                        className="block text-gray-800 tracking-wide inline-block border-b border-gray-300"
                      >
                        Forgot Password?
                      </a>
                    </div>
                  </div>

                  <div className="form-element">
                    <span className="w-full lg:w-4/5 block mx-auto ">
                      <input
                        type="submit"
                        className="cursor-pointer border-2 border-yellow-200 w-full p-3 bg-yellow-200 focus:outline-none active:outline-none focus:bg-theme-yellow active:bg-theme-yellow hover:bg-theme-yellow transition-all"
                        value={newUser ? "Create an Account" : "Login"}
                      />
                    </span>
                  </div>
                </form>
                {newUser ? (
                  <p className="d-block text-center">
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
                  <p className="d-block text-center">
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
                <p className="d-block text-center">or</p>
                <div className="flex flex-col justify-center">
                <button  className="flex w-full lg:w-4/5 mx-auto py-3 text-white bg-indigo-500 border-0 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                  <FcGoogle className="mt-1.5 mr-1 " />Continue with Google
                </button> <br />
                <button  className="flex w-full lg:w-4/5 md:mx-auto py-3 text-white bg-indigo-500 border-0 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
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
