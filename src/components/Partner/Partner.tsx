import React from 'react';

const Partner = () => {
    return (
        <div className="partner">
            <section className="container">
               <div className="partner__header ">
                   <div className="partner__header--title">
                        <h3> Trusted by our awesome partners</h3>
                   </div>
                   <div className="partner__header--button">
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
                    <div className="partner__content--item">
                         <div className="partner__content--item--logo">  
                            <picture> 
                                <img src="http://skilify.theuxuidesigner.com/images/img/partner1.png" alt="Image Description"/>
                            </picture>
                        </div>
                        <div className="partner__content--item--logo">  
                            <picture> 
                                <img src="http://skilify.theuxuidesigner.com/images/webp/partner2.webp" alt="Image Description"/>
                            </picture>
                        </div>
                        <div className="partner__content--item--logo">  
                            <picture> 
                                <img src="http://skilify.theuxuidesigner.com/images/webp/partner3.webp" alt="Image Description"/>
                            </picture>
                        </div>
                        <div className="partner__content--item--logo">  
                            <picture> 
                                <img src="http://skilify.theuxuidesigner.com/images/webp/partner4.webp" alt="Image Description"/>
                            </picture>
                        </div>
                        <div className="partner__content--item--logo">  
                            <picture> 
                                <img src="http://skilify.theuxuidesigner.com/images/img/partner.png" alt="Image Description"/>
                            </picture>
                        </div>
                        
                    </div>
                </div>

            </section>
        </div>
    );
};

export default Partner;