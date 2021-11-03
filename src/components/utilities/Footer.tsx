import React from 'react';

const Footer = () => {
    return (
        <footer className="relative footer">
            <div className="news-wrap">
                <div className="news-wrap__news-letter ">
                    <div className="container">
                        <div className="news-wrap__news-letter--section-wrapper">
                            <div className="news-wrap__news-letter--section-wrapper--news-title ">
                                <h3>Want Us To Email You About Special Offers And Updates?</h3>
                            </div>
                            <div className="news-wrap__news-letter--section-wrapper--news-form">
                                <div className="flex flex-col items-end w-full px-8 mx-auto space-y-4 lg:w-2/3 sm:flex-row sm:space-x-4 sm:space-y-0 sm:px-0">

                                    <div className="relative flex-grow w-full">

                                        <input type="email" placeholder="Email address" id="email" name="email" className="w-full px-3 py-1 text-base leading-8 transition-colors duration-200 ease-in-out bg-gray-100 bg-opacity-50 border shadow outline-none focus:border-royal-blue focus:bg-transparent focus:ring-2 focus:royal-blue focus:bg-white" />
                                    </div>
                                    <button className="px-8 py-2 text-lg text-white border-0 bg-royal-blue focus:outline-none hover:bg-indigo-600">Subscribe</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="footer-top ">
                    <div className="container">
                        <div className="footer-top__section ">

                            <div className="footer-content">
                                <div className="footer-top__section--title ">
                                    <h4>Site Map</h4>
                                </div>
                                <div className="footer-top__section--content ">
                                    <ul className="">
                                        <li ><a href="#">Documentation</a></li>
                                        <li ><a href="#">Feedback</a></li>
                                        <li ><a href="#">Plugins</a></li>
                                        <li ><a href="#">Support Forums</a></li>
                                        <li ><a href="#">Themes</a></li>
                                    </ul>
                                </div>
                            </div>

                            <div className="footer-inner">
                                <div className="footer-content">
                                    <div className="footer-top__section--title ">
                                        <h4>Useful Links</h4>
                                    </div>
                                    <div className="footer-top__section--content ">
                                        <ul className="lab-ul">
                                            <li ><a href="#">About Us</a></li>
                                            <li ><a href="#">Help Link</a></li>
                                            <li ><a href="#">Terms & Conditions</a></li>
                                            <li ><a href="#">Contact Us</a></li>
                                            <li ><a href="#">Privacy Policy</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div className="footer-inner">
                                <div className="footer-content">
                                    <div className="footer-top__section--title ">
                                        <h4>Social Contact</h4>
                                    </div>
                                    <div className="footer-top__section--content ">
                                        <ul className="lab-ul">
                                            <li ><a href="#">Facebook</a></li>
                                            <li ><a href="#">Twitter</a></li>
                                            <li ><a href="#">Instagram</a></li>
                                            <li ><a href="#">YouTube</a></li>
                                            <li ><a href="#">Github</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>


                            <div className="footer-item">
                                <div className="footer-inner">
                                    <div className="footer-content">
                                        <div className="footer-top__section--title ">
                                            <h4>Our Support</h4>
                                        </div>
                                        <div className="footer-top__section--content ">
                                            <ul className="">
                                                <li ><a href="#">Help Center</a></li>
                                                <li ><a href="#">Paid with Mollie</a></li>
                                                <li ><a href="#">Status</a></li>
                                                <li ><a href="#">Changelog</a></li>
                                                <li ><a href="#">Contact Support</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                <div className="footer__bottom ">
                    <div className="container">
                        <div className="footer-bottom__section-wrapper ">
                            <p >&copy; 2021 <a href="index.html">Academist</a> Designed by CallBack warriors </p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;