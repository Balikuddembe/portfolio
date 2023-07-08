import React from "react";
import Link from "next/link.js";
import Image from "next/image";
import { AiOutlinePhone, AiOutlineMail } from "react-icons/ai";

const About = () => {
  return (
    <section className="bg-black flex" id="about">
      <div className=' ml-72 '>
        <div className="text-white pt-24 flex font-semibold space-x-2">
          <span className="text-rose-700 text-3xl">|</span>
          <h2 className="text-3xl">About</h2>
        </div>

        <div className="mt-8">
          <h2 className="text-2xl font-bold text-white">I am a Software Developer</h2>
          <p className="mt-4 max-w-xl text-slate-400">
            Hi! My name is EMMANUEL BALIKUDDEMBE. I started my learning journey Two years ago. I have learned a lot of stuff during this period including Web Development (Front-end and back-end). Now I'm working with the React framework for the front-end and Spring Boot framework for the backend.
          </p>
          <div className="max-w-xl flex mt-6 mb-20 space-x-4">
            <div className="px-8 py-2 bg-rose-600 text-white border-2 border-rose-600 hover:bg-gray-950">
              <Link href="">Hire Me</Link>
            </div>
            <div className="border-2 px-4 py-2 text-white border-rose-600 hover:bg-rose-600">
              <Link href="">Download CV</Link>
            </div>
          </div>
        </div>

        <div className="ml-1 flex space-x-6 text-center">
          <div className="mt-4 bg-zinc-900 w-72 py-4 mb-16 outline hover:outline-rose-700 outline-1">
            <div className=" pl-32 font-bold pb-2">
              <AiOutlinePhone size={25} className="text-rose-700" />
            </div>

            <p className="pb-1 font-bold text-white">Phone</p>
            <p className=" text-slate-400">+256 777 923 074</p>
          </div>

          <div className="mt-4 bg-zinc-900 w-72 py-4 mb-16 outline hover:outline-rose-700 outline-1">
            <div className="pl-32 pb-2">
              <AiOutlineMail size={25} className="text-rose-700" />
            </div>

            <p className="pb-1 font-bold text-white">Email</p>
            <p className=" text-slate-400">balixemma@gmail.com</p>
          </div>
        </div>
      </div>

      <div className="flex items-center w-1/3 justify-end">
        <Image src="/profile.jpg" alt="Profile Image" width={500} height={300} className="ml-auto w-80 h-96 mt-20" />
      </div>
    </section>
  );
};

export default About;

