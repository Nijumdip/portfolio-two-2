import React from "react";

const ResumeCard = ({date, title, description }) => {
    return (
        <>
            <div className=" bg-base-100 h-80 bg-pink-100 p-6 rounded-lg shadow-md flex flex-col mb-5">
                <h5 class=" text-sm mb-3">{date}</h5>
                <h5 class=" text-lg font-normal mb-3">{title}</h5>
                <p class="font-normal text-gray-700">{description}</p>
            </div>
        </>
    );
};

export default ResumeCard;
