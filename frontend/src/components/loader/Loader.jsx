// Loader.jsx
import React from 'react';
import loaderVid from "../../assets/loaderVid.mp4";

export default function Loader() {
  return (
    <div className="flex justify-center items-center h-screen bg-white">
      <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500 border-b-4 border-gray-200"></div>
      <span className="sr-only">Loading...</span>
      <video autoPlay muted loop src={loaderVid} ></video>
    </div>
  );
}
