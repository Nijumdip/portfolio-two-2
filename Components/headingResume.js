import React from "react";

const HeadingResume = ({ title, image }) => {
    return (
        <div className="text-2xl mt-10 mb-5 font-medium flex justify-start items-center">
            
            <div class="w-12 rounded-full mr-2">
                <img src={image} alt="mockup" className="rounded-full " />
            </div>
            <h5>{title}</h5>
        </div>
    );
};

export default HeadingResume;
