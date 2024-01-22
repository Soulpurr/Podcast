import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <div className="flex justify-between px-4 pt-4 ml-20">
      <Link href={"/Podcast/trending"}>Home</Link>
      <h2>Welcome Back</h2>
    </div>
  );
};

export default Header;
