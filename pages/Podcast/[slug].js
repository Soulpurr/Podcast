import React from "react";
import Sidebar from "../../Components/Navigation/AllPodcasts/Sidebar";
import CardItem from "../../Components/Navigation/AllPodcasts/CardItem";
import { useRouter } from "next/router";

function Podcast() {
  const router = useRouter();
  console.log(router.query.slug)
  return (
    <div>
      <Sidebar />

      <CardItem title={router.query.slug} />
    </div>
  );
}

export default Podcast;
