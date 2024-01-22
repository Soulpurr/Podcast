import { useState } from "react";

function UploadButton(props) {
  const [selectedFile, setSelectedFile] = useState(null);

  function handleFileInputChange(event) {
    setSelectedFile(event.target.files[0]);
    props.link='122'
  }

  return (
    <div className="flex flex-col items-center">
      <label className="text-gray-700 font-bold mb-2" htmlFor="file-input">
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
  );
}
export default UploadButton;
