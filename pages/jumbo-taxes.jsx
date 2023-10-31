import React from "react";
import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";
import Head from "next/head";

const JumboTaxes = () => {
  return (
    <div className="w-full">
      <Head>
        <title>JumboTaxes | Championing Fair Taxation</title>
        <meta
          name="description"
          content="An AI-powered platform specializing in property tax appeal solutions, streamlining processes and enhancing accuracy for users."
        />
        <link rel="icon" href="/assets/logoNishan.png" />
      </Head>
      <div className="w-screen h-[50vh] relative">
        <div
          className="absolute top-0 left-0 w-full h-[50vh]"
          style={{
            backgroundImage: "url(assets/projects/jumbotaxes-banner.png)",
            backgroundSize: "cover",
          }}
        ></div>
        <div className="absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10" />

        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <h2 className="py-2">JumboTaxes</h2>
          <h3>Next JS / React-Vite / Node JS / PostgreSQL / OpenAI </h3>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8 z-20">
        <div className="col-span-4">
          <p>Project</p>
          <h2>Overview</h2>
          <p>
            Jumbotaxes is an advanced AI-powered web application specifically
            designed to simplify the property tax appeal process. The platform
            is segmented into three backends: an AI estimator for property taxes
            and potential savings, an automated module for appeal letter
            creation and PDF filing, and a core logic handler that deals with
            the primary operations and functions.
          </p>
          <p>
            On the frontend, Jumbotaxes boasts a SEO-optimized landing page
            crafted with Next.js and Chakra UI, ensuring superior mobile
            responsiveness. The user portal, built with React Vite and Chakra
            UI, promises a swift and user-friendly experience, while the admin
            portal, designed for tablets and desktops using AntD and Next.js,
            undergoes frequent updates, catering to in-house demands. Proper
            industry-standard practices are employed in its DevOps and staging
            environments, safeguarding the production code against frequent
            changes.
          </p>

          <button className="px-8 py-2 mt-4 mr-8 !bg-gradient-to-r from-[#ff4203] to-[#ff0000] text-white cursor-not-allowed">
            Code (Private)
          </button>
          <div className="flex gap-2">
            <a href="https://jumbotaxes.com" target="_blank" rel="noreferrer">
              <button className="px-8 py-2 mt-4">Frontend App</button>
            </a>
            <a
              href="https://portal.jumbotaxes.com"
              target="_blank"
              rel="noreferrer"
            >
              <button className="px-8 py-2 mt-4">Client Portal</button>
            </a>
            <a
              href="https://admin.jumbotaxes.com"
              target="_blank"
              rel="noreferrer"
            >
              <button className="px-8 py-2 mt-4">
                Admin App (Restrcited Access)
              </button>
            </a>
          </div>
        </div>
        <div className="col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl py-4">
          <div className="p-2">
            <p className="text-center font-bold pb-2">Technologies</p>
            <div className="grid grid-cols-3 md:grid-cols-1">
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Node JS
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Next JS
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> ReactVite
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> TypeScript
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> ChakraUI | Tailwind |
                Antd
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> PostgreSQL
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> LandVision API
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> OpenAI
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> AdobePDF API
              </p>
            </div>
          </div>
        </div>
        <Link href="/#projects">
          <p className="underline cursor-pointer">Back</p>
        </Link>
      </div>
    </div>
  );
};

export default JumboTaxes;
