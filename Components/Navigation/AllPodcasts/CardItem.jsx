import { useRouter } from "next/router";
import React from "react";
import { BsHandThumbsUpFill } from "react-icons/bs";
function CardItem(props) {
  const { title, data } = props;
  const router = useRouter();
  return (
    <div className="sm:ml-64 lg:ml-[20%]">
      <div className="p-3  sm:grid md:grid-cols-2 xl:grid-cols-4">
        {data.map((item) => (
          <div
            onClick={() => {
              router.push(`/Play/${item._id}`);
            }}
            key={item._id}
            className=" rounded-md group p-2 cursor-pointer transition-all duration-200 ease-in transform sm:hover:scale-105 hover:z-50  "
          >
            <img
              layout="responsive"
              src={`https://picsum.photos/200/100?random=${Math.random()}`}
              height={1080}
              width={1920}
            />
            <div className="">
              <h1 className="text-white text-xl transition-all duration-100 ease-in-out group-hover:font-extrabold font-semibold">
                {item.name}
              </h1>
              <div className="flex justify-between">
                <h1 className="text-white truncate items-center text-xl font-medium">
                  By-{item.speaker}
                </h1>
                <p className="opacity-0 group-hover:opacity-100">
                  <BsHandThumbsUpFill className="h-5 mx-3 cursor-pointer" />
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CardItem;
