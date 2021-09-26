import { AiFillEye, AiFillVideoCamera, AiOutlineHeart, AiOutlineStar } from 'react-icons/ai';
import Title from "../utilities/Title";

const LatestCourses = () => {
  return (
    <section className="latest__courses section-padding">
    <div className="container">
    <Title subtitle="ROOF PARTY POLAROID" title="Master Cleanse Reliac Heirloom" description="Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table."/>
    </div>
    <div className="container">
    

    <div className="flex flex-wrap">

    <div className="xl:w-1/3 md:w-1/2 p-4 transition duration-100 ease-in-out transform hover:scale-105">
        <div className="bg-gray-100 p-6 rounded-lg">
        <div className="relative">
          <img className="h-40 rounded w-full object-cover object-center mb-6" src="https://i.ibb.co/9V1Xq8s/crd-img.webp" alt="" />
          <AiOutlineHeart className="text-2xl absolute top-3 right-3"/>
          </div>

          <div className="flex justify-between gap-3 pb-3 mb-3 border-gray-300 border-b">
            <div className="flex justify-center items-center gap-1">
            <AiOutlineStar  className="text-2xl text-yellow-400" /> 4.5
            </div>

            <div className="flex justify-center items-center gap-1">
            <AiFillEye  className="text-2xl text-red-400" /> 2300
            </div>

            <div className="flex justify-center items-center gap-1">
            <AiFillVideoCamera  className="text-2xl text-green-400" /> 15
            </div>

          </div>
          <h4 className="text-2xl mb-2">Colosseum Roma</h4>
          <p className="leading-relaxed text-base">Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.</p>
        </div>
      </div>

      <div className="xl:w-1/3 md:w-1/2 p-4 transition duration-100 ease-in-out transform hover:scale-105">
        <div className="bg-gray-100 p-6 rounded-lg">
        <div className="relative">
          <img className="h-40 rounded w-full object-cover object-center mb-6" src="https://i.ibb.co/9V1Xq8s/crd-img.webp" alt="" />
          <AiOutlineHeart className="text-2xl absolute top-3 right-3"/>
          </div>

          <div className="flex justify-between gap-3 pb-3 mb-3 border-gray-300 border-b">
            <div className="flex justify-center items-center gap-1">
            <AiOutlineStar  className="text-2xl text-yellow-400" /> 4.5
            </div>

            <div className="flex justify-center items-center gap-1">
            <AiFillEye  className="text-2xl text-red-400" /> 2300
            </div>

            <div className="flex justify-center items-center gap-1">
            <AiFillVideoCamera  className="text-2xl text-green-400" /> 15
            </div>

          </div>
          <h4 className="text-2xl mb-2">Colosseum Roma</h4>
          <p className="leading-relaxed text-base">Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.</p>
        </div>
      </div>

      <div className="xl:w-1/3 md:w-1/2 p-4 transition duration-100 ease-in-out transform hover:scale-105">
        <div className="bg-gray-100 p-6 rounded-lg">
        <div className="relative">
          <img className="h-40 rounded w-full object-cover object-center mb-6" src="https://i.ibb.co/9V1Xq8s/crd-img.webp" alt="" />
          <AiOutlineHeart className="text-2xl absolute top-3 right-3"/>
          </div>

          <div className="flex justify-between gap-3 pb-3 mb-3 border-gray-300 border-b">
            <div className="flex justify-center items-center gap-1">
            <AiOutlineStar  className="text-2xl text-yellow-400" /> 4.5
            </div>

            <div className="flex justify-center items-center gap-1">
            <AiFillEye  className="text-2xl text-red-400" /> 2300
            </div>

            <div className="flex justify-center items-center gap-1">
            <AiFillVideoCamera  className="text-2xl text-green-400" /> 15
            </div>

          </div>
          <h4 className="text-2xl mb-2">Colosseum Roma</h4>
          <p className="leading-relaxed text-base">Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.</p>
        </div>
      </div>


      </div>
      </div>
    </section>
  );
};

export default LatestCourses;
