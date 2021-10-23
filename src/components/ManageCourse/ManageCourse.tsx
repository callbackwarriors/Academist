import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { AiFillEye } from 'react-icons/ai';
import { FiEdit } from 'react-icons/fi';
import { RiDeleteBin7Line } from 'react-icons/ri';
import { ICourses } from 'type';

interface IProp {
  course: ICourses;
}

const ManageCourse = ({ course }: IProp) => {
  const { title, img, _id } = course;
  console.log(_id);
  

  return (
    <div className="single__course">
      <div className="single__course__image">
        <Image height="80" width="80" src={img} />
        <h5 className="px-2 lg:px-4">{title}</h5>
      </div>
      <div className="flex-auto" >
        <button className="px-4 py-2 text-white bg-indigo-600 border-0 rounded cursor-pointer focus:outline-none hover:bg-aquamarine-800"><AiFillEye className="text-2xl" /></button>
        <Link href={`/admin/course/${_id}`}>
          <a>
            <button className="px-4 py-2 mx-4 text-white bg-indigo-600 border-0 rounded cursor-pointer focus:outline-none hover:bg-aquamarine-800">
              <FiEdit className="text-2xl" />
            </button>
          </a>
        </Link>
        <button className="px-4 py-2 text-white bg-indigo-600 border-0 rounded cursor-pointer focus:outline-none hover:bg-aquamarine-800"><RiDeleteBin7Line className="text-2xl" /></button>
      </div>
    </div>
  );
};

export default ManageCourse;

// import axios from "axios";
// import Image from "next/image";
// import Link from "next/link";
// import React, { useEffect, useReducer, useState } from "react";
// import { AiFillEye } from "react-icons/ai";
// import { FiEdit } from "react-icons/fi";
// import { RiDeleteBin7Line } from "react-icons/ri";
// import { useRouter } from "next/router";

// function reducer(state, action) {
//   switch (action.type) {
//     case "DELETE_REQUEST":
//       return { ...state, loadingDelete: true };
//     case "DELETE_SUCCESS":
//       return { ...state, loadingDelete: false, successDelete: true };
//     case "DELETE_FAIL":
//       return { ...state, loadingDelete: false };
//     case "DELETE_RESET":
//       return { ...state, loadingDelete: false, successDelete: false };
//     default:
//       state;
//   }
// }

// const ManageCourse = ({ course }) => {
//   const { title, img, _id } = course;
// const router = useRouter();
//   const [user, setUser] = useState();

//   useEffect(() => {
//     const value = localStorage.getItem("userInfo");
//     const user = !!value ? JSON.parse(value) : undefined;
//     setUser(user);
//   }, []);

//   const [
//     { loading, error, products, loadingCreate, successDelete, loadingDelete },
//     dispatch,
//   ] = useReducer(reducer, {
//     loading: true,
//     products: [],
//     error: "",
//   });

//   useEffect(() => {
//     // if (!user) {
//     //   router.push("/login");
//     // }
//     const fetchData = async () => {
//       try {
//         dispatch({ type: "FETCH_REQUEST" });
//         const { data } = await axios.get(`/api/admin/products`, {
//           headers: { authorization: `Bearer ${user.token}` },
//         });
//         dispatch({ type: "FETCH_SUCCESS", payload: data });
//       } catch (err) {
//         dispatch({ type: "FETCH_FAIL", payload: getError(err) });
//       }
//     };
//     if (successDelete) {
//       dispatch({ type: "DELETE_RESET" });
//     } else {
//       fetchData();
//     }
//   }, [successDelete]);

//   const deleteHandler = async (productId) => {
//     if (!window.confirm("Are you sure?")) {
//       return;
//     }
//     try {
//       dispatch({ type: "DELETE_REQUEST" });
//       await axios.delete(`/api/admin/products/${productId}`, {
//         headers: { authorization: `Bearer ${user.token}` },
//       });
//       dispatch({ type: "DELETE_SUCCESS" });
//       alert("Product deleted successfully");
//       // enqueueSnackbar("Product deleted successfully", { variant: "success" });
//     } catch (err) {
//       dispatch({ type: "DELETE_FAIL" });
//       console.log(err);

//       // enqueueSnackbar(getError(err), { variant: "error" });
//     }
//   };

//   return (
//     <div className="single__course">
//       <div className="single__course__image">
//         <Image height="80" width="80" src={img} />
//         <h5 className="px-2 lg:px-4">{title}</h5>
//       </div>
//       <div className="flex-auto">
//         <button className="px-4 py-2 text-white bg-indigo-600 border-0 rounded cursor-pointer focus:outline-none hover:bg-aquamarine-800">
//           <AiFillEye className="text-2xl" />
//         </button>
//         <Link href={`/admin/course/${_id}`}>
//           <a>
//             <button className="px-4 py-2 mx-4 text-white bg-indigo-600 border-0 rounded cursor-pointer focus:outline-none hover:bg-aquamarine-800">
//               <FiEdit className="text-2xl" />
//             </button>
//           </a>
//         </Link>
//         <button className="px-4 py-2 text-white bg-indigo-600 border-0 rounded cursor-pointer focus:outline-none hover:bg-aquamarine-800">
//           <RiDeleteBin7Line
//             onClick={() => deleteHandler(_id)}
//             className="text-2xl"
//           />
//         </button>
//       </div>
//     </div>
//   );
// };

// export default ManageCourse;
