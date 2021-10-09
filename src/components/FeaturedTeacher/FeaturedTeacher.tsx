import im1 from 'assets/images/01.jpg'
import im2 from 'assets/images/02.jpg'
import im3 from 'assets/images/03.jpg'
import im4 from 'assets/images/04.jpg'
import Title from 'components/utilities/Title'
import Image from 'next/image'
import { FaBook, FaStar, FaUsers } from 'react-icons/fa'

const FeaturedTeacher = () => {
    return (
        <section className="FeaturedTeacher">

            <Title subtitle="WORLD-CLASS INSTRUCTORS" title="Taught By Real Creators" description=""/>
            <div className="container">
                <div className="grid lg:grid-cols-4 sm:grid-cols-2 gap-4">

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
            </div>
            <p className="pt-10 font-normal text-base font-bold">Want to help people learn, grow and achieve more in life? <span className="brown">Become an instructor</span></p>
        </section>
    );
};

export default FeaturedTeacher;