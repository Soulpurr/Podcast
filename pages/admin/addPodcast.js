import { useState } from "react";
import Sidebar from "../../Components/Navigation/Admin/Sidebar";
import Header from "../../Components/Navigation/Admin/Header";
import { toast } from "react-toastify";
import { useRouter } from "next/router";

function PodcastForm() {
  const router = useRouter();
  const [recieved, setrecieved] = useState(true);
  const [selectedFile, setSelectedFile] = useState(null);
  const [image, setimage] = useState();
  const handleImage = async (e) => {
    setrecieved(false);
    let data = new FormData();
    e.preventDefault();
    data.append("file", image);
    data.append("cloud_name", "dkjsazmhu");
    data.append("api_key", "293469851296426");
    data.append("api_secret", "-sjV20vKr76U_NheYazXY5qW8wE");
    // data.append("upload_preset", "ml_default");
    data.append("upload_preset", "podcast");
    data.append("resource_type", "video");
    // let img = await postImage(data);
    let img = await fetch(
      "https://api.cloudinary.com/v1_1/dkjsazmhu/video/upload",
      {
        method: "POST",
        body: data,
        header: {
          "Content-type": "application/json; charset=UTF-8",
          "X-Requested-With": "XMLHttpRequest",
          "Allow-Control-Allow-Origin": "*",
          "Access-Control-Allow-Origin": "*",
        },
      }
    );
    // setdata({ link: img.data.secure_url });
    let asset = await img.json();
    console.log(asset.secure_url);
    setrecieved(true);
    setFormValues({ ...formValues, link: asset.secure_url });
  };
  function handleFileInputChange(event) {
    setimage(event.target.files[0]);
    setSelectedFile(event.target.files[0]);
  }
  const [formValues, setFormValues] = useState({
    name: "",
    description: "",
    type: "",
    category: "",
    speaker: "",
    link: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    let data = await fetch("/api/addPodcast", {
      method: "POST",
      body: JSON.stringify(formValues),
      headers: {
        auth: localStorage.getItem("user"),
      },
    });
    let res = await data.json();
    toast("🦄Podcast Added", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
    console.log(res);
    router.push("/admin/dashboard");
  };

  return (
    <>
      <Sidebar />
      <Header />
      <div className=" bg-gradient-to-r from-indigo-500 to-purple-500 min-h-screen flex flex-col justify-center items-center">
        <form className="ml-20 sm:ml w-[73%] mt-20 sm:w-full max-w-lg bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold mb-8 text-gray-800">
            Create New Event
          </h2>

          <div className="mb-4">
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="name"
            >
              Name
            </label>
            <input
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="name"
              type="text"
              name="name"
              value={formValues.name}
              onChange={handleChange}
            />
          </div>

          <div className="mb-4">
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="description"
            >
              Description
            </label>
            <textarea
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="description"
              name="description"
              value={formValues.description}
              onChange={handleChange}
            />
          </div>

          <div className="mb-4">
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="type"
            >
              Type
            </label>
            <input
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="type"
              type="text"
              name="type"
              value={formValues.type}
              onChange={handleChange}
            />
          </div>

          <div className="mb-4">
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="category"
            >
              Category
            </label>
            <input
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="category"
              type="text"
              name="category"
              value={formValues.category}
              onChange={handleChange}
            />
          </div>

          <div className="mb-4">
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="speaker"
            >
              Speaker
            </label>
            <input
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="speaker"
              type="text"
              name="speaker"
              value={formValues.speaker}
              onChange={handleChange}
            />
          </div>

          <div className="mb-4     ">
            <div className="flex flex-col items-center">
              <label
                className="text-gray-700 font-bold mb-2"
                htmlFor="file-input"
              >
                Upload file
              </label>
              <div className="relative w-64 h-40 rounded-lg overflow-hidden">
                {selectedFile ? (
                  <img
                    src={URL.createObjectURL(selectedFile)}
                    alt="File preview"
                    className="object-cover w-full h-full"
                  />
                ) : (
                  <svg
                    className="absolute top-0 left-0 w-full h-full text-gray-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                    ></path>
                  </svg>
                )}
              </div>
              <input
                id="file-input"
                type="file"
                className="hidden"
                onChange={handleFileInputChange}
              />
            </div>
            <div className="flex justify-between">
              <button
                className="mt-3 border-solid border-2 p-1 rounded-lg bg-blue-400 px-6 border-black"
                onClick={handleImage}
              >
                Upload
              </button>
              <div
                className={`${
                  recieved ? "hidden" : "flex"
                } justify-center items-center`}
              >
                <div className="w-8 h-8 border-4 border-t-4 border-red-800 rounded-full animate-spin"></div>
              </div>
            </div>
          </div>

          <button
            className="bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
            onClick={handleSubmit}
          >
            Save
          </button>
        </form>
      </div>
    </>
  );
}
export default PodcastForm;
