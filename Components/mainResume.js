import React from "react";
import HeadingResume from "./headingResume";
import ResumeCard from "./resumeCard";

const MainResume = () => {
    return (
        <>
            <div>
                <HeadingResume title="Education" image="https://i.ibb.co/h8mjbwR/edu.png" />

                <ResumeCard
                    date="2014-2019"
                    title="BA/BSS in political science "
                    description="Kaligong sromik college"
                />

                <ResumeCard
                    date="2021-running"
                    title="Diploma in web & e-commerce "
                    description="Daffodil Institute of Science & Technology"
                />

                <ResumeCard
                    date="2022(5th batch)"
                    title="Complete Web Development"
                    description="Programming Hero"
                />
            </div>

            <div>
                <HeadingResume title="Experience" image="https://i.ibb.co/xFDLn3Q/Experience.png" />

                <ResumeCard />
                <ResumeCard />
                <ResumeCard />
            </div>

            <div>
                <HeadingResume title="Awards" image="https://i.ibb.co/J2SJNLv/awa0.jpg" />

                <ResumeCard />
                <ResumeCard />
                <ResumeCard />
            </div>
        </>
    );
};

export default MainResume;
