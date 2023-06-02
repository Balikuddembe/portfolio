import React from "react";
import Link from "next/link";
const About = () => {
    return (
        <section className=" ml-72">
            <div className="">
                <div class="">
                    <h2><span>|</span>About</h2>
                </div>

                <div className="mt-8">
                    <h2 className=" text-2xl font-bold">I am a Software Developer</h2>
                    <p className="mt-4">
                        Hi!My name is EMMANUEL BALIKUDDEMBE.I started my learning journey Two years a go. I have Learned a lot of stuff
                        during this period including Web Development(Front-end and back-end)
                        Now I'm Working with React framework for the front-end and
                        Spring Boot framework for the backend.
                    </p>
                    <div className=" flex mt-4">
                        <Link href="">Hire Me</Link>
                        <Link href="">Download CV</Link>
                    </div>
                </div>

                <div className="flex items-center justify-end mt-8">
          <img src="../public/profile.JPG" alt="Profile Image" className="w-40 h-40 object-cover rounded-full" />
        </div>

                <div className="mt-8">
                    <p>Phone</p>
                    <p>+256 777 923 074</p>
                </div>

                <div className="mt-4">
                    <p>Email</p>
                    <p>balixemma@gmail.com</p>
                </div>

            </div>

        </section>

    )
}

export default About;
