import React from "react";
import Link from "next/link";
import {AiOutlinePhone, AiOutlineMail, HiOutlineMail} from "react-icons/ai"

const About = () => {
    return (
        <section className=" bg-black ">
            <div className="ml-72">
                <div class=" text-white pt-24 flex font-semibold space-x-2">
                    <span className=" text-rose-700 text-3xl">|</span><h2 className=" text-3xl">About</h2>
                </div>

                <div className="mt-8">
                    <h2 className=" text-2xl font-bold text-white">I am a Software Developer</h2>
                    <p className="mt-4 max-w-xl text-slate-400">
                        Hi! My name is EMMANUEL BALIKUDDEMBE.I started my learning journey Two years a go. I have Learned a lot of stuff
                        during this period including Web Development(Front-end and back-end)
                        Now I'm Working with React framework for the front-end and
                        Spring Boot framework for the backend.
                    </p>
                    <div className=" flex mt-4 space-x-4">
                        <div className="px-8 py-2 bg-rose-600 text-white border-2 border-rose-600 hover:bg-gray-950 ">
                            <Link href="" >Hire Me</Link>
                        </div>
                        <div className=" border-2 px-4 py-2 text-white border-rose-600 hover:bg-rose-600">
                            <Link href="">Download CV</Link>
                        </div>

                    </div>
                </div>

                <div className="flex items-center justify-end">
                    <img src="../public/banner.jpg" alt="Profile Image" className=" w-60 h-20" />
                </div>
            

            <div className=" ml-1 flex space-x-6 text-center">
                <div className="mt-8  bg-gray-700 border w-64 py-4">
                    <div className=" pl-28 font-bold pb-2">
                    <AiOutlinePhone size={25} className=" text-rose-700"/>
                    </div>
                    
                    <p className="pb-1 font-bold text-white">Phone</p>
                    <p>+256 777 923 074</p>
                </div>

                <div className="mt-8 bg-gray-700 w-64 py-4">
                    <div className=" pl-28 pb-1">
                    <AiOutlineMail size={25} className="text-rose-700"/>
                    </div>
                    
                    <p className="pb-1 font-bold text-white">Email</p>
                    <p>balixemma@gmail.com</p>
                </div>
            </div>
            </div>


        </section>

    )
}

export default About;
