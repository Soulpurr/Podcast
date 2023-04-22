import React, { useState } from "react";
import { BsFillMicFill } from "react-icons/bs";
import { FcLike } from "react-icons/fc";
import { MdArrowDownward } from "react-icons/md";
import { AiOutlineClose } from "react-icons/ai";
import { HiOutlineTrendingUp } from "react-icons/hi";
import { DiTechcrunch } from "react-icons/di";
import { GiDistraction } from "react-icons/gi";
import { RiPsychotherapyLine } from "react-icons/ri";

import { GiHomeGarage, GiHamburgerMenu } from "react-icons/gi";
import Link from "next/link";

function Sidebar() {
  const [ham, setham] = useState(false);
  return (
    <>
      <div
        className={`${ham ? "hidden" : ""} ham sm:hidden cursor-pointer`}
        onClick={() => {
          setham(!ham);
        }}
      >
        <GiHamburgerMenu size={25} />
      </div>
      <div
        className={`${
          ham ? "flex flex-col" : "hidden"
        } w-[60%] sm:w-[25%] bg-slate-300 h-full sm:flex sm:flex-col fixed`}
      >
        <div
          className={`${ham ? "" : "hidden"} sm:hidden`}
          onClick={() => {
            setham(!ham);
          }}
        >
          <AiOutlineClose size={25} />
        </div>
        <Link
          href={"/Podcast/all"}
          className="hover:text-blue-600 cursor-pointer hover:animate-bounce flex space-x-10 mt-10 p-4"
        >
          <div className="">
            <BsFillMicFill size={25} />
          </div>
          <div className=" text-xl font-semibold">Podcasts</div>
        </Link>
        <Link
          href={"/Podcast/myPodcasts"}
          className="hover:text-blue-600 cursor-pointer hover:animate-bounce flex space-x-10 mt-10 p-4"
        >
          <div className="">
            <GiHomeGarage size={25} />
          </div>
          <div className="text-xl font-semibold">My Podcasts</div>
        </Link>
        <Link
          href={"/Podcast/trending"}
          className="hover:text-blue-600 cursor-pointer hover:animate-bounce flex space-x-10 mt-10 p-4"
        >
          <div className="">
            <HiOutlineTrendingUp size={25} />
          </div>
          <div className="text-xl font-semibold">Trending</div>
        </Link>
        <Link
          href={"/Podcast/technology"}
          className="hover:text-blue-600 cursor-pointer hover:animate-bounce flex space-x-10 mt-10 p-4"
        >
          <div className="">
            <DiTechcrunch size={25} />
          </div>
          <div className="text-xl font-semibold">Technology</div>
        </Link>
        <Link
          href={"/Podcast/action"}
          className="hover:text-blue-600 cursor-pointer hover:animate-bounce flex space-x-10 mt-10 p-4"
        >
          <div className="">
            <GiDistraction size={25} />
          </div>
          <div className="text-xl font-semibold">Action</div>
        </Link>
        <Link
          href={"/Podcast/others"}
          className="hover:text-blue-600 cursor-pointer hover:animate-bounce flex space-x-10 mt-10 p-4"
        >
          <div className="">
            <RiPsychotherapyLine size={25} />
          </div>
          <div className="text-xl font-semibold">Others</div>
        </Link>
        <Link
          href={"/Podcast/liked"}
          className="hover:text-blue-600 cursor-pointer hover:animate-bounce flex space-x-10 mt-10 p-4"
        >
          <div className="">
            <FcLike size={25} />
          </div>
          <div className="text-xl font-semibold">Liked</div>
        </Link>
      </div>
    </>
  );
}

export default Sidebar;
