import React, { useEffect, useState } from "react";
import Sidebar from "../../Components/Navigation/AllPodcasts/Sidebar";
import CardItem from "../../Components/Navigation/AllPodcasts/CardItem";
import { useRouter } from "next/router";
import podcast from "../../models/podcast";
import { getCookie } from "cookies-next";
import { IoMdMenu } from "react-icons/io";

function Podcast({ data }) {
  const [ham, setham] = useState(false);
  const setHamMenu = () => {
    setham(!ham);
  };
  const router = useRouter();
  console.log(data);
  return (
    <div className="flex">
      <div
        className="absolute top-0 sm:hidden "
        onClick={() => {
          setham(!ham);
        }}
      >
        <IoMdMenu size={20} color="white"/>
      </div>
      
        <Sidebar setHamMenu={setHamMenu} ham={ham} />
      
      <div className="bg-[#0d1f29] h-screen">
        <div className="text-center font-bold text-2xl text-white ">
          {router.query.slug.toUpperCase()}
        </div>

        <CardItem title={router.query.slug} data={data} />
      </div>
    </div>
  );
}

export default Podcast;
export async function getServerSideProps(context) {
  let data;
  if (context.query.slug.toString() == "all") {
    data = await podcast.find();
  } else if (context.query.slug.toString() == "myPodcasts") {
    let req = context.req;
    let res = context.res;
    if (!getCookie("user", { req, res })) {
      return {
        redirect: {
          permanent: false,
          destination: "/login",
        },
        props: {},
      };
    }
    let resp = await fetch(
      "https://podcast-1a7qb74vk-soulpurr.vercel.app/api/myPodcast",
      {
        method: "GET",
        headers: {
          auth: getCookie("user", { req, res }),
        },
      }
    );
    // let resp = await fetch("http://localhost:3000/api/myPodcast", {
    //   method: "GET",
    //   headers: {
    //     auth: getCookie("user", { req, res }),
    //   },
    // });
    data = await resp.json();
  } else if (context.query.slug.toString() == "trending") {
    let d = await podcast.find();
    data = [];
    d.map((item) => {
      item.like > 1 ? data.push(item) : data.push();
    });
  } else {
    data = await podcast.find({ category: context.query.slug.toLowerCase() });
  }
  return {
    props: {
      data: JSON.parse(JSON.stringify(data)),
    }, // will be passed to the page component as props
  };
}
