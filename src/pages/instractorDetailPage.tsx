import InstractorDetail from 'components/InstractorDetail/InstractorDetail';
import LargestCourse from 'components/LargestCourse/LargestCourse';
import Footer from 'components/utilities/Footer';
import Header from 'components/utilities/Header';
import React from 'react';

const instractorDetailPage = () => {
    return (
        <div>
            <Header/>
            <InstractorDetail/>
            <LargestCourse />
            <Footer/>
        </div>
    );
};

export default instractorDetailPage;