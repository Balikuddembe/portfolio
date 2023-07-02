import React from "react";
import { Button, Link as ScrollLink, animateScroll as scroll } from "react-scroll";
import { AiFillTwitterSquare, AiFillGithub, AiFillLinkedin } from "react-icons/ai"

const Sidebar = () => {
    return (
        <div>
            <div className=" bg-gray-950 text-white h-screen w-64 fixed top-0 left-0 flex flex-col items-center justify-center text-center">
                <div>

                    <ul>
                        <li>
                            <button><ScrollLink to="home">Home</ScrollLink></button>

                        </li>

                        <li className="py-4">
                           <button><ScrollLink to='about'>About</ScrollLink></button>
                        </li>

                        <li>
                            <button><ScrollLink to='services'>Services</ScrollLink></button>
                        </li>

                        <li className="py-4">
                           <button><ScrollLink to='portfolio'>Portfolio</ScrollLink></button>
                        </li>

                        <li>
                        <button><ScrollLink to='news'>News</ScrollLink></button>
                        </li>

                        <li className="py-4">
                        <button><ScrollLink to='contact'>Contact</ScrollLink></button>
                        </li>
                    </ul>
                </div>
                <p className=" pt-8">Follow me</p>

                {/* follow me icons */}
                <div className=" text-rose-600 flex space-x-2 py-4 ">
                    <div>
                        <a href='https://twitter.com/BalixEmma'>
                            <AiFillTwitterSquare size={30} className="hover:text-blue-800" />
                        </a>
                    </div>
                    <div>

                        <a href='https://github.com/Balikuddembe'>
                            <AiFillGithub size={30} className=" hover:text-white"/>
                        </a>
                    </div>

                    <div>
                        <a href='https://www.linkedin.com/in/emmanuelbalikuddembe/'>
                            <AiFillLinkedin size={30} className=" hover:text-blue-800" />
                        </a>
                    </div>

                </div>
                <p className=" text-xs font-light ">© 2023 All Rights Reserved</p>
            </div>
        </div>
    )
}
export default Sidebar;