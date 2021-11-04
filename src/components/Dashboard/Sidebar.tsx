import Logo from "assets/images/academist-logo.svg";
import Cookies from "js-cookie";
import { useRouter } from "next/dist/client/router";
import Image from "next/image";
import Link from "next/link";
import React, { useContext, useState } from "react";
import {
  AiOutlineFundProjectionScreen
} from "react-icons/ai";
import { BiHome, BiImageAdd, BiLogOutCircle } from "react-icons/bi";
import { BsBook, BsCurrencyDollar, BsFillInboxesFill } from "react-icons/bs";
import { FaDiscourse } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { GoReport } from "react-icons/go";
import { Navigation } from "react-minimal-side-navigation";
import "react-minimal-side-navigation/lib/ReactMinimalSideNavigation.css";
import { Store } from "utils/Store";

const Sidebar = () => {
  const router = useRouter();
  const { state, dispatch } = useContext(Store);
  const { userInfo } = state;
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const logoutClickHandler = () => {
    dispatch({ type: "USER_LOGOUT" });
    Cookies.remove("cartItems");
    Cookies.remove("userInfo");
    router.push("/");
    Cookies.remove();
  };
  return (
    <>
      <React.Fragment>
        <div
          onClick={() => setIsSidebarOpen(false)}
          className={`fixed inset-0 z-20 block transition-opacity bg-black opacity-50 lg:hidden ${
            isSidebarOpen ? "block" : "hidden"
          }`}
        />
        <div className="absolute inline-block">
          <button
            className="mt-6 ml-6 lg:w-0 lg:h-0 btn-menu lg:hidden"
            onClick={(): void => setIsSidebarOpen(true)}
            type="button"
          >
            <GiHamburgerMenu name="burger" className="w-8 h-8" />
          </button>
        </div>
        {/* Sidebar */}
        <div
          className={`fixed inset-y-0 left-0 z-30 w-64 overflow-y-auto transition duration-300 ease-out transform translate-x-0 bg-white border-r-2 lg:translate-x-0 lg:static lg:inset-0 ${
            isSidebarOpen
              ? "ease-out translate-x-0"
              : "ease-in -translate-x-full"
          }`}
        >
          <div className="flex items-center justify-center px-3 py-6 text-center">
            <Link href="/">
              <a className="ml-3 text-xl">
                <Image src={Logo} />
              </a>
            </Link>
          </div>
          
{userInfo?.isAdmin && (

  <>
<Navigation
            activeItemId={router.pathname}
            onSelect={({ itemId }) => {
              router.push({ pathname: itemId });
            }}
            items={[
              {
                title: "Dashboard",
                itemId: "/dashboard",
                elemBefore: () => <BsFillInboxesFill name="inbox" />,
              },


              {
                title: "Users",
                itemId: "",
                elemBefore: () => <FaDiscourse name="courses" />,
                subNav: [
                  {
                    title: "Manage Users",
                    itemId: "/dashboard/admin/manageadmin",
                    elemBefore: () => (
                      <AiOutlineFundProjectionScreen name="project" />
                    ),
                  },

                  {
                    title: "Add Admin",
                    itemId: "/dashboard/admin/addadmin",
                    elemBefore: () => <BiImageAdd name="teacher" />,
                  },
                  {
                    title: "Report",
                    itemId: "",
                    elemBefore: () => <GoReport name="inbox" />,
                    subNav: [
                      {
                        title: "Your Revenue",
                        itemId: "/dashboard/report/admin-revenue",
                      },

                      {
                        title: "View All Order",
                        itemId: "/dashboard/report/viewAllOrder",
                      },
                    ],
                  },
                ],
              },
            ]}
          />

<Navigation
              activeItemId={router.pathname}
              onSelect={({ itemId }) => {
                router.push({ pathname: itemId });
              }}
              items={[
                {
                  title: "Courses",
                  itemId: "",
                  elemBefore: () => <FaDiscourse name="courses" />,
                  subNav: [
                    {
                      title: "Manage courses",
                      itemId: "/dashboard/courses/managecourses",
                      elemBefore: () => (
                        <AiOutlineFundProjectionScreen name="project" />
                      ),
                    },

                    {
                      title: "Course Catagory",
                      itemId: "/dashboard/courses/addcategories",
                      elemBefore: () => <BsBook name="book" />,
                    },

                  ],
                },
              ]}
            />


<Navigation
            activeItemId={router.pathname}
            onSelect={({ itemId }) => {
              router.push({ pathname: itemId });
            }}
            items={[
              {
                title: "Report",
                itemId: "",
                elemBefore: () => <GoReport name="inbox" />,
                subNav: [
                  {
                    title: "Site Revenue",
                    itemId: "/dashboard/report/admin-revenue",
                  },

                  {
                    title: "View All Order",
                    itemId: "/dashboard/report/viewAllOrder",
                  },
                ],
              },
            ]}
          />




</>
)}


          {userInfo?.instructor && (
            <Navigation
              activeItemId={router.pathname}
              onSelect={({ itemId }) => {
                router.push({ pathname: itemId });
              }}
              items={[
                {
                  title: "Dashboard",
                  itemId: "/dashboard",
                  elemBefore: () => <BsFillInboxesFill name="inbox" />,
                },
                {
                  title: "Manage Courses",
                  itemId: "/dashboard/courses/managecourses",
                  elemBefore: () => <FaDiscourse name="courses" />,
                },

                {
                  title: "Add new course",
                  itemId: "/dashboard/courses/addcourse",
                  elemBefore: () => <BiImageAdd name="courses" />,
                },


                {
                  title: "My Revenue",
                  itemId: "/dashboard/report/instructor-revenue",
                  elemBefore: () => <BsCurrencyDollar name="courses" />,
                  
                },

              ]}
            />
          )}


          <div className="justify-center pt-20 mt-20 border-t-2 logout__wrapper">
            <Link href="/">
              <button className="flex px-8 py-2 mx-auto mb-4 text-white rounded bg-royal-blue hover:to-gray-900">
                <BiHome
                  className="w-5 h-5 mr-2 text-violet-400"
                  aria-hidden="true"
                />
                Home
              </button>
            </Link>

            <button
              className="flex px-8 py-2 mx-auto text-white bg-red-600 rounded hover:to-gray-900"
              onClick={logoutClickHandler}
            >
              <BiLogOutCircle
                className="w-5 h-5 mr-2 text-violet-400"
                aria-hidden="true"
              />
              Log out
            </button>
          </div>
        </div>
      </React.Fragment>
    </>
  );
};

export default Sidebar;
