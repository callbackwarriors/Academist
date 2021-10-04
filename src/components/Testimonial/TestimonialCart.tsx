import Image from 'next/image';
import { FaQuoteLeft } from "react-icons/fa";
const TestimonialCart = ({fd}:any) => {

    return (
        
<>

      <div className="p-4 md:w-1/2 w-full">
        <div className="h-full bg-gray-100 p-8 rounded">
          <FaQuoteLeft className="block w-5 h-5 text-gray-400 mb-4"/>
          
          <p className="leading-relaxed mb-6">{fd.compliment}</p>
          <div className="inline-flex items-center">
            
            <Image alt="testimonial" src={fd.image} height="50px" width="50px" className=" rounded-full flex-shrink-0 object-cover object-center"></Image>
            <span className="flex-grow flex flex-col pl-4">
              <span className="title-font font-medium">{fd.name}</span>
              <span className="text-sm">{fd.position}</span>
            </span>
          </div>
        </div>
      </div>
 

</>
    );
};

export default TestimonialCart;