import axios from 'axios';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useContext, useEffect, useReducer } from 'react';
import { AiFillEye } from 'react-icons/ai';
import { FiEdit } from 'react-icons/fi';
import { RiDeleteBin7Line } from 'react-icons/ri';
import { ICourses } from 'type';
import { Store } from 'utils/Store';

interface IProp {
  course: ICourses;
}

function reducer(state, action) {
  switch (action.type) {
    case "FETCH_REQUEST":
      return { ...state, loading: true, error: "" };
    case "FETCH_SUCCESS":
      return { ...state, loading: false, products: action.payload, error: "" };
    case "FETCH_FAIL":
      return { ...state, loading: false, error: action.payload };
    case "CREATE_REQUEST":
      return { ...state, loadingCreate: true };
    case "CREATE_SUCCESS":
      return { ...state, loadingCreate: false };
    case "CREATE_FAIL":
      return { ...state, loadingCreate: false };
    case "DELETE_REQUEST":
      return { ...state, loadingDelete: true };
    case "DELETE_SUCCESS":
      return { ...state, loadingDelete: false, successDelete: true };
    case "DELETE_FAIL":
      return { ...state, loadingDelete: false };
    case "DELETE_RESET":
      return { ...state, loadingDelete: false, successDelete: false };
    default:
      state;
  }
}

const ManageCourse = ({ course }: IProp) => {
  const { title, img, _id } = course;
  console.log(_id);
  const { state } = useContext(Store);
  const router = useRouter();
  const { userInfo } = state;

  const [
    { loading, error, products, loadingCreate, successDelete, loadingDelete },
    dispatch,
  ] = useReducer(reducer, {
    loading: true,
    products: [],
    error: "",
  });


  useEffect(() => {
    if (!userInfo) {
      router.push("/login");
    }
    const fetchData = async () => {
      try {
        dispatch({ type: "FETCH_REQUEST" });
        const { data } = await axios.get(`/api/admin/courses`, {
          headers: { authorization: `Bearer ${userInfo.token}` },
        });
        dispatch({ type: "FETCH_SUCCESS", payload: data });
      } catch (err) {
        console.log(err);

      }
    };
    if (successDelete) {
      dispatch({ type: "DELETE_RESET" });
    } else {
      fetchData();
    }
  }, [successDelete]);

  const deleteHandler = async (productId: number) => {
    console.log('productId', productId);
    if (!window.confirm("Are you sure?")) {
      return;
    }
    try {
      dispatch({ type: "DELETE_REQUEST" });
      await axios.delete(`/api/admin/courses/${productId}`, {
        headers: { authorization: `Bearer ${userInfo.token}` },
      });
      dispatch({ type: "DELETE_SUCCESS" });
      alert("Product deleted successfully");
    } catch (err) {
      dispatch({ type: "DELETE_FAIL" });
      console.log(err);

    }
  };

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
        <button onClick={() => deleteHandler(_id)} className="px-4 py-2 text-white bg-indigo-600 border-0 rounded cursor-pointer focus:outline-none hover:bg-aquamarine-800"><RiDeleteBin7Line className="text-2xl" /></button>
      </div>
    </div>
  );
};

export default ManageCourse;

