import React from "react";

const WorkCard = ({ card}) => {
    const { img,title, name, _id } = card;
    return (
        <>
            <div className=" bg-base-100 h-80 bg-pink-100 p-6 rounded-3xl shadow-md flex flex-col gap-1">
                <figure>
                    <img src={img} alt="site name" className="rounded-full p-2 " />
                </figure>
                <div>
                    <h5 class=" text-lg font-bold">{title}</h5>
                    <p class="font-normal text-gray-700">{name}</p>
                </div>
            </div>
        </>
    );
};

export default WorkCard;
