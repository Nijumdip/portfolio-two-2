import React from "react";
import HeadingResume from "./headingResume";
import ResumeCard from "./resumeCard";
import SkillCard from "./skillCard";
import SkillHeading from "./skillHeading";

const Skills = () => {
    return (
        <>
            <div>
                <SkillHeading title="Comfort " />
                <div className=" lg:col-span-12 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
                    <SkillCard title="Comfort " image="https://i.ibb.co/J2SJNLv/awa0.jpg" />
                    <SkillCard />

                    <SkillCard />
                    <SkillCard />

                    <SkillCard />
                    <SkillCard />
                </div>
            </div>

            <div>
                <SkillHeading title="Familiar " />
                <div className=" lg:col-span-12 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
                    <SkillCard title="Comfort " image="https://i.ibb.co/J2SJNLv/awa0.jpg" />
                    <SkillCard />

                    <SkillCard />
                    <SkillCard />

                    <SkillCard />
                    <SkillCard />
                </div>
            </div>
        </>
    );
};

export default Skills;
