const InstructorRevenueCart = ({fakeData}:any) => {
  return (
    <>
      <tr className="bg-blue-200 lg:text-black">
        <td className="p-3">{fakeData.enrolledCourse}</td>
        <td className="p-3">{fakeData.instructorName}</td>
        <td className="p-3">$ {fakeData.totalAmount}</td>
        <td className="p-3">$ {fakeData.instructorRevenue}</td>
        <td className="p-3">{fakeData.enrolledDate}</td>
      </tr>
    </>
  );
};

export default InstructorRevenueCart;
