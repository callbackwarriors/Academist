import React from 'react';
import { BsFillInboxesFill } from 'react-icons/bs';
import { AiOutlineFundProjectionScreen, AiOutlineUserAdd } from 'react-icons/ai';
import { GiTeacher } from 'react-icons/gi';
import { BsBook } from 'react-icons/bs';
import {Navigation} from 'react-minimal-side-navigation';
import 'react-minimal-side-navigation/lib/ReactMinimalSideNavigation.css';
import { useRouter } from 'next/dist/client/router';
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
                itemId: '/courseDetails',
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
                ],
              },
              {
                title: 'Courses',
                itemId: '',
                subNav: [
                  {
                    title: 'Manage Courses',
                    itemId: '',
                  },
                  {
                    title: 'Add New Course',
                    itemId: '',
                  },
                ],
              },
              
            ]}
          />
           </nav>

         


        </>
    );
};

export default Sidebar;