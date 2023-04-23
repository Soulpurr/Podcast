import React, { useEffect } from "react";
import Header from "../../Components/Navigation/Admin/Header";
import Sidebar from "../../Components/Navigation/Admin/Sidebar";
import TopCards from "../../Components/Navigation/Admin/Topcards";
import Barchart from "../../Components/Navigation/Admin/Barchart";
import Recent from "../../Components/Navigation/Admin/Recent";
import { getCookie } from "cookies-next";
import { useRouter } from "next/router";
function Dashboard({ data }) {
  // console.log(localStorage.getItem("isAdmin"))
  const router = useRouter();
  useEffect(() => {
    if (localStorage.getItem("isAdmin").toString() == "false") {
      router.push("/Podcast/trending");
    }
  }, []);

  console.log(data);
  return (
    <main className="bg-gray-100 min-h-screen ">
      <Sidebar />
      <Header />
      <TopCards />
      <div className="p-4 grid md:grid-cols-3 grid-cols-1 gap-4">
        <Barchart />
        <Recent data={data} />
      </div>
    </main>
  );
}

export default Dashboard;
export async function getServerSideProps(context) {
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
  let data;
  let resp = await fetch(
    "https://podcast-1a7qb74vk-soulpurr.vercel.app/api/adminPodcasts",
    {
      method: "GET",
      headers: {
        auth: getCookie("user", { req, res }),
      },
    }
  );
  // let resp = await fetch("http://localhost:3000/api/adminPodcasts", {
  //   method: "GET",
  //   headers: {
  //     auth: getCookie("user", { req, res }),
  //   },
  // });
  data = await resp.json();

  return {
    props: {
      data: JSON.parse(JSON.stringify(data)),
    }, // will be passed to the page component as props
  };
}
