import React from "react";

const AboutCard = ({ card }) => {
    const { img, name, description, _id } = card;
    return (
        <div className=" bg-base-100 h-80 bg-pink-100 p-6 rounded-3xl shadow-md flex flex-row gap-1">
            <figure >
                <img src={img} alt="site name" className="rounded-full p-2 " />
            </figure>
            <div>
                <h5  class=" text-lg font-bold">{name}</h5>
                <p class="font-normal text-gray-700">{description}</p>
            </div>
        </div>
    );
};

export default AboutCard;
