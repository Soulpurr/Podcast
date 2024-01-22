import React from "react";
import { data } from "../../../data/data";
import { FaShoppingBag } from "react-icons/fa";
import { FcLike } from "react-icons/fc";

const Recent = ({data}) => {
  return (
    <div className="ml-20 w-[88%] sm:w-[80%] col-span-1 relative lg:h-[70vh] h-[50vh] m-auto p-4 border rounded-lg bg-white overflow-scroll">
      <h1>Recent Likes</h1>
      <ul>
        {data.map((item) => (
          <li
            key={item._id}
            className="bg-gray-50 hover:bg-gray-100 rounded-lg my-3 p-2 flex items-center cursor-pointer"
          >
            <div className="bg-purple-100 rounded-lg p-3">
              <FcLike className="text-purple-800" />
            </div>
            <div className="pl-4">
              <p className="text-gray-800 font-bold">+{item.like}</p>
              <p className="text-gray-400 text-sm">{item.name}</p>
            </div>
            <p className="lg:flex md:hidden absolute right-6 text-sm">
              {item.createdAt.slice(2,10)}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Recent;
