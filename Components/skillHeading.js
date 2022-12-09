import React from "react";

const SkillHeading = ({title}) => {
    return (
        <>
            <div className="text-2xl mt-3 mb-5 font-medium flex justify-start items-center">
                <h5>{title}</h5>
            </div>
        </>
    );
};

export default SkillHeading;
