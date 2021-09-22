import Image from 'next/image'
import im1 from './../../../public/01.jpg'
import im2 from './../../../public/02.jpg'
import im3 from './../../../public/03.jpg'
import im4 from './../../../public/04.jpg'
import { FaBook, FaUsers, FaStar } from 'react-icons/fa';

const FeaturedTeacher = () => {
    return (
        <section className="FeaturedTeacher">
            <h4>WORLD-CLASS INSTRUCTORS</h4>
            <h2>Classes Taught By Real Creators</h2>
            <div className="container sm:grid  grid-cols-4 gap-8">

                <div className="FeaturedTeacher__card">
                    <Image src={im1} alt="Teacher" />
                    <h5>Emilee Logan</h5>
                    <p>Master of Education Degree</p>
                    <div className="FeaturedTeacher__card--star">
                        <p><FaStar /></p>
                        <p><FaStar /></p>
                        <p><FaStar /></p>
                        <p><FaStar /></p>
                        <p><FaStar /></p>
                    </div>
                    <div className="FeaturedTeacher__card--cardFooter">
                        <p><FaBook /></p>
                        <p>8 Courses</p>
                        <p> <FaUsers /></p>
                        <p>30 Students</p>
                    </div>
                </div>

                <div className="FeaturedTeacher__card  text-center ">
                    <Image src={im2} alt="Picture of the author" />
                    <h5 className="pt-6">Donald Logan</h5>
                    <p>Master of Education Degree</p>
                    <div className="FeaturedTeacher__card--star">
                        <p><FaStar /></p>
                        <p><FaStar /></p>
                        <p><FaStar /></p>
                        <p><FaStar /></p>
                        <p><FaStar /></p>
                    </div>
                    <div className="FeaturedTeacher__card--cardFooter ">
                        <p><FaBook /></p>
                        <p>8 Courses</p>
                        <p> <FaUsers /></p>
                        <p>30 Students</p>
                    </div>
                </div>

                <div className="FeaturedTeacher__card  text-center ">
                    <Image src={im3} alt="Picture of the author" />
                    <h5 className="pt-6">Oliver Porter</h5>
                    <p>Master of Education Degree</p>
                    <div className="FeaturedTeacher__card--star">
                        <p><FaStar /></p>
                        <p><FaStar /></p>
                        <p><FaStar /></p>
                        <p><FaStar /></p>
                        <p><FaStar /></p>
                    </div>
                    <div className="FeaturedTeacher__card--cardFooter  ">
                        <p><FaBook /></p>
                        <p>8 Courses</p>
                        <p> <FaUsers /></p>
                        <p>30 Students</p>
                    </div>
                </div>

                <div className="FeaturedTeacher__card text-center ">
                    <Image src={im4} alt="Picture of the author" />
                    <h5 className="pt-6">Nahla Jones</h5>
                    <p>Master of Education Degree</p>
                    <div className="FeaturedTeacher__card--star">
                        <p><FaStar /></p>
                        <p><FaStar /></p>
                        <p><FaStar /></p>
                        <p><FaStar /></p>
                        <p><FaStar /></p>
                    </div>
                    <div className="FeaturedTeacher__card--cardFooter ">
                        <p><FaBook /></p>
                        <p>8 Courses</p>
                        <p> <FaUsers /></p>
                        <p>30 Students</p>
                    </div>
                </div>
            </div>
            <p className="pt-10 font-normal text-base font-bold">Want to help people learn, grow and achieve more in life? <span className="brown">Become an instructor</span></p>
        </section>
    );
};

export default FeaturedTeacher;