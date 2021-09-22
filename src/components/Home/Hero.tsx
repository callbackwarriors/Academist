import Image from 'next/image';
import { BsSearch } from 'react-icons/bs';
import HeroBg from '../../assets/images/hero.jpg';
const Hero = () => {
    return (

      <section className="hero relative">
            <div className="container flex flex-col items-center  md:flex-row ">
              <div className="flex flex-col items-start mb-16 text-left lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 md:mb-0">
                <h1 className="mb-4"> Learn more and make success the result of perfection.</h1>
                <p className="mb-8 text-2xl leading-relaxed text-left text-blueGray-600 "> Pick from over 100,000 online video courses with new additions published every month.</p>
                <div className="flex flex-col justify-center lg:flex-row">
                  <form action="#">
                    <input type="text" name="search" placeholder="Search" id="" />
                    <button><BsSearch/></button>
                  </form>
                </div>
              </div>
              <div className="w-full lg:w-5/6 lg:max-w-lg md:w-1/2">
                <Image className="object-cover object-center rounded-lg" src={HeroBg}/>
              </div>
            </div>
          </section>
        


    )
}

export default Hero
