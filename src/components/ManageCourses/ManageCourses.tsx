import ManageCourse from 'components/ManageCourse/ManageCourse';
import React, { useContext } from "react";
import { ICourses } from 'type';
import { Store } from "utils/Store";

interface IProp {
  courses: ICourses;
}

const ManageCourses = ({ courses }: IProp) => {
  const { state, dispatch } = useContext(Store);
  const { userInfo } = state;
  const instructorCourse = courses.filter(
    (course: ICourses) => course?.userInfo.email === userInfo?.email
  );

  return (
    <div className="manageCourse">
      <div className="title">
        <h2 className="title__subtitle"></h2>
        <h2 className="mb-4">Manage Course</h2>
        <p>Dear instractor, Welcome to your manage courses page. You can manage your existing courses below.</p>
      </div>
      <div className="flex flex-wrap overflow-hidden">

        {userInfo?.isAdmin && courses.map((course: ICourses) => (
          <ManageCourse key={course._id} course={course}></ManageCourse>
        ))}

        {userInfo?.instructor && instructorCourse.map((course: ICourses) => (
          <ManageCourse key={course._id} course={course}></ManageCourse>
        ))}

      </div>
    </div>
  );
};

export default ManageCourses;


