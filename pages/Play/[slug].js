import React, { useEffect, useState } from "react";
import podcast from "../../models/podcast";
import { FcLike } from "react-icons/fc";
import { AiFillHome, AiOutlineDownload } from "react-icons/ai";

import { BiMessageSquareAdd } from "react-icons/bi";
import { useRouter } from "next/router";
import Link from "next/link";

const Play = ({ data }) => {
  const [disabled, setdisabled] = useState(false);
  const [disabled1, setdisabled1] = useState(false);
  console.log(localStorage.getItem("user"));
  const router = useRouter();
  const handleSave = async (e) => {
    e.preventDefault();
    let like = await fetch("/api/savePodcast", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        auth: localStorage.getItem("user"),
      },
    });
    let res = await like.json();

    setdisabled(true);

    console.log(res);
  };
  const handlelike = async (e) => {
    e.preventDefault();
    let id = router.query.slug;
    let like = await fetch("/api/like", {
      method: "POST",
      body: JSON.stringify(id),
    });
    let res = await like.json();
    setdisabled1(true);
    console.log(res);
  };

  console.log(data);
  return (
    <div className="bg-gray-900 min-h-screen flex flex-col justify-center items-center">
      <video className="max-w-full max-h-96" controls src={data.link} />
      <div className="flex flex-col items-center mt-8">
        <h1 className="text-4xl text-white">{data.name}</h1>
        <p className="text-lg text-gray-400">{data.speaker}</p>
        <div className="flex mt-4">
          <button
            disabled={disabled1}
            onClick={handlelike}
            className="hover:bg-blue-200 bg-white text-gray-900 rounded-full py-2 px-4"
          >
            <FcLike size={20} className="fas fa-step-backward" />
          </button>
          <button className="hover:bg-blue-200 bg-white text-gray-900 rounded-full py-2 px-4 mx-4">
            <AiOutlineDownload size={20} className="fas fa-play" />
          </button>
          <button
            disabled={disabled}
            onClick={handleSave}
            className="hover:bg-blue-200 bg-white text-gray-900 rounded-full py-2 px-4"
          >
            <BiMessageSquareAdd size={20} className="fas fa-step-forward" />
          </button>
          <Link
            href={"/Podcast/trending"}
            className="ml-2 hover:bg-blue-200 bg-white text-gray-900 rounded-full py-2 px-4"
          >
            <AiFillHome size={20} className="fas fa-step-forward" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Play;
export async function getServerSideProps(context) {
  let data = await podcast.findById(context.query.slug);
  console.log(data);
  return {
    props: {
      data: JSON.parse(JSON.stringify(data)),
    },
  };
}
