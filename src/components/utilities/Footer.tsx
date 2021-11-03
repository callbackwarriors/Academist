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
                                    <h4>Quick links</h4>
                                </div>
                                <div className="footer-top__section--content ">
                                    <ul className="">
                                        <li ><a href="https://academist.vercel.app/">Home</a></li>
                                        <li ><a href="/courses">Courses</a></li>
                                        <li ><a href="/instractors">Instractors</a></li>
                                        <li ><a href="/categories">Categories</a></li>
                                        <li ><a href="/">Contact</a></li>
                                    </ul>
                                </div>
                            </div>

                            <div className="footer-inner">
                                <div className="footer-content">
                                    <div className="footer-top__section--title ">
                                        <h4>Categories</h4>
                                    </div>
                                    <div className="footer-top__section--content ">
                                        <ul className="lab-ul">
                                            <li ><a href="/search?query=rect">React</a></li>
                                            <li ><a href="/search?query=nextjs">NextJS</a></li>
                                            <li ><a href="/search?query=mearn">MEARN</a></li>
                                            <li ><a href="/search?query=nodejs">NodeJS</a></li>
                                            <li ><a href="/search?query=mongodb">MongoDB</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div className="footer-inner">
                                <div className="footer-content">
                                    <div className="footer-top__section--title ">
                                        <h4>My account</h4>
                                    </div>
                                    <div className="footer-top__section--content ">
                                        <ul className="lab-ul">
                                            <li ><a href="/login">Login</a></li>
                                            <li ><a href="/register">Register</a></li>
                                            <li ><a href="/profile">Account settings</a></li>
                                            <li ><a href="/dashboard">Dashboard</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>


                            <div className="footer-item">
                                <div className="footer-inner">
                                    <div className="footer-content">
                                        <div className="footer-top__section--title ">
                                            <h4>Contact us</h4>
                                        </div>
                                        <div className="footer-top__section--content ">
                                           <p className="text-white mb-3">15/e Lake circus<br/> Kalabagan, Dhaka.</p>
                                           <p className="text-white">callbackwarriors@gmail.com</p>
                                           
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