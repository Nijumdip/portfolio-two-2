import React from "react";
import MainResume from "../Components/mainResume";
import ShareAbout from "../Components/shareAbout";
import Skills from "../Components/skills";

const Resume = () => {
    return (
        <>
            <div className=" max-w-screen-xl py-8 mx-auto lg:gap-5 xl:gap-0 lg:py-16 lg:grid-cols-12 bg-white rounded-3xl ">
                <ShareAbout title="Resume" />

                <div className=" mt-1 sm:px-20 px-0 lg:col-span-12 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 xl:grid-cols-3 ">
                    <MainResume />
                </div>

                <div className="mt-5 bg-gray-100 p-8">
                    <ShareAbout title="Skills" />

                    <div className=" lg:col-span-12 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
                        <Skills />

                        
                    </div>
                </div>
            </div>
        </>
    );
};

export default Resume;
