import React from 'react';
import CourseTable from './CourseTable';

const ManageCourses = () => {
  return (
    <div className="manageCourse">
      <h6>All Courses List</h6>
      <div className="container grid grid-cols-5 gap-12  ">

        <div className="box1">
          <p>Categories</p>
          <select>
            <option value="">Category Parent</option>
            <option value="">Bank</option>
            <option value="">Programing</option>
            <option value="">Microsoft Office</option>
            <option value="">Accounting</option>
            <option value="">Management</option>
          </select>
        </div>

        <div className="box1">
          <p>Instructor</p>
          <select>
            <option value="">All</option>
            <option value="">Dronal Trump</option>
            <option value="">Jo Byden</option>
            <option value="">Vadamir Putin</option>
            <option value="">Baris Johson</option>
            <option value="">Justin Tudo</option>
          </select>
        </div>

        <div className="box1">
          <p>Status</p>
          <select>
            <option value="">All</option>
            <option value="">Active</option>
            <option value="">Incoming</option>
            <option value="">Expired</option>
          </select>
        </div>

        <div className="box1">
          <p>Price</p>
          <select>
            <option value="">All</option>
            <option value="">paid</option>
            <option value="">Free</option>
          </select>
        </div>

        <div className="box1 mt-7">
          <button type="submit">Filter</button>
        </div>
      </div>

      <div className="showSearch flex mt-10 justify-between">
        <div className="box1">
          <label>Show</label>
          <select>
            <option value="">10</option>
            <option value="">20</option>
            <option value="">30</option>
            <option value="">40</option>
            <option value="">50</option>
          </select>
        </div>
        <div className="box1">
          <label>Search</label>
          <input type="text" />
        </div>
      </div>

      <CourseTable></CourseTable>

    </div>
  );
};

export default ManageCourses;