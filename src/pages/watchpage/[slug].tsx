import Layout from "components/utilities/Layout";
import PageTitle from "components/utilities/PageTitle";
import WatchLesson from "components/WatchLesson/WatchLesson";
import Order from "models/Orders";
import { Accordion } from "react-accessible-accordion";
import "react-accessible-accordion/dist/fancy-example.css";
import { ICourses } from "type";
import db from "../../utils/db";

interface IProps {
  course: ICourses;
}

const courseDetails = (props: IProps) => {
  const { orderCourse }: any = props;
  const { cartItems }: any = orderCourse;
  const watchCourse = cartItems[0];

  if (!orderCourse) {
    return (
      <Layout>
        <div className="container py-20 text-center">Loading...</div>
      </Layout>
    );
  }

  return (
    <Layout title={orderCourse.cartItems[0].title}>
      <PageTitle background="bg-gray-50" title={orderCourse.cartItems[0].title} subtitle="MY LEARNING" />
      <div className="section-padding">
      <div className="container">
        <Accordion>
          {watchCourse.inputList.map((watchVideo: any) => (
            <WatchLesson key={watchVideo._id} watchVideo={watchVideo} />
          ))}
        </Accordion>
      </div>
      </div>
    </Layout>
  );
};

export default courseDetails;

export async function getServerSideProps(context: { params: any }) {
  const { params } = context;
  const { slug } = params;
  await db.connect();
  const course = await Order.findOne({ slug }).lean();
  const orderCourse = JSON.parse(JSON.stringify(course));
  await db.disconnect();
  return {
    props: {
      orderCourse,
    },
  };
}
