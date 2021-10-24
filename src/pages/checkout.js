import Checkout from "components/Checkout/Checkout";
import Layout from "components/utilities/Layout";
import { useRouter } from "next/router";
import { useEffect, useContext } from "react";
import { Store } from "utils/Store";

const checkout = () => {
  const { state, dispatch } = useContext(Store);
  const { userInfo } = state;
  const router = useRouter();
  useEffect(() => {
    if (!userInfo) {
      return router.push("/login?redirect=/checkout");
    }
  }, []);
  return (
    <Layout>
      <div className="text-center cart-head">
        <div className="container">
          <h2>Checkout</h2>
        </div>
      </div>
      <Checkout userInfo={userInfo}></Checkout>
    </Layout>
  );
};

export default checkout;
