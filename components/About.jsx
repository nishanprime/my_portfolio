import React from "react";
import Link from "next/link";

const About = () => {
  return (
    <div id="about" className="w-full md:h-screen p-2 flex items-center py-16">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className="sm:text-center mb-5 md:uppercase text-xl tracking-widest text-[#5651e5]">
            About
          </p>
          <h2 className="sm:text-center mb-5 md:py-4">Who I am</h2>
          <p className="sm:text-center mb-5 md:py-2 text-gray-600">
            Hello there! I'm a Computer Science major with a Finance minor at
            Drexel University, poised to graduate in 2025. Among my
            achievements? I'm one of a select 12 individuals worldwide graced
            with the{" "}
            <span className="!text-red-500 !font-bold">
              Drexel Global Scholarship
            </span>
            a full ride through my Drexel journey.{" "}
          </p>
          <p className="sm:text-center mb-5 md:py-2 text-gray-600">
            My love affair with programming began at 14, and by 2019, I was
            deeply entrenched in full-stack development. At{" "}
            <span className=" text-red-500">ECFMG</span>, I played a key role in
            enhancing product security and performance. Currently, I wear
            multiple hats at{" "}
            <span className=" text-red-500">
              JumboTaxes: Senior Developer, DevOps, and Project Manager
            </span>
            . Under my watch, JumboTaxes transformed into a commercial
            juggernaut.
          </p>
          <Link href="/#projects">
            <p className="sm:text-center mb-5 md:py-2 text-gray-600 underline cursor-pointer">
              Check out some of my latest work.
            </p>
          </Link>
        </div>
        <div className="sm:hidden md:block w-full h-auto m-auto shadow-xl  shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
          <img src="assets/about.jpg" className="rounded-xl" alt="/" />
        </div>
      </div>
    </div>
  );
};

export default About;
