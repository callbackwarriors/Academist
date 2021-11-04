import Layout from "components/utilities/Layout";
import User from "models/User";
import { IUser } from "type";
import db from '../../utils/db';

interface IProps {
  User: IUser;
}


const instructorDetail = (props: IProps) => {
  const { singleInstructor }: any = props;

  if (!singleInstructor) {
    return <Layout>
      <div className="container py-20 text-center">
        Loading...
      </div>
    </Layout>
  }

  return (
    <Layout>
      <h2>Hello World</h2>
    </Layout>
  );
};

export default instructorDetail;

export async function getServerSideProps(context: { params: any; }) {
  
  const { params } = context;
  const { id } = params;


  await db.connect();
  const course = await User.findOne({ id }).lean();
  const singleInstructor = JSON.parse(JSON.stringify(course))
  await db.disconnect();
  return {
    props: {
      singleInstructor,
    },
  };
}
