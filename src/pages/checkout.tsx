import Checkout from "components/Checkout/Checkout";
import Layout from "components/utilities/Layout";
import { useRouter } from "next/router";
import { useEffect, useContext } from "react";
import { Store } from "utils/Store";

const checkout = () => {
<<<<<<< HEAD:src/pages/checkout.tsx
    const [user, setUser] = useState();
    console.log('api  user', user);
    
    useEffect(() => {
        const value = localStorage.getItem("userInfo");
        const user = !!value ? JSON.parse(value) : undefined;
        setUser(user);
    }, []);
    // const router = useRouter()
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
=======
  const { state, dispatch } = useContext(Store);
  const { userInfo } = state;
  // console.log('userInfo3', userInfo);
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
      <Checkout></Checkout>
    </Layout>
  );
>>>>>>> develop:src/pages/checkout.js
};

export default checkout;
