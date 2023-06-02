import React from "react";
import Link from "next/link";
const About = () => {
    return (
        <section>
            <div className="">
                <div className="">
                    <h2><span>|</span>About</h2>
                </div>

                <div>
                    <h2>I am a Software Developer</h2>
                    <p>
                        Hi!My name is EMMANUEL BALIKUDDEMBE.I started my learning journey Two years a go. I have Learned a lot of stuff
                        during this period including Web Development(Front-end and back-end)
                        Now I'm Working with React framework for the front-end and
                        Spring Boot framework for the backend.
                    </p>
                    <div>
                        <Link href="">Hire Me</Link>
                        <Link href="">Download CV</Link>
                    </div>
                </div>

                <div>
                    <p>Phone</p>
                    <p>+256 777 923 074</p>
                </div>

                <div>
                    <p>Email</p>
                    <p>balixemma@gmail.com</p>
                </div>

            </div>

        </section>

    )
}

export default About;
