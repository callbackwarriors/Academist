import Logo from "assets/images/academist-logo.svg";
import Image from "next/image";
import Link from "next/link";
const Header = () => {
  return (
      <header className="text-gray-600 body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <span className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <Link href="/">
              <span className="ml-3 text-xl">
                <Image src={Logo} />
              </span>
            </Link>
          </span>
          <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
            <a className="mr-5 hover:text-gray-900">Course</a>
            <a className="mr-5 hover:text-gray-900">Teachers</a>
            <a className="mr-5 hover:text-gray-900">Offers</a>
            <a className="mr-5 hover:text-gray-900">Review</a>

            <Link href="/courseDetails"><a className="mr-5 hover:text-gray-900">Course Details</a></Link>
 

              <Link href="/category">
                  <a className="mr-5 hover:text-gray-900">Category</a>
              </Link>          
            </nav>

          <Link href="/login">
            <a>
              <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
                Login/Registation
              </button>
            </a>
          </Link>
        </div>
      </header>
  );
};

export default Header;