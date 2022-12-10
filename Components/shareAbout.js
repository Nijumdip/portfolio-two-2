import React from "react";

const ShareAbout = ({title}) => {
    return (
        <>
            <div className="flex flex-row text-4xl font-bold text-gray-900 ">
                <h1 className="beforeAfter relative" >{title} </h1>               
            </div>
        </>
    );
};

export default ShareAbout;
