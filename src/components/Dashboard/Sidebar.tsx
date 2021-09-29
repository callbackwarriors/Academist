import { useRouter } from 'next/dist/client/router';
import React from 'react';
import { AiOutlineFundProjectionScreen, AiOutlineUserAdd } from 'react-icons/ai';
import { BsBook, BsFillInboxesFill } from 'react-icons/bs';
import {GoReport} from 'react-icons/go';

import { GiTeacher } from 'react-icons/gi';
import { Navigation } from 'react-minimal-side-navigation';
import 'react-minimal-side-navigation/lib/ReactMinimalSideNavigation.css';
const Sidebar = () => {
  const router = useRouter();
 
    return (
        <>
       
           <nav className="w-60 bg-white m-5 origin-bottom-left">
           <Navigation
            // you can use your own router's api to get pathname
            activeItemId={router.pathname}
            onSelect={({itemId}) => {
              router.push({pathname:itemId})
              // maybe push to the route
            }}

            
            
            items={[
              {
                title: 'Dashboard',
                itemId: '/dashboard',
                // you can use your own custom Icon component as well
                // icon is optional
                elemBefore: () => <BsFillInboxesFill name="inbox" />,
              },
              {
                title: 'Users',
                itemId: '',
                elemBefore: () => <AiOutlineUserAdd name="users" />,
                subNav: [
                  {
                    title: 'Admin',
                    itemId: '/',
                  
                    // Requires v1.9.1+ (https://github.com/abhijithvijayan/react-minimal-side-navigation/issues/13)
                    elemBefore: () => <AiOutlineFundProjectionScreen name="project" />,
                  },
                  {
                    title: 'Teacher',
                    itemId: '/',
                    elemBefore: () => <GiTeacher name="teacher" />,
                  },
                  {
                    title: 'Student',
                    itemId: '/',
                    elemBefore: () => <BsBook name="book" />,
                  },
                  {
                    title: 'Manage courses',
                    itemId: '/dashboard/courses/managecourses',
                    elemBefore: () => <BsBook name="book" />,
                  },
                ],
              },
              {
                title: 'Another Item',
                itemId: '/',
                subNav: [
                  {
                    title: 'Teams',
                    itemId: '/',
                  },
                ],
              },
              {
                title:'Report',
                itemId:'',
                elemBefore: () => <GoReport name="inbox" />,
                subNav:[
                  {
                    title:'Admin Revenue',
                    itemId:'/dashboard/report/admin-revenue'
                  },
                  {
                    title:'Instructor Revenue',
                    itemId:'/dashboard/report/instructor-revenue'
                  }
                ]
              }
              
            ]}
          />
           </nav>

         


        </>
    );
};

export default Sidebar;