import React from "react";

const ShareAbout = ({title}) => {
    return (
        <>
            <div className="flex flex-row ml:0 sm:ml-16 text-4xl font-bold text-gray-900 ">
                <h1>{title} </h1>
                <p>
                    <hr className="border w-32 sm:w-60 mt-5 ml-6 border-pink-500" /> <br />
                </p>
            </div>
        </>
    );
};

export default ShareAbout;
