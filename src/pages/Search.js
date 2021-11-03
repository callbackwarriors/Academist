import { useRouter } from "next/router";
import SearchCourse from "../components/SearchCourse/SearchCourse";
import Layout from "../components/utilities/Layout";
import PageTitle from "../components/utilities/PageTitle";
import Course from "../models/postCourse";
import db from "../utils/db";

const prices = [
  {
    name: "$1 to $50",
    value: "1-50",
  },
  {
    name: "$51 to $200",
    value: "51-200",
  },
  {
    name: "$201 to $1000",
    value: "201-1000",
  },
];

const search = (props) => {
  const router = useRouter();
  const {
    query = "all",
    title = "all",
    categories = "all",
    level = "all",
    price = "all",
  } = router.query;
  const { courses, countCourses } = props;

  const filterSearch = ({
    title,
    categories,
    searchQuery,
    price,
    level,
    min,
    max,
  }) => {
    const path = router.pathname;
    const { query } = router;
    if (searchQuery) query.searchQuery = searchQuery;
    if (title) query.title = title;
    if (categories) query.categories = categories;
    if (price) query.price = price;
    if (level) query.level = level;
    if (min) query.min ? query.min : query.min === 0 ? 0 : min;
    if (max) query.max ? query.max : query.max === 0 ? 0 : max;

    router.push({
      pathname: path,
      query: query,
    });
  };

  return (
    <Layout>
      <PageTitle
        background="bg-gray-50"
        title="Your search result"
        subtitle=""
      />
      <div className="section-padding">
        <div className="container">
          <div className="flex flex-wrap page-content__body">
            {courses.map((cr) => (
              <SearchCourse cr={cr} />
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default search;

export async function getServerSideProps({ query }) {
  await db.connect();
  // const pageSize = query.pageSize || PAGE_SIZE;
  // const page = query.page || 1;
  const title = query.title || "";
  const categories = query.categories || "";
  const level = query.level || "";
  const price = query.price || "";
  const searchQuery = query.query || "";

  const queryFilter =
    searchQuery && searchQuery !== "all"
      ? {
          title: {
            $regex: searchQuery,
            $options: "i",
          },
        }
      : {};

  const titleFilter = title && title !== "all" ? { title } : {};
  const categoryFilter =
    categories && categories !== "all" ? { categories } : {};
  const levelFilter = level && level !== "all" ? { level } : {};

  const priceFilter =
    price && price !== "all"
      ? {
          price: {
            $gte: Number(price.split("-")[0]),
            $lte: Number(price.split("-")[1]),
          },
        }
      : {};

  // const categories = await Course.find().distinct('categories');
  // const title = await Course.find().distinct('title');
  const coursesDocs = await Course.find(
    {
      ...queryFilter,
      ...categoryFilter,
      ...priceFilter,
      ...titleFilter,
      ...levelFilter,
    },
    "-reviews"
  ).lean();

  const countCourses = await Course.countDocuments({
    ...queryFilter,
    ...categoryFilter,
    ...priceFilter,
    ...titleFilter,
    ...levelFilter,
  });
  await db.disconnect();
  const courses = JSON.parse(JSON.stringify(coursesDocs));
  return {
    props: {
      courses,
      countCourses,
      categories,
    },
  };
}
