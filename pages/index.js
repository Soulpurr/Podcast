import Link from "next/link";
import { useEffect } from "react";
import { getCookie } from "cookies-next";
import { useRouter } from "next/router";
import podcast from "../models/podcast";
import connectMongo from "../middleware/connectTodb";
function HomePage() {
  const router = useRouter();
  useEffect(() => {
    if (localStorage.getItem("user") || getCookie("user")) {
      router.push("/Podcast/Trending");
    }
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-900">
      <video
        className="z-0 absolute inset-0 w-full h-full object-cover"
        src="https://cdn.pixabay.com/vimeo/817104245/Sunset%20-%20153976.mp4?width=1280&hash=48a84b0cdae7c832041e44448c59047db14dc27d"
        muted
        loop
        autoPlay
      ></video>
      <div className="z-10 relative p-8 bg-white rounded-md shadow-lg">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">Welcome!</h2>
        <div className="flex flex-col sm:flex-row">
          <Link
            href="/login"
            className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded mb-4 sm:mb-0 sm:mr-4 w-full sm:w-auto"
          >
            Continue with login
          </Link>
          <Link
            href="/Podcast/trending"
            className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded w-full sm:w-auto"
          >
            Continue without login
          </Link>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
export async function getServerSideProps(context) {
  await connectMongo()
  let data=await podcast.find()
  return {
    props: {}, // will be passed to the page component as props
  }
}