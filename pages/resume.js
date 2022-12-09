import React from "react";
import HeadingResume from "../Components/headingResume";
import ResumeCard from "../Components/resumeCard";
import ShareAbout from "../Components/shareAbout";

const Resume = () => {
    return (
        <>
            <div className=" max-w-screen-xl px-4 py-8 mx-auto lg:gap-5 xl:gap-0 lg:py-16 lg:grid-cols-12 bg-white rounded-3xl ">
                <ShareAbout title="Resume" />

                <div className=" mt-1 sm:px-20 px-0 rounded-lg lg:col-span-12 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 xl:grid-cols-3 ">
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
                        <HeadingResume
                            title="Experience"
                            image="https://i.ibb.co/xFDLn3Q/Experience.png"
                        />

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

                </div>
            </div>
        </>
    );
};

export default Resume;
