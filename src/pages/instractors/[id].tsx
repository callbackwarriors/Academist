import Footer from 'components/utilities/Footer';
import Header from 'components/utilities/Header';
import React from 'react';
import { ICourses } from "type";
interface IProps {
    course: ICourses;
  }

const instractorDetail = (props: IProps) => {

    return (
        <div>
            <Header/>
            {/* <InstractorDetail/>
            <LargestCourses /> */}
            <Footer/>
        </div>
    );
};

export default instractorDetail;

