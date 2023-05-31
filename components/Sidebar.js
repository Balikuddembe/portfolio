import React from "react";
import Link from "next/link";
import { AiFillTwitterSquare, AiFillGithub, AiFillLinkedin } from "react-icons/ai"

const Sidebar = () => {
    return (
        <div>
            {/* <div className=" font-bold text-4xl h-16 top-0 left-0 flex flex-col justify-center">
            <Link href='#'>
                <h1>Coder<span className="text-6xl text-red-600">.</span></h1>
            </Link>
            </div>
         */}

            <div className=" bg-black text-white h-screen w-64 fixed top-0 left-0 flex flex-col items-center justify-center text-center">
                <div>
                    {/* <div className=" font-bold text-4xl">
            <Link href='#'>
                <h1>Coder<span className="text-6xl text-red-600">.</span></h1>
            </Link>
            </div> */}

                    <ul>
                        <li>
                            <Link href='#'>Home</Link>
                        </li>

                        <li className="py-4">
                            <Link href='/about'>About</Link>
                        </li>

                        <li>
                            <Link href='/services'>Services</Link>
                        </li>

                        <li className="py-4">
                            <Link href='/portfolio'>Portfolio</Link>
                        </li>

                        <li>
                            <Link href='/'>News</Link>
                        </li>

                        <li className="py-4">
                            <Link href='/contact'>Contact</Link>
                        </li>
                    </ul>
                </div>
                <p className=" pt-8">Follow me</p>

                {/* follow me icons */}
                <div className=" text-white flex justify-around ">
                    <div>
                        <Link href='#'>
                            <AiFillTwitterSquare size={20} />
                        </Link>
                    </div>
                    <div>

                        <Link href='#'>
                            <AiFillGithub size={20} />
                        </Link>
                    </div>

                    <div>
                        <Link href='#'>
                            <AiFillLinkedin size={20} />
                        </Link>
                    </div>

                </div>
            </div>
        </div>
    )
}
export default Sidebar;