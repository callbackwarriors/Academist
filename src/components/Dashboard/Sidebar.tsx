import Logo from "assets/images/academist-logo.svg";
import Cookies from "js-cookie";
import { useRouter } from 'next/dist/client/router';
import Image from 'next/image';
import Link from 'next/link';
import React, { useContext, useState } from 'react';
import { AiOutlineFundProjectionScreen, AiOutlineUserAdd } from 'react-icons/ai';
import { BiHome, BiImageAdd, BiLogOutCircle } from 'react-icons/bi';
import { BsBook, BsFillInboxesFill } from 'react-icons/bs';
import { FaDiscourse } from 'react-icons/fa';
import { GiHamburgerMenu, GiTeacher } from 'react-icons/gi';
import { GoReport } from 'react-icons/go';
import { Navigation } from 'react-minimal-side-navigation';
import 'react-minimal-side-navigation/lib/ReactMinimalSideNavigation.css';
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
          className={`fixed inset-0 z-20 block transition-opacity bg-black opacity-50 lg:hidden ${isSidebarOpen ? "block" : "hidden"
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
          className={`fixed inset-y-0 left-0 z-30 w-64 overflow-y-auto transition duration-300 ease-out transform translate-x-0 bg-white border-r-2 lg:translate-x-0 lg:static lg:inset-0 ${isSidebarOpen ? "ease-out translate-x-0" : "ease-in -translate-x-full"
            }`}
        >
          <div className="flex items-center justify-center px-3 py-6 text-center">

            <Link href="/">
              <a className="ml-3 text-xl">
                <Image src={Logo} />
              </a>
            </Link>

          </div>
          <Navigation
            activeItemId={router.pathname}
            onSelect={({ itemId }) => {
              router.push({ pathname: itemId })
            }}
            items={[
              {
                title: 'Dashboard',
                itemId: '/dashboard',
                elemBefore: () => <BsFillInboxesFill name="inbox" />,
              },
              {
                title: 'Users',
                itemId: '',
                elemBefore: () => <AiOutlineUserAdd name="users" />,
                subNav: [
                  {
                    title: 'Admin',
                    itemId: '/',
                    elemBefore: () => <AiOutlineFundProjectionScreen name="project" />,
                  },
                  {
                    title: 'Teacher',
                    itemId: '/',
                    elemBefore: () => <GiTeacher name="teacher" />,
                  },
                  {
                    title: 'Student',
                    itemId: '/',
                    elemBefore: () => <BsBook name="book" />,
                  },
                ],
              },

            ]}
          />
          {userInfo?.instructor && (
            <Navigation
              activeItemId={router.pathname}
              onSelect={({ itemId }) => {
                router.push({ pathname: itemId })
              }}
              items={[
                {
                  title: 'Courses',
                  itemId: '',
                  elemBefore: () => <FaDiscourse name="courses" />,
                  subNav: [
                    {
                      title: 'Manage courses',
                      itemId: '/dashboard/courses/managecourses',
                      elemBefore: () => <AiOutlineFundProjectionScreen name="project" />,
                    },
                    {
                      title: 'Add New Course',
                      itemId: '/dashboard/courses/addcourse',
                      elemBefore: () => <BiImageAdd name="teacher" />,
                    },
                    {
                      title: 'Course Catagory',
                      itemId: '/dashboard/courses/addcategories',
                      elemBefore: () => <BsBook name="book" />,
                    },
                    {
                      title: 'Coupons',
                      itemId: '',
                      elemBefore: () => <BsBook name="book" />,
                    },
                  ],
                },
              ]}
            />
          )}

          <Navigation
            activeItemId={router.pathname}
            onSelect={({ itemId }) => {
              router.push({ pathname: itemId })
            }}
            items={[
              {
                title: 'Report',
                itemId: '',
                elemBefore: () => <GoReport name="inbox" />,
                subNav: [
                  {
                    title: 'Admin Revenue',
                    itemId: '/dashboard/report/admin-revenue'
                  },
                  {
                    title: 'Instructor Revenue',
                    itemId: '/dashboard/report/instructor-revenue'
                  },

                  {
                    title: 'View All Order',
                    itemId: '/dashboard/report/viewAllOrder'
                  }
                ]
              }

            ]}
          />

          {userInfo?.isAdmin && (
            <Navigation
              activeItemId={router.pathname}
              onSelect={({ itemId }) => {
                router.push({ pathname: itemId })
              }}
              items={[
                {
                  title: 'Admins',
                  itemId: '',
                  elemBefore: () => <FaDiscourse name="courses" />,
                  subNav: [
                    {
                      title: 'Admin Manage',
                      itemId: '/dashboard/admin/manageadmin',
                      elemBefore: () => <AiOutlineFundProjectionScreen name="project" />,
                    },
                    {
                      title: 'Add Admin',
                      itemId: '/dashboard/admin/addadmin',
                      elemBefore: () => <BiImageAdd name="teacher" />,
                    }
                  ],
                },
              ]}
            />
          )}

          {/* Log out handler sidebar admin */}

<div className="logout__wrapper justify-center mt-20 border-t-2 pt-20">

<Link href="/">
<button className="flex mb-4 mx-auto bg-royal-blue hover:to-gray-900 text-white py-2 px-8 rounded">
                  <BiHome
                      className="w-5 h-5 mr-2 text-violet-400"
                      aria-hidden="true"
                    />
                 Home
                </button>
</Link>

<button className="flex bg-red-600 mx-auto hover:to-gray-900 text-white py-2 px-8 rounded" onClick={logoutClickHandler}>
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