import Logo from "assets/images/academist-logo.svg";
import Image from "next/image";
import Link from "next/link";
import React from 'react';
import { AiOutlineCloseSquare, AiOutlineShoppingCart } from 'react-icons/ai';
import { FiMenu } from 'react-icons/fi';
import Drawer from 'react-modern-drawer';
import 'react-modern-drawer/dist/index.css';
import Usermenu from './Usermenu';

const Header = () => {
  const [isOpen, setIsOpen] = React.useState(false)
  const toggleDrawer = () => {
      setIsOpen((prevState) => !prevState)
  }
  return (
      <header className="text-gray-600 body-font">
        <div className="container mx-auto flex flex-wrap p-5 items-center justify-between">
          <span className="hidden lg:block flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <Link href="/">
              <a className="ml-3 text-xl">
                <Image src={Logo} />
              </a>
            </Link>
          </span>

          <button className="text-3xl inline-block lg:hidden" onClick={toggleDrawer}>
            <FiMenu/>
          </button>
        <Drawer open={isOpen} onClose={toggleDrawer} direction='left'>
          <div onClick={toggleDrawer} className="close p-3 text-royal-blue text-2xl text-right overflow-hidden">
          <AiOutlineCloseSquare className="float-right"/>
          </div>
            <div className="p-4">            <Link href="/">
              <a className="text-xl">
                <Image src={Logo} />
              </a>
            </Link></div>
        </Drawer>

          <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center hidden lg:block">
            <a className="mr-5 hover:text-gray-900">Course</a>
            <a className="mr-5 hover:text-gray-900">Teachers</a>
            <a className="mr-5 hover:text-gray-900">Offers</a>
            <a className="mr-5 hover:text-gray-900">Review</a>

            <Link href="/courseDetails"><a className="mr-5 hover:text-gray-900">Course Details</a></Link>
 

              <Link href="/category">
                  <a className="mr-5 hover:text-gray-900">Category</a>
              </Link>          
            </nav>

           
            <span className="relative inline-block mr-6">
 
  <span className="cart__ico text-xl"><AiOutlineShoppingCart /></span>
  <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 transform translate-x-1/2 -translate-y-1/2 bg-royal-blue rounded-full">1</span>
</span>


          <Link href="/login">
            <a>
              <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base  md:mt-0">
                Login/Registation
              </button>
            </a>
          </Link>
          <Usermenu/>
        </div>
      </header>
  );
};

export default Header;