import Image from "next/image";
import Link from "next/link";
import { BsFillXSquareFill } from "react-icons/bs";
import { ICourses } from "type";
interface IProp {
  item: ICourses;
}

function CartItem({ item }: IProp) {
  const { title, img, price, slug, desc, courseProvider } = item;
  return (
    <li className="border border-gray-00 flex p-5 mb-3 justify-between gap-6">
      <div className="flex gap-4">
        <div className="course-image ">
          <Link href={`/courses/${slug}`}>
            <a>
              <Image
                width="100"
                height="100"
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
            <h5>{title}</h5>
            </a>
          </Link>
          
          <picture className="flex">
            <img src="http://skilify.theuxuidesigner.com/images/webp/profile-img4.webp" />
            <span>{courseProvider}</span>
          </picture>
        </div>
      </div>
      <div className="price">
        <span className="mb-2 text-2xl font-semibold">${price}</span>
      </div>
      <button className="text-royal-blue text-2xl flex">
        <BsFillXSquareFill />
      </button>
    </li>
  );
}

export default CartItem;
