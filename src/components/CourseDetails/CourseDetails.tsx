import React, { useEffect, useState } from 'react';
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
import { ICourses } from 'type';

interface IProp {
    evt: ICourses;
}

const CourseDetails = ({ evt }: IProp) => {
    return (
        <div className="CourseDetails">
            <div className="banner">
                <Banner evt={evt}></Banner>
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
                        <CourseCard evt={evt}></CourseCard>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default CourseDetails;