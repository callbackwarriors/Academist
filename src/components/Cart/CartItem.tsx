import Image from "next/image";
import Link from "next/link";
import { useContext } from "react";
import { BsFillXSquareFill } from "react-icons/bs";
import { ICourses } from "type";
import { Store } from "utils/Store";
interface IProp {
  item: ICourses;
}

function CartItem({ item }: IProp) {
  const { state, dispatch } = useContext(Store);
  const { title, img, price, slug, desc, courseProvider } = item;
  const removeItemHandler = (item: ICourses) => {
    dispatch({ type: 'CART_REMOVE_ITEM', payload: item })
  }
  return (
    <li className="flex items-center justify-between gap-6 p-5 mb-3 border border-gray-00">
      <div className="flex items-center gap-4">
        <div className="course-image ">
          <Link href={`/courses/${slug}`}>
            <a>
              <Image
                width="50"
                height="50"
                className="object-cover"
                src={img}
                alt=""
              />
            </a>
          </Link>
        </div>
        <div className="CourseName-instructor">
          <Link href={`/courses/${slug}`}>
            <a className="hover:underline hover:text-royal-blue">
              <h5 className="m-0">{title}</h5>
            </a>
          </Link>
        </div>
      </div>
      <div className="price">
        <span className="mb-2 text-2xl font-semibold">${price}</span>
      </div>
      <button className="flex text-2xl text-royal-blue" onClick={(() => removeItemHandler(item))}>
        <BsFillXSquareFill />
      </button>
    </li>
  );
}

export default CartItem;
