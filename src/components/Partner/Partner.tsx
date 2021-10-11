import Partner1 from 'assets/images/partner1.png';
import Partner2 from 'assets/images/partner2.png';
import Partner3 from 'assets/images/partner3.webp';
import Partner4 from 'assets/images/partner4.webp';
import Partner5 from 'assets/images/partner5.webp';
import Image from 'next/image';
import Link from 'next/link';
const Partner = () => {
    return (
        <div className="partner bg-black-squeeze section-padding">
            <section className="container">
               <div className="partner__header ">
                   <div className="partner__header--title">
                        <h3> Trusted by our awesome partners</h3>
                   </div>
                </div>
                <div className="partner__content">
                    <div className="partner__content--item flex flex-wrap">
                         <div className="partner__content--item--logo xl:w-1/5 md:w-1/4 text-center">  
                            <div className="shadow bg-white p-6 inline-flex align-middle justify-center">
                            <Link href="#">
                            <a><Image className="object-cover" width="135px" height="36px" src={Partner1}/></a>
                            </Link>
                            </div>
                        </div>
                        <div className="partner__content--item--logo text-center xl:w-1/5 md:w-1/4"> 
                            <div className="shadow bg-white p-6 inline-flex align-middle justify-center">
                            <Link href="#">
                            <a><Image className="object-cover" width="135px" height="36px" src={Partner2}/></a>
                            </Link>
                            </div>
                        </div>
                        <div className="partner__content--item--logo xl:w-1/5 md:w-1/4 text-center">  
                            <div className="shadow bg-white p-6 inline-flex align-middle justify-center">
                            <Link href="#">
                            <a><Image className="object-cover" width="135px" height="36px" src={Partner3}/></a>
                            </Link>
                            </div>
                        </div>
                        <div className="partner__content--item--logo xl:w-1/5 md:w-1/4 text-center">  
                            <div className="shadow bg-white p-6 inline-flex align-middle justify-center">
                            <Link href="#">
                            <a><Image className="object-cover" width="135px" height="36px" src={Partner4}/></a>
                            </Link>
                            </div>
                        </div>
                        <div className="partner__content--item--logo xl:w-1/5 md:w-1/4 text-center">  

                            <div className="shadow bg-white p-6 inline-flex align-middle justify-center">
                            <Link href="#">
                            <a><Image className="object-cover" width="135px" height="36px" src={Partner5}/></a>
                            </Link>
                            </div>
                        </div>
                        
                    </div>
                </div>

            </section>
        </div>
    );
};

export default Partner;