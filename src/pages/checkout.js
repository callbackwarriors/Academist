import Checkout from "components/Checkout/Checkout";
import Layout from "components/utilities/Layout";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

const checkout = () => {
  const [user, setUser] = useState();
  useEffect(() => {
    const value = localStorage.getItem("userInfo");
    const user = !!value ? JSON.parse(value) : undefined;
    setUser(user);
  }, []);
  const router = useRouter();
  // if (!user) {
  //     router.push('/login?redirect=/checkout')
  // }
  return (
    <Layout>
      <div className="text-center cart-head">
        <div className="container">
          <h2>Checkout</h2>
        </div>
      </div>
      <Checkout user={user}></Checkout>
    </Layout>
  );
};

export default checkout;
