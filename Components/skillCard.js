import React from "react";

const SkillCard = ({ title, image }) => {
    return (
        <>
            <div className=" bg-base-100  bg-pink-100 p-5 rounded-lg shadow-md flex flex-row justify-evenly items-center ">
                <div class="w-12 rounded-full mr-2 ">
                    <img src={image} alt="mockup" className="rounded-full " />
                </div>
                <h5 class=" text-lg font-normal">{title}</h5>
            </div>
        </>
    );
};

export default SkillCard;
