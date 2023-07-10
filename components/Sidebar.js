// import React from "react";
// import { Button, Link as ScrollLink, animateScroll as scroll } from "react-scroll";
// import { AiFillTwitterSquare, AiFillGithub, AiFillLinkedin } from "react-icons/ai"

// const Sidebar = () => {
//     return (
//         <div className=" m-72">
//             <div className=" bg-zinc-950 text-white h-screen w-64 fixed top-0 left-0 flex flex-col items-center justify-center text-center">
//                 <div>
//                     <ul>
//                         <li>
//                             <button><ScrollLink to="home">Home</ScrollLink></button>
//                         </li>

//                         <li className="py-4">
//                            <button><ScrollLink to='about'>About</ScrollLink></button>
//                         </li>

//                         <li>
//                             <button><ScrollLink to='services'>Services</ScrollLink></button>
//                         </li>

//                         <li className="py-4">
//                            <button><ScrollLink to='portfolio'>Portfolio</ScrollLink></button>
//                         </li>

//                         <li>
//                         <button><ScrollLink to='news'>News</ScrollLink></button>
//                         </li>

//                         <li className="py-4">
//                         <button><ScrollLink to='contact'>Contact</ScrollLink></button>
//                         </li>
//                     </ul>
//                 </div>
//                 <p className=" pt-8">Follow me</p>

//                 {/* follow me icons */}
//                 <div className=" text-rose-600 flex space-x-2 py-4 ">
//                     <div>
//                         <a href='https://twitter.com/BalixEmma'>
//                             <AiFillTwitterSquare size={30} className="hover:text-blue-800" />
//                         </a>
//                     </div>
//                     <div>

//                         <a href='https://github.com/Balikuddembe'>
//                             <AiFillGithub size={30} className=" hover:text-white"/>
//                         </a>
//                     </div>

//                     <div>
//                         <a href='https://www.linkedin.com/in/emmanuelbalikuddembe/'>
//                             <AiFillLinkedin size={30} className=" hover:text-blue-800" />
//                         </a>
//                     </div>
//                 </div>
//                 <p className=" text-xs font-light ">© 2023 All Rights Reserved</p>
//             </div>
//         </div>
//     )
// }
// export default Sidebar;

import React, { useState } from "react";
import { Button, Link as ScrollLink, animateScroll as scroll } from "react-scroll";
import { AiFillTwitterSquare, AiFillGithub, AiFillLinkedin } from "react-icons/ai";

const Sidebar = () => {
  const [sidebarVisible, setSidebarVisible] = useState(true);

  const toggleSidebar = () => {
    if (!sidebarVisible) {
      setSidebarVisible(true);
    }
  };

  return (
    <div className="sidebar-container">
      {sidebarVisible && (
        <div className="sidebar-wrapper bg-zinc-950 text-white fixed top-0 left-0 h-screen w-64 flex flex-col items-center justify-center text-center">
          <div>
            <ul className="my-8">
              <li>
                <ScrollLink
                  to="home"
                  smooth={true}
                  offset={-50}
                  duration={500}
                  className="text-gray-300 hover:text-white"
                  onClick={toggleSidebar}
                >
                  Home
                </ScrollLink>
              </li>
              <li className="my-4">
                <ScrollLink
                  to="about"
                  smooth={true}
                  offset={-50}
                  duration={500}
                  className="text-gray-300 hover:text-white"
                  onClick={toggleSidebar}
                >
                  About
                </ScrollLink>
              </li>
              <li>
                <ScrollLink
                  to="services"
                  smooth={true}
                  offset={-50}
                  duration={500}
                  className="text-gray-300 hover:text-white"
                  onClick={toggleSidebar}
                >
                  Services
                </ScrollLink>
              </li>
              <li className="my-4">
                <ScrollLink
                  to="portfolio"
                  smooth={true}
                  offset={-50}
                  duration={500}
                  className="text-gray-300 hover:text-white"
                  onClick={toggleSidebar}
                >
                  Portfolio
                </ScrollLink>
              </li>
              <li>
                <ScrollLink
                  to="news"
                  smooth={true}
                  offset={-50}
                  duration={500}
                  className="text-gray-300 hover:text-white"
                  onClick={toggleSidebar}
                >
                  News
                </ScrollLink>
              </li>
              <li className="my-4">
                <ScrollLink
                  to="contact"
                  smooth={true}
                  offset={-50}
                  duration={500}
                  className="text-gray-300 hover:text-white"
                  onClick={toggleSidebar}
                >
                  Contact
                </ScrollLink>
              </li>
            </ul>
          </div>
          <div className="flex space-x-2 pb-4">
            <a href="https://twitter.com/BalixEmma">
              <AiFillTwitterSquare
                size={30}
                className="text-blue-400 hover:text-blue-800"
              />
            </a>
            <a href="https://github.com/Balikuddembe">
              <AiFillGithub
                size={30}
                className="text-gray-300 hover:text-white"
              />
            </a>
            <a href="https://www.linkedin.com/in/emmanuelbalikuddembe/">
              <AiFillLinkedin
                size={30}
                className="text-blue-400 hover:text-blue-800"
              />
            </a>
          </div>
          <p className="text-xs text-gray-300">© 2023 All Rights Reserved</p>
          <div
            className="sidebar-toggle bg-zinc-950 text-white h-screen w-16 fixed top-0 left-64 flex flex-col items-center justify-center text-center cursor-pointer"
            onClick={() => setSidebarVisible(false)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="feather feather-chevron-left h-6 w-6 text-white"
            >
              <polyline points="15 18 9 12 15 6"></polyline>
            </svg>
          </div>
        </div>
      )}
      {!sidebarVisible && (
        <div
          className="sidebar-toggle bg-zinc-950 text-white h-screen w-16 fixed top-0 left-0 flex flex-col items-center justify-center text-center cursor-pointer"
          onClick={() => setSidebarVisible(true)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="feather feather-chevron-right h-6 w-6 text-white"
          >
            <polyline points="9 18 15 12 9 6"></polyline>
          </svg>
        </div>
      )}
    </div>
  );
};

export default Sidebar;
