import { useRouter } from 'next/dist/client/router';
import React, { useState } from 'react';
import { AiOutlineFundProjectionScreen, AiOutlineUserAdd } from 'react-icons/ai';
import { BiImageAdd } from 'react-icons/bi';
import { BsBook, BsFillInboxesFill } from 'react-icons/bs';
import { FaDiscourse } from 'react-icons/fa';
import { GiHamburgerMenu, GiTeacher } from 'react-icons/gi';
import { GoReport } from 'react-icons/go';
import { Navigation } from 'react-minimal-side-navigation';
import 'react-minimal-side-navigation/lib/ReactMinimalSideNavigation.css';
const Sidebar = () => {
  const router = useRouter();
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  return (
    <>
      <React.Fragment>
        <div
          onClick={() => setIsSidebarOpen(false)}
          className={`fixed inset-0 z-20 block transition-opacity bg-black opacity-50 lg:hidden ${isSidebarOpen ? "block" : "hidden"
            }`}
        />
        <div>
          <button
            className="p-2 btn-menu lg:hidden"
            onClick={(): void => setIsSidebarOpen(true)}
            type="button"
          >
            <GiHamburgerMenu name="burger" className="w-6 h-6" />
          </button>
        </div>
        {/* Sidebar */}
        <div
          className={`fixed inset-y-0 left-0 z-30 w-64 overflow-y-auto transition duration-300 ease-out transform translate-x-0 bg-white border-r-2 lg:translate-x-0 lg:static lg:inset-0 ${isSidebarOpen ? "ease-out translate-x-0" : "ease-in -translate-x-full"
            }`}
        >
          <div className="flex items-center justify-center py-6 mt-10 text-center">
            <span className="mx-2 text-2xl font-semibold text-black">
              MANAGEMENT
            </span>
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
                    itemId: '/dashboard/courses/addNewCourse',
                    elemBefore: () => <BiImageAdd name="teacher" />,
                  },
                  {
                    title: 'Course Catagory',
                    itemId: '/dashboard/courses/courseCategory',
                    elemBefore: () => <BsBook name="book" />,
                  },
                  {
                    title: 'Coupons',
                    itemId: '',
                    elemBefore: () => <BsBook name="book" />,
                  },
                ],
              },
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
                  }
                ]
              }

            ]}
          />
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
        </div>
      </React.Fragment>
    </>
  );
};

export default Sidebar;