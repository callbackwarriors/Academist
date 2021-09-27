import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import 'react-accessible-accordion/dist/fancy-example.css';
import "react-sweet-progress/lib/style.css";
import Banner from './Banner';
import Overview from './Overview';
import Curriculam from './Curriculam';
import Instructor from './Instructor';
import Review from './Review';
import CourseCard from './CourseCard';

const CourseDetails = () => {
    return (
        <div className="CourseDetails">
            <div className="banner">
                <Banner></Banner>
            </div>
            <div className="body pt-5">
                <div className="container grid grid-cols-3 ">
                    <div className="leftSide col-span-2">
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
                      <CourseCard></CourseCard>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default CourseDetails;