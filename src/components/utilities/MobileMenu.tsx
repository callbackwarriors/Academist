import Logo from "assets/images/academist-logo.svg";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const MobileMenu = () => {
  return (
    <div className="p-4">
      <Link href="/">
        <a className="text-xl">
          <Image src={Logo} />
        </a>
      </Link>

      <ul className="mobile-menu">
        <li><Link href="/courses"><a>Courses</a></Link></li>
        <li><Link href="/instractors"><a>Instractors</a></Link></li>
        <li><Link href="/categories"><a>Categories</a></Link></li>
      </ul>
    </div>
  )
}

export default MobileMenu
