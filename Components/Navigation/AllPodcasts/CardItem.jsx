import React from "react";

function CardItem(props) {
  return (
    <div className="sm:ml-64 lg:ml-96">
      <div className="text-2xl font-bold text-center ">{props.title.toUpperCase()}</div>
      <div className="flex flex-col justify-center items-center sm:grid sm:grid-cols-2 sm:gap-2  lg::grid-cols-3 ">
        <div className="mt-12 lg hover:bg-slate-100 cursor-pointer hover:animate-pulse flex flex-col items-center justify-center bg-white w-[90%] lg:w-[48%] h-48 shadow-lg rounded-lg overflow-hidden ">
          <div className="flex justify-center">
            <img
              className=" justify-center w-40 lg:w-[75%] h-30 object-cover"
              src="https://source.unsplash.com/random"
              alt="Card"
            />
          </div>
          <h3 className="font-semibold text-lg  text-center">Card Title</h3>
          <h3 className="font-semibold text-lg text-center">By-HH</h3>
        </div>
      </div>
    </div>
  );
}

export default CardItem;
