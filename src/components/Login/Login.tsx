import img from "assets/images/cycle.png";
import Image from "next/image";
import { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import firebaseConfig from "./firebase.config";
import { useRouter } from 'next/router'

const Login = () => {
  
  const history = useHistory();
  const location = useLocation();
  let { from } = location.state || { from: { pathname: "/" } };

  const {setLoggedInUser} = useContext(UserContext)



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

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newUser && user.password1 === user.password2) {
      const newUserInfo = { ...user };
      newUserInfo.error = "";
      newUserInfo.password = user.password1;
      setUser(newUserInfo);
    } else if (newUser && user.password1 !== user.password2) {
      const newUserInfo = { ...user };
      newUserInfo.password = "";
      newUserInfo.error = "Password don't match";
      newUserInfo.success = false;
      setUser(newUserInfo);
    } else if (!newUser) {
      const newUserInfo = { ...user };
      newUserInfo.error = "";
      newUserInfo.password = user.password1;
      newUserInfo.success = false;
      setUser(newUserInfo);
    }
    if (!user.email) {
      const newUserInfo = { ...user };
      newUserInfo.error = "Please Enter a valid Email";
      setUser(newUserInfo);
    } else if (!user.password1) {
      const newUserInfo = { ...user };
      newUserInfo.error =
        "Please Enter a valid Password (minimum 5 characters)";
      setUser(newUserInfo);
    }

    if (
      newUser &&
      user.name &&
      user.email &&
      user.password === user.password2
    ) {
      firebase
        .auth()
        .createUserWithEmailAndPassword(user.email, user.password)
        .then((res) => {
          updateUserName(user.name);
          console.log(res);
          const newUserInfo = { ...user };
          newUserInfo.error = "";
          newUserInfo.success = true;
          newUserInfo.name = user.name;
          setUser(newUserInfo);
        })
        .catch((error) => {
          const errorMessage = error.message;
          const newUserInfo = { ...user };
          newUserInfo.success = false;
          newUserInfo.error = errorMessage;
          setUser(newUserInfo);
        });
    }

    if (!newUser && user.email && user.password1) {
      firebase
        .auth()
        .signInWithEmailAndPassword(user.email, user.password1)
        .then((res) => {
          console.log(res);
          const { email, displayName } = res.user;
          const newUserInfo = { ...user };
          newUserInfo.isLoggedIn = true;
          newUserInfo.name = displayName;
          newUserInfo.error = "";
          newUserInfo.success = false;
          setUser(newUserInfo);
          setLoggedInUser({
            email: email,
            name: displayName,
            isLoggedIn: true,
          });
          history.replace(from);
        })
        .catch((error) => {
          console.log(error.message);
          const errorMessage = error.message;
          const newUserInfo = { ...user };
          newUserInfo.error = errorMessage;
          newUserInfo.success = false;
          setUser(newUserInfo);
        });
    }
    console.log(user);
  };

  const updateUserName = (name) => {
    const user = firebase.auth().currentUser;

    user
      .updateProfile({
        displayName: name,
      })
      .then((res) => {
        // Update successful.
      })
      .catch((error) => {
        // An error happened.
      });
  };

  const handleBlur = (e) => {
    const newUserInfo = { ...user };
    newUserInfo.error = "";
    setUser(newUserInfo);
    console.log(e.target.value);
    let isFormValid = true;
    if (e.target.name === "email") {
      isFormValid = /\S+@\S+\.\S+/.test(e.target.value);
      if (isFormValid) {
        const newUserInfo = { ...user };
        newUserInfo.error = "";
        setUser(newUserInfo);
      }
    }
    if (e.target.name === "password1") {
      isFormValid = e.target.value.length > 4;
    }
    if (e.target.name === "password2") {
      isFormValid = e.target.value.length > 4;
    }
    if (isFormValid) {
      const newUserInfo = { ...user };
      newUserInfo[e.target.name] = e.target.value;
      setUser(newUserInfo);
    } else {
      const newUserInfo = { ...user };
      newUserInfo[e.target.name] = "";
      setUser(newUserInfo);
    }
  };

  const handleGooglSignIn = () => {
    const googleProvider = new firebase.auth.GoogleAuthProvider();

    firebase
      .auth()
      .signInWithPopup(googleProvider)
      .then((res) => {
        console.log(res);
        const { displayName, email } = res.user;
        const newUserInfo = { ...user };
        newUserInfo.name = displayName;
        newUserInfo.email = email;
        newUserInfo.isLoggedIn = true;
        setUser(newUserInfo);
        setLoggedInUser({
          email: email,
          name: displayName,
          isLoggedIn: true,
        });
        history.replace(from);
      })
      .catch((error) => {
        const errorMessage = error.message;
        const newUserInfo = { ...user };
        newUserInfo.error = errorMessage;
        setUser(newUserInfo);
      });
  };

  const handleFbSignIn = () => {
    const fbProvider = new firebase.auth.FacebookAuthProvider();
    firebase
      .auth()
      .signInWithPopup(fbProvider)
      .then((res) => {
        const { displayName, email } = res.user;
        console.log(res);
        setUser({
          isLoggedIn: true,
          name: displayName,
          email,
        });
        setLoggedInUser({
          email: email,
          name: displayName,
          isLoggedIn: true,
        });
        history.replace(from);
      })
      .catch((error) => {
        const errorMessage = error.message;
        const newUserInfo = { ...user };
        newUserInfo.error = errorMessage;
        setUser(newUserInfo);
      });
  };


  return (
    <div>
      <div className="bg-yellow-100 overflow-x-hidden lg:overflow-x-auto lg:overflow-hidden flex items-center justify-center lg:h-screen">
        <div className="login-container w-full lg:w-4/5 lg:bg-white h-screen lg:h-screen lg:border border-gray-300 rounded-lg flex flex-wrap lg:flex-nowrap flex-col lg:flex-row justify-between group">
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

                <form action="" onSubmit={handleSubmit} >
                  {newUser && (
                    <div className="form-element">
                      <label className="space-y-0.5 w-full lg:w-4/5 block mx-auto">
                        <span className="block text-lg text-gray-800 tracking-wide">
                          Name
                        </span>
                        <span className="block">
                          <input onBlur={handleBlur}
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
                        <input onBlur={handleBlur}
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
                        <input onBlur={handleBlur}
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
                          <input onBlur={handleBlur}
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
                        className="mini-btn"
                      >
                        Create an account
                      </button>
                    </small>
                  </p>
                )}
                <p className="d-block text-center">or</p>
                <button onClick={handleGooglSignIn} className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                  <FcGoogle />
                  Continue with Google
                </button>
                <br />
                <button onClick={handleFbSignIn} className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                  <FaFacebook />
                   Continue with Facebook
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
