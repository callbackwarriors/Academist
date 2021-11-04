import Title from "components/utilities/Title";
import CategoryCart from "./CategoryCart";
import fakeData from "./CategoryData";

const Category = () => {
  interface ICategory {
    id: number;
    title: string;
    description: string;
    logo: string;
    link: string;
  }

  return (
    <>
      <div className="text-center bg-gray-50 py-20">
        <Title title="Explore Category" subtitle="" description="" />
      </div>

      <div className="bg-white-100 py-20">
       <div className="container">
       <div className="md:grid grid-cols-4 gap-6" >
       {
              fakeData?.map((fd: ICategory) => (<CategoryCart fd={fd} />))  
            }

       </div>
       </div>
 
      </div>
    </>
  );
};

export default Category;
