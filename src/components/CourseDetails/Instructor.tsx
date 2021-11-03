import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BsBook, BsCameraVideo } from "react-icons/bs";
import { FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { HiOutlineUserGroup } from "react-icons/hi";

const Instructor = ({ instructor }: any) => {
  const { img, name } = instructor;

  return (
    <div className="px-10 py-10 mt-10 mb-20 rounded-md shadow-lg tab1">
      <div className="largestCourse__cardSection">

        <div className="largestCourse__cardSection__image">
          <Image width="150" className="rounded-full" height="150" src={img} alt={name} />
        </div>
        {/* <div className="largestCourse__cardSection--imgSection ">
          <Image src={img} width="100" height="100" />
        </div> */}
        <div className="largestCourse__cardSection--TextSection">
          <h5>{name}</h5>
          <div className="flex justify-between details">
            <div className="flex leftSide">
              <h6>
                <BsCameraVideo />
              </h6>
              <p>80 Videos</p>
            </div>
            <div className="flex leftSide ">
              <h6>
                <BsBook />
              </h6>
              <p>102 Leacture</p>
            </div>

            <div className="flex leftSide">
              <h6>
                <HiOutlineUserGroup />
              </h6>
              <p>4 Year Ex</p>
            </div>
          </div>
          <p className="ml-5">
            At vero eos et accusamus et iusto odio dignissimos ducimus qui
            blanditiis pr.
          </p>

          <div className="flex justify-between mt-4 details">
            <div className="flex leftSide">
              {instructor?.facebook && (
                <Link href={instructor?.facebook} passHref>
                  <a target="_blank">
                    <h6 className="instructorIcons">
                      <FaFacebookF className="text-white" />
                    </h6>
                  </a>
                </Link>
              )}
              {instructor?.linkedIn && (
                <Link href={instructor?.linkedIn} passHref>
                  <a target="_blank">
                    <h6 className="instructorIcons">
                      <FaLinkedinIn className="text-white" />
                    </h6>
                  </a>
                </Link>
              )}
              {instructor?.twitter && (
                <Link href={instructor?.twitter} passHref>
                  <a target="_blank">
                    <h6 className=" instructorIcons">
                      <FaTwitter className="text-white" />
                    </h6>
                  </a>
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Instructor;
