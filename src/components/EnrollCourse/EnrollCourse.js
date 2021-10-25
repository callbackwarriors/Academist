import MyClass from "components/MyClass/MyClass";
import React, { useContext } from "react";
import { Store } from "utils/Store";

const EnrollCourse = ({ orders }) => {
  const { state } = useContext(Store);
  const { userInfo } = state;

  const currentUserOrder = orders.filter(
    (order) => order?.userInfo.email === userInfo?.email
  );
  console.log("currentUserOrder", currentUserOrder);

  return (
    <div className="container flex flex-wrap">
      {currentUserOrder.map((order) => (
        <MyClass order={order} />
      ))}
    </div>
  );
};

export default EnrollCourse;
