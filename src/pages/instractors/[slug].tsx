import InstractorDetail from 'components/InstractorDetail/InstractorDetail';
import LargestCourses from 'components/LargestCourses/LargestCourses';
import Footer from 'components/utilities/Footer';
import Header from 'components/utilities/Header';
import React from 'react';

const instractorDetail = () => {
    return (
        <div>
            <Header/>
            <InstractorDetail/>
            <LargestCourses />
            <Footer/>
        </div>
    );
};

export default instractorDetail;