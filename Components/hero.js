import React from "react";
import SocialMedia from "./socialMedia";
import { ImDownload } from "react-icons/im";

function Hero() {
    return (
        <div className=" ">
            <div className="hero-main">
                <img
                    src="https://i.ibb.co/4VRSWvV/nijum-pic-removebg-preview.png"
                    alt
                    className="h-full w-full rounded-full overflow-hidden shadow"
                />

                <div className="flex flex-col items-center justify-center">
                    <h1 className=" text-2xl font-bold mt-6"> Shamima Akter </h1>
                    <h1 className="text-gray-500 mt-2 "> Front-End Developer </h1>
                    <SocialMedia />
                    <a href="/Shamima Akter (1).pdf" download className="py-2 rounded-full bg-white home mt-6 w-64 flex items-center justify-center">
                        <button className="flex items-center justify-center">
                            <h1 className="p-2"><ImDownload /></h1>
                            Download CV
                        </button>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Hero;
