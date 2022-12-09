import React from "react";
import ShareAbout from "../Components/shareAbout";

const Works = () => {
    return (
        <>
            <div className=" max-w-screen-xl py-8 mx-auto lg:gap-5 xl:gap-0 lg:py-16 lg:grid-cols-12 bg-white rounded-3xl mb-5">
                <div className="px-5">
                    <ShareAbout title="Portfolio" />
                </div>
            </div>
        </>
    );
};

export default Works;
