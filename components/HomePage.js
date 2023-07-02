import React from "react";
 
export default function HomePage() {
  return (
    <div className="flex items-center justify-center h-screen text-center custom-img" id="home">
      {/* Overlay */}
      <div className=" absolute top-0 left-0 right-0 bottom-0 bg-black/70 z-1" />

      <div className=" text-white">
        <p className=" text-2xl">Hello</p>
        <h1 className=" font-bold text-6xl pb-7 pt-5">I'M EMMA BALIX</h1>
        <p className=" text-2xl pb-5">software developer</p>
        <button className=" px-8 py-2 bg-red-600 ">Hire Me</button>
      </div>
    </div>
  ); 
}