import React from "react";
import CardItem from "../../Components/Navigation/AllPodcasts/CardItem";
import podcast from "../../models/podcast";
import Sidebar from "../../Components/Navigation/AllPodcasts/Sidebar";

function SearchItem(data) {
  console.log(data.data);

  return (
    <div>
        <Sidebar/>
      <CardItem data={data.data} />
    </div>
  );
}

export default SearchItem;
export async function getServerSideProps(context) {
  let data = await podcast.find({ name: context.query.slug });

  return {
    props: {
      data: JSON.parse(JSON.stringify(data)),
    }, // will be passed to the page component as props
  };
}
