import Partner1 from 'assets/images/partner1.png';
import Partner2 from 'assets/images/partner2.png';
import Partner3 from 'assets/images/partner3.webp';
import Partner4 from 'assets/images/partner4.webp';
import Partner5 from 'assets/images/partner5.webp';
import Image from 'next/image';
const Partner = () => {
    return (
        <div className="partner">
            <section className="container">
               <div className="partner__header ">
                   <div className="partner__header--title">
                        <h3> Trusted by our awesome partners</h3>
                   </div>
                   <div className="partner__header--button lg:block md:block hidden">
                       <button>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                            </svg>
                        </button>
                        <button>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                            </svg>
                        </button>
                    </div>
                </div>
                <div className="partner__content">
                    <div className="partner__content--item flex flex-wrap">
                         <div className="partner__content--item--logo xl:w-1/5 md:w-1/4 p-4">  
                            <picture>
                            <Image src={Partner1}/>
                            </picture>
                        </div>
                        <div className="partner__content--item--logo xl:w-1/5 md:w-1/4 p-4">  
                            <picture> 
                            <Image src={Partner2}/>
                            </picture>
                        </div>
                        <div className="partner__content--item--logo xl:w-1/5 md:w-1/4 p-4">  
                            <picture> 
                            <Image src={Partner3}/>
                            </picture>
                        </div>
                        <div className="partner__content--item--logo xl:w-1/5 md:w-1/4 p-4">  
                            <picture> 
                            <Image src={Partner4}/>
                            </picture>
                        </div>
                        <div className="partner__content--item--logo xl:w-1/5 md:w-1/4 p-4">  
                            <picture> 
                            <Image src={Partner5}/>
                            </picture>
                        </div>
                        
                    </div>
                </div>

            </section>
        </div>
    );
};

export default Partner;