import React, { useState } from "react";
import { BsFillMicFill } from "react-icons/bs";
import { FcLike } from "react-icons/fc";
import { MdArrowDownward } from "react-icons/md";
import { AiOutlineClose } from "react-icons/ai";
import { HiOutlineTrendingUp } from "react-icons/hi";
import { DiTechcrunch } from "react-icons/di";
import { GiDistraction } from "react-icons/gi";
import { GrLogout } from "react-icons/gr";
import { GrUserAdmin } from "react-icons/gr";
import { deleteCookie } from "cookies-next";

import { GiHomeGarage, GiHamburgerMenu } from "react-icons/gi";
import Link from "next/link";
import SearchBar from "../SearchBar";


function Sidebar({ ham, setHamMenu }) {
  const [ham1, setham] = useState(false);
  return (
    <div
      className={`${
        ham ? "absolute " : "hidden sm:flex"
      } z-10 overflow-y-hidden scroll-  h-screen sm:fixed w-full shadow-2xl bg-slate-800 flex sm:max-w-[20%] flex-col pr-7 py-6 rounded-y-[30.822px]`}
    >
      <div className="flex items-stretch gap-3.5 mt-1">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/6eedf53d537c6f249b8c7021a15d56d6ae120266f12680372f7378f195d51426?apiKey=e74082b80b2042a383841c0a6d125528&"
          className="aspect-square object-contain object-center w-[22px] overflow-hidden shrink-0 max-w-full"
        />
        <div className="text-white  text-lg font-extrabold self-center my-auto">
          spot
        </div>
      </div>
      <div
        className="absolute right-0 top-0 sm:hidden"
        onClick={() => setHamMenu(!ham)}
      >
        <AiOutlineClose color="white" size={30} />
      </div>

      <img
        loading="lazy"
        srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/5abd9b49ba93b8e383450d70d024b1d5533c4a666a2a7e21c8edeed06f0577ec?apiKey=e74082b80b2042a383841c0a6d125528&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/5abd9b49ba93b8e383450d70d024b1d5533c4a666a2a7e21c8edeed06f0577ec?apiKey=e74082b80b2042a383841c0a6d125528&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/5abd9b49ba93b8e383450d70d024b1d5533c4a666a2a7e21c8edeed06f0577ec?apiKey=e74082b80b2042a383841c0a6d125528&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/5abd9b49ba93b8e383450d70d024b1d5533c4a666a2a7e21c8edeed06f0577ec?apiKey=e74082b80b2042a383841c0a6d125528&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/5abd9b49ba93b8e383450d70d024b1d5533c4a666a2a7e21c8edeed06f0577ec?apiKey=e74082b80b2042a383841c0a6d125528&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/5abd9b49ba93b8e383450d70d024b1d5533c4a666a2a7e21c8edeed06f0577ec?apiKey=e74082b80b2042a383841c0a6d125528&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/5abd9b49ba93b8e383450d70d024b1d5533c4a666a2a7e21c8edeed06f0577ec?apiKey=e74082b80b2042a383841c0a6d125528&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/5abd9b49ba93b8e383450d70d024b1d5533c4a666a2a7e21c8edeed06f0577ec?apiKey=e74082b80b2042a383841c0a6d125528&"
        className="aspect-[0.98] object-contain object-center w-[59px] overflow-hidden self-center max-w-full mt-10 rounded-[50%]"
      />
      <div className="text-white text-lg font-semibold self-center whitespace-nowrap mt-3">
        Aman
      </div>

      <div className="flex flex-col space-y-12 mx-auto ">
        <Link href={"/Podcast/all"} className="flex items-stretch gap-4 mt-8 btn data-container">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/5a18ee90da883e9607a3862a136ffb7b20a2787ff3fbbb8979a6cd3cea06b787?apiKey=e74082b80b2042a383841c0a6d125528&"
            className="aspect-[0.95] object-contain object-center w-[18px] overflow-hidden shrink-0 max-w-full"
          />
          <div className="text-white text-lg cursor-pointer font-semibold self-center my-auto">
            Podcasts
          </div>
        </Link>
        <Link
          href={"/Podcast/myPodcasts"}
          className="flex items-stretch gap-4 mt-8 btn data-container"
        >
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/5a18ee90da883e9607a3862a136ffb7b20a2787ff3fbbb8979a6cd3cea06b787?apiKey=e74082b80b2042a383841c0a6d125528&"
            className="aspect-[0.95] object-contain object-center w-[18px] overflow-hidden shrink-0 max-w-full"
          />
          <div className="text-white text-lg cursor-pointer font-semibold self-center my-auto">
            My Podcasts
          </div>
        </Link>
        <Link
          href={"/Podcast/trending"}
          className="flex items-stretch gap-4 mt-8 btn data-container"
        >
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/5a18ee90da883e9607a3862a136ffb7b20a2787ff3fbbb8979a6cd3cea06b787?apiKey=e74082b80b2042a383841c0a6d125528&"
            className="aspect-[0.95] object-contain object-center w-[18px] overflow-hidden shrink-0 max-w-full"
          />
          <div className="text-white text-lg cursor-pointer font-semibold self-center my-auto">
            Trending
          </div>
        </Link>
        <Link
          href={"/Podcast/technology"}
          className="flex items-stretch gap-4 mt-8 btn data-container"
        >
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/5a18ee90da883e9607a3862a136ffb7b20a2787ff3fbbb8979a6cd3cea06b787?apiKey=e74082b80b2042a383841c0a6d125528&"
            className="aspect-[0.95] object-contain object-center w-[18px] overflow-hidden shrink-0 max-w-full"
          />
          <div className="text-white text-lg cursor-pointer font-semibold self-center my-auto">
            Technology
          </div>
        </Link>
        <Link
          href={"/admin/dashboard"}
          className="flex items-stretch gap-4 mt-8 btn data-container"
        >
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/5a18ee90da883e9607a3862a136ffb7b20a2787ff3fbbb8979a6cd3cea06b787?apiKey=e74082b80b2042a383841c0a6d125528&"
            className="aspect-[0.95] object-contain object-center w-[18px] overflow-hidden shrink-0 max-w-full"
          />
          <div className="text-white text-lg cursor-pointer font-semibold self-center my-auto">
            Admin
          </div>
        </Link>

        <Link
          onClick={() => {
            localStorage.clear(),
              deleteCookie("user"),
              window.location.reload();
          }}
          href={"/"}
          className="hover:text-blue-600 bg-[#7C71FF] cursor-pointer items-center rounded-2xl flex space-x-4 py-2 mt-5 px-4"
        >
          <div className="">
            <GrLogout size={25} />
          </div>
          <div className="text-xl font-semibold">LogOut</div>
        </Link>
      </div>
    </div>
  );
}

export default Sidebar;
