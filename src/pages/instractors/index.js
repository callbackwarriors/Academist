import InstractorCard from "components/InstractorCard/InstractorCard";
import User from "models/User";
import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import Layout from "../../components/utilities/Layout";
import {
  BsFillGrid3X2GapFill,
  BsFillGrid3X3GapFill,
  BsSearch,
} from "react-icons/bs";
import db from "utils/db";
const Instractors = (props) => {
  const { user } = props;
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  return (
    <Layout>
      <div className="sectionAllCourses">
        <div className="bg-gray-300 allCourses">
          <h2 className="pt-12 text-center">Find Your Course</h2>

          <div className="container flex py-16">
            <React.Fragment className="w-1/3 pb-10 allCourses__page-sidebar ">
              <div
                onClick={() => setIsSidebarOpen(false)}
                className={`fixed inset-0 z-20 block transition-opacity bg-black opacity-50 lg:hidden ${
                  isSidebarOpen ? "block" : "hidden"
                }`}
              />
              <div>
                <button
                  className="lg:px-2 btn-menu lg:hidden"
                  onClick={() => setIsSidebarOpen(true)}
                  type="button"
                >
                  <GiHamburgerMenu name="burger" className="w-6 h-6" />
                </button>
              </div>
              <div
                className={`fixed inset-y-0 left-0 z-30 w-64 lg:w-96 p-8 overflow-y-auto transition duration-300 ease-out transform translate-x-0 bg-white border-r-2 lg:translate-x-0 lg:static lg:inset-0 ${
                  isSidebarOpen
                    ? "ease-out translate-x-0"
                    : "ease-in -translate-x-full"
                }`}
              >
                <div className="flex allCourses__page-sidebar--findBox ">
                  <div></div>
                  <div className="flex w-full bg-gray-100 bg-opacity-50 border border-gray-300 allCourses__page-sidebar--findBox--find item-center h-14 ">
                    <div className="p-2 pt-4">
                      <BsSearch />
                    </div>

                    <input
                      type="text"
                      placeholder="Search for new course..."
                      id="email"
                      name="search"
                      className="w-full px-3 py-1 text-base leading-8 text-gray-700 transition-colors duration-200 ease-in-out border-none font-1 focus:border-royal-blue focus:bg-transparent focus:ring-2 focus:ring-indigo-200"
                    />
                  </div>
                </div>

                <div className="allCourses__page-sidebar--catagory ">
                  <label>
                    <select className="w-full px-3 py-1 mt-3 text-base leading-8 text-gray-700 transition-colors duration-200 ease-in-out bg-gray-100 bg-opacity-50 border border-gray-300 border-none h-14 focus:border-royal-blue focus:bg-transparent focus:ring-2 focus:ring-indigo-200">
                      <option>Select</option>
                      <option>Option 2</option>
                      <option>Option 1</option>
                      <option>Option 2</option>
                      <option>Option 1</option>
                      <option>Option 2</option>
                    </select>
                  </label>
                </div>

                <div className="mt-3 allCourses__page-sidebar--checklist">
                  <h6>Top instructor</h6>
                  <ul>
                    <li>
                      <label className="checkbox-container">
                        Keny White
                        <input type="checkbox" />
                        <span className="checkmark"></span>
                      </label>
                      <div className="count">
                        <span className="count">12</span>
                      </div>
                    </li>
                    <li>
                      <label className="checkbox-container">
                        Keny White
                        <input type="checkbox" />
                        <span className="checkmark"></span>
                      </label>
                      <div className="count">
                        <span className="count">12</span>
                      </div>
                    </li>
                    <li>
                      <label className="checkbox-container">
                        Keny White
                        <input type="checkbox" />
                        <span className="checkmark"></span>
                      </label>
                      <div className="count">
                        <span className="count">12</span>
                      </div>
                    </li>
                    <li>
                      <label className="checkbox-container">
                        Keny White
                        <input type="checkbox" />
                        <span className="checkmark"></span>
                      </label>
                      <div className="count">
                        <span className="count">12</span>
                      </div>
                    </li>
                    <li>
                      <label className="checkbox-container">
                        Keny White
                        <input type="checkbox" />
                        <span className="checkmark"></span>
                      </label>
                      <div className="count">
                        <span className="count">12</span>
                      </div>
                    </li>
                  </ul>
                </div>

                <div className="allCourses__page-sidebar--checklist">
                  <h6>Skill level</h6>
                  <ul>
                    <li>
                      <label className="checkbox-container">
                        Beginner
                        <input type="checkbox" />
                        <span className="checkmark"></span>
                      </label>
                    </li>
                    <li>
                      <label className="checkbox-container">
                        Intermediate
                        <input type="checkbox" />
                        <span className="checkmark"></span>
                      </label>
                    </li>
                    <li>
                      <label className="checkbox-container">
                        Advanced
                        <input type="checkbox" />
                        <span className="checkmark"></span>
                      </label>
                    </li>
                  </ul>
                </div>

                <div className="allCourses__page-sidebar--checklist ">
                  <h6>Price</h6>
                  <ul>
                    <li>
                      <label className="checkbox-container">
                        All
                        <input type="checkbox" />
                        <span className="checkmark"></span>
                      </label>
                      <div className="count">
                        <span className="count">100</span>
                      </div>
                    </li>
                    <li>
                      <label className="checkbox-container">
                        Free
                        <input type="checkbox" />
                        <span className="checkmark"></span>
                      </label>
                      <div className="count">
                        <span className="count">11</span>
                      </div>
                    </li>
                    <li>
                      <label className="checkbox-container">
                        Paid
                        <input type="checkbox" />
                        <span className="checkmark"></span>
                      </label>
                      <div className="count">
                        <span className="count">99</span>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </React.Fragment>
            <div className="pl-2 content">
              <div className="page-content ">
              <div className="grid items-center grid-cols-2 px-2 bg-white rounded-sm page-content__header">
                  <div className="lg:p-2">
                    <h6 className="m-0 text-xs lg:text-base">
                      Showing 1-25 Of 72
                    </h6>
                  </div>
                  <div className="flex lg:grid lg:grid-cols-3 xs:grid-cols-2">
                    <span className="flex items-center text-xs lg:text-base">
                      Short by:
                    </span>
                    <div>
                      <select className="w-full text-base leading-8 transition-colors duration-200 ease-in-out bg-white bg-opacity-50 border-none focus:border-royal-blue focus:bg-transparent focus:ring-2 focus:ring-indigo-200">
                        <option>Select</option>
                        <option>Mostly visited</option>
                        <option>Most popular</option>
                        <option>Mostly sold</option>
                      </select>
                    </div>
                    <div className="items-center hidden lg:block">
                      <div className="grid grid-cols-2 grid-rows-1 ite">
                        <div className="lg:text-2xl lg:px-6">
                          <BsFillGrid3X3GapFill />
                        </div>
                        <div className=" lg:text-2xl lg:px-6">
                          <BsFillGrid3X2GapFill />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-wrap page-content__body">
                  {user.map((ur) => (
                    <InstractorCard key={ur._id} ur={ur} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Instractors;

export async function getServerSideProps() {
  await db.connect();
  const user = await User.find({}).lean();
  await db.disconnect();
  return {
    props: {
      user: user.map(db.convertDocToObj),
    },
  };
}
