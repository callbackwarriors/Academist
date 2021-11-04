import Image from 'next/image';
import { FaQuoteLeft } from "react-icons/fa";
import { IContact } from 'type';


interface IProp {
  contactInfo: IContact
}

const TestimonialCart = ({ contactInfo }: IProp) => {
  const { name, email, img, message } = contactInfo;

  return (
    <>
      <div className="w-full p-4 md:w-1/2">
        <div className="h-full p-8 bg-gray-100 rounded">
          <FaQuoteLeft className="block w-5 h-5 mb-4 text-gray-400" />

          <p className="mb-6 leading-relaxed">{message}</p>
          <div className="inline-flex items-center">

            <Image alt="testimonial" src={img} height="50px" width="50px" className="flex-shrink-0 object-cover object-center rounded-full "></Image>
            <span className="flex flex-col flex-grow pl-4">
              <span className="font-medium title-font">{name}</span>
              <span className="text-sm">{email}</span>
            </span>
          </div>

        </div>
      </div>
    </>
  );
};

export default TestimonialCart;