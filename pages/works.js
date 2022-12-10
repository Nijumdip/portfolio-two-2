import React from "react";
import ShareAbout from "../Components/shareAbout";
import WorkNav from "../Components/workNav";

const Works = () => {
    return (
        <>
            <div className=" max-w-screen-xl py-8 mx-auto lg:gap-5 xl:gap-0 lg:py-16 lg:grid-cols-12 bg-white rounded-3xl mb-5">
                <div className="px-5 ml-16">                   
                    <ShareAbout title="Portfolio" />                    
                </div>
                <WorkNav />
            </div>
        </>
    );
};

export default Works;
