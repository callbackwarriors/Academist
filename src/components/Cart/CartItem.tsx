import Image from 'next/image';
import { BsFillXSquareFill } from "react-icons/bs";
import { ICourses } from 'type';
interface IProp {
    item: ICourses;
}


function CartItem({ item }: IProp) {
    const {title, img, desc, courseProvider} = item;
    return (
        <li className="border border-gray-00 flex p-5">
    <div className="flex">
    <div className="course-image ">

        <Image width="100px" height="100px" className="object-cover" src={img} alt=""/>
    </div>
    <div className="CourseName-instructor">
    <h5>{title}</h5>
    <picture className="flex">
        <img src="http://skilify.theuxuidesigner.com/images/webp/profile-img4.webp"/>
        <span>{courseProvider}</span>
    </picture>
    </div>
    </div>
    <div className="price my-5 mx-5">
        <span className="mb-2 text-2xl font-semibold">$125</span><br/>
        <del className="text-xl text-gray-500">$225</del>
    </div>
    <button className="text-royal-blue text-2xl">
        <BsFillXSquareFill/>
    </button>

</li>
    )
}

export default CartItem
