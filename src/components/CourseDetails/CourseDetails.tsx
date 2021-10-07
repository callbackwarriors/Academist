
   
import React from 'react';
import 'react-accessible-accordion/dist/fancy-example.css';
import "react-sweet-progress/lib/style.css";
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { ICourses } from 'type';
import Banner from './Banner';
import CourseCard from './CourseCard';
import Curriculam from './Curriculam';
import Instructor from './Instructor';
import Overview from './Overview';
import Review from './Review';
interface IProps {
    course: ICourses
}

const CourseDetails = ({course}:IProps) => {
    return (
        <div className="CourseDetails">
            <div className="banner" style={{ backgroundImage: `linear-gradient(rgb(91 79 238), rgb(91 79 238 / 47%)), url(${course.img})` }}>
                <Banner course={course}></Banner>
            </div>
            <div className="pt-5 body">
                <div className="container grid grid-cols-3 ">
                    <div className="col-span-2 leftSide">
                        <Tabs>
                            <TabList>
                                <Tab>Overview</Tab>
                                <Tab>Curriculum</Tab>
                                <Tab>Instructor</Tab>
                                <Tab>Reviews </Tab>
                            </TabList>

                            <TabPanel>
                                <Overview></Overview>
                            </TabPanel>

                            <TabPanel>
                                <Curriculam></Curriculam>
                            </TabPanel>
                            <TabPanel>
                                <Instructor></Instructor>
                            </TabPanel>
                            <TabPanel>
                                <Review></Review>
                            </TabPanel>
                        </Tabs>
                    </div>
                    <div className="rightSide">
                        <CourseCard course={course}></CourseCard>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default CourseDetails;