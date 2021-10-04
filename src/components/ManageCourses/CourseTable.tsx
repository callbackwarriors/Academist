import React from 'react';

const CourseTable = () => {
    return (
        <div className="courseTable">
            <table>

                <tr>
                    <td>idd</td>
                    <td>Title</td>
                    <td>Category</td>
                    <td>Lectures</td>
                    <td>Enrolled</td>
                    <td>Status</td>
                    <td>Price</td>
                    <td>Action</td>
                </tr>

                <tr>
                    <td>idd</td>
                    <td>    UI/UX Design Pattern For Succesfull Software Applications
                        Instructor:Gabriel L. William</td>
                    <td>Finance</td>
                    <td>
                        17 Lectures</td>
                    <td>
                        Total: 12</td>
                    <td>Active</td>
                    <td>		Free</td>
                    <td>Action</td>
                </tr>

            </table>
        </div>
    );
};

export default CourseTable;