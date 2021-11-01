import AllCourses from "components/AllCourses/AllCourses";
import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import Layout from "../../components/utilities/Layout";
import PageTitle from "../../components/utilities/PageTitle";
import Course from "../../models/postCourse";
import db from "../../utils/db";
const CoursesPage = (props) => {
  const { allCourses } = props;
  console.log("allCourses", allCourses);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const [query, setQuery] = useState("");
  const queryChangeHandle = (e) => {
    setQuery(e.target.value);
  };

  return (
    <Layout>
      <PageTitle
        background="bg-gray-50"
        title="Courses"
        subtitle="Find your course"
      />
      <div className="sectionAllCourses">
        <div className="allCourses">
          <div className="container">
            <div class="flex flex-wrap overflow-hidden">
              <div className="w-full overflow-hidden lg:w-1/4 xl:w-1/4 allCourses__page-sidebar ">
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
                  className={`h-full section-padding fixed inset-y-0 left-0 z-30  p-8 overflow-y-auto transition duration-300 ease-out transform translate-x-0 bg-white border-r-2 lg:translate-x-0 lg:static lg:inset-0 ${
                    isSidebarOpen
                      ? "ease-out translate-x-0"
                      : "ease-in -translate-x-full"
                  }`}
                >
                  <div className="mb-6 allCourses__page-sidebar--findBox">
                    <div></div>
                    <form action="">
                      <input
                        type="text"
                        placeholder="Search for course..."
                        id="email"
                        name="query"
                        onChange={queryChangeHandle}
                        className="w-full px-4 py-3 rounded focus:border-royal-blue"
                      />
                    </form>
                  </div>

                  <div className="mb-6 allCourses__page-sidebar--catagory">
                    <label>
                      <select className="w-full px-3 py-1 text-base leading-8 text-gray-700 transition-colors duration-200 ease-in-out bg-gray-100 bg-opacity-50 border border-gray-300 border-none h-14 focus:border-royal-blue focus:bg-transparent focus:ring-2 focus:ring-indigo-200">
                        <option>Select categories</option>
                        <option>React</option>
                        <option>Javascript</option>
                        <option>NodeJs</option>
                        <option>Next JS</option>
                        <option>MEARN</option>
                      </select>
                    </label>
                  </div>

                  <div className="mb-6 allCourses__page-sidebar--checklist">
                    <h6>Courses by Top Instractors</h6>
                    <ul>
                      <li>
                        <label className="checkbox-container">
                          Jankar Mahbub
                          <input type="checkbox" />
                          <span className="checkmark"></span>
                        </label>
                        <div className="count">
                          <span className="count">1</span>
                        </div>
                      </li>
                      <li>
                        <label className="checkbox-container">
                          Jonas S.
                          <input type="checkbox" />
                          <span className="checkmark"></span>
                        </label>
                        <div className="count">
                          <span className="count">3</span>
                        </div>
                      </li>
                      <li>
                        <label className="checkbox-container">
                          Maximilian S.
                          <input type="checkbox" />
                          <span className="checkmark"></span>
                        </label>
                        <div className="count">
                          <span className="count">4</span>
                        </div>
                      </li>
                      <li>
                        <label className="checkbox-container">
                          Morgan F.
                          <input type="checkbox" />
                          <span className="checkmark"></span>
                        </label>
                        <div className="count">
                          <span className="count">3</span>
                        </div>
                      </li>
                      <li>
                        <label className="checkbox-container">
                          Evana S.
                          <input type="checkbox" />
                          <span className="checkmark"></span>
                        </label>
                        <div className="count">
                          <span className="count">7</span>
                        </div>
                      </li>
                    </ul>
                  </div>

                  <div className="mb-6 allCourses__page-sidebar--checklist">
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
              </div>

              <div className="w-full py-16 pl-2 overflow-hidden lg:w-3/4 xl:w-3/4 content">
                <div className="page-content ">
                  {/* start courses items */}
                  <div className="flex flex-wrap page-content__body">
                    {allCourses
                      .filter((course) => {
                        if (query == "") {
                          return course;
                        } else if (
                          course.title
                            .toLowerCase()
                            .includes(query.toLowerCase())
                        ) {
                          return course;
                        }
                      })
                      .map((course) => (
                        <AllCourses key={course.title} course={course} />
                      ))}
                  </div>
                  {/* end courses items */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CoursesPage;

export async function getServerSideProps() {
  await db.connect();
  const courses = await Course.find({}).lean();
  const allCourses = JSON.parse(JSON.stringify(courses));
  await db.disconnect();
  return {
    props: {
      allCourses,
    },
  };
}
