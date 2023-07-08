import React from "react";

const Footer = () => {
  return (
    <section className="bg-zinc-900 py-10">
        
      <div className=" ml-72 flex justify-center items-center">
        <p className="text-sm text-white">
          &copy; {new Date().getFullYear()} Emma Balix, All Rights Reserved
        </p>
      </div>
    </section>
  );
};

export default Footer;
