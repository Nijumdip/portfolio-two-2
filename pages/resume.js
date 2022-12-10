import React from "react";
import MainResume from "../Components/mainResume";
import ShareAbout from "../Components/shareAbout";
import Skills from "../Components/skills";

const Resume = () => {
    return (
        <>
            <div className=" max-w-screen-xl py-8 mx-auto lg:gap-5 xl:gap-0 lg:py-16 lg:grid-cols-12 bg-white rounded-3xl mb-5">
                <div className="px-5 ml-16">
                    <ShareAbout title="Resume" />
                </div>

                <div className=" mt-1 sm:px-20 px-5 lg:col-span-12 grid sm:grid-cols-1  lg:grid-cols-3 gap-6 ">
                    <MainResume />
                </div>

                <div className="mt-5 bg-gray-100 p-8">
                    <div className="px-5 mb-5">
                        <ShareAbout title="Skills" />
                    </div>

                    <div className=" lg:col-span-12 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
                        <Skills />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Resume;
