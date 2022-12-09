import Link from "next/link";
import React from "react";
import { FiSmartphone } from "react-icons/fi";
import AboutCard from "../Components/aboutCard";

function About() {
    const aboutCard = [
        {
            _id: 1,
            name: "Web Design",
            description:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor architecto tenetur unde neque culpa libero omnis.",
            img: "https://i.ibb.co/BNLmwWM/Web-Design.png",
        },
        {
            _id: 2,
            name: "Web Development",
            description:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor architecto tenetur unde neque culpa libero omnis.",
            img: "https://i.ibb.co/s9JjPtC/web-development1.png",
        },
        {
            _id: 3,
            name: "App Development",
            description:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor architecto tenetur unde neque culpa libero omnis.",
            img: "https://i.ibb.co/193vLWr/app-develop.png",
        },
        {
            _id: 4,
            name: "Figma to Html",
            description:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor architecto tenetur unde neque culpa libero omnis.",
            img: "https://i.ibb.co/qJYqHqR/Figma-to-Html.jpg",
        },
        {
            _id: 5,
            name: "Existing Site Re-development",
            description:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor architecto tenetur unde neque culpa libero omnis.",
            img: "https://i.ibb.co/r0v8Zg5/Existing-Site-Re-development.png",
        },
        {
            _id: 6,
            name: "Management",
            description:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor architecto tenetur unde neque culpa libero omnis.",
            img: "https://i.ibb.co/xj0865x/Management.jpg",
        },
    ];

    return (
        <>
            <div className=" max-w-screen-xl px-4 py-8 mx-auto lg:gap-5 xl:gap-0 lg:py-16 lg:grid-cols-12 bg-white rounded-3xl m-5">
                <div className="flex flex-row ml:0 sm:ml-16 text-4xl font-bold text-gray-900 ">
                    <h1>About Me </h1>
                    <p>
                        <hr className="border w-32 sm:w-60 mt-5 ml-6 border-pink-500" /> <br />
                    </p>
                </div>

                <div class="grid lg:grid-cols-12 bg-white rounded-3xl">
                    <div class="w-80 lg:mt-0 lg:col-span-5 lg:flex flex-col ml-0 sm:ml-14 rounded-2xl">
                        <img
                            src="https://i.ibb.co/4VRSWvV/nijum-pic-removebg-preview.png"
                            alt="mockup"
                            className="rounded-3xl "
                        />
                    </div>

                    <div class="mr-auto ml:0 sm:-ml-16 lg:col-span-7">
                        <h5 class="mb-2 text-2xl font-normal text-gray-900">Who am i?</h5>
                        <p class="mb-3 text-base text-gray-500 dark:text-gray-400">
                            I'm Front-end Developer from Dhaka, Bangladesh, working in web <br />
                            development. I enjoy turning complex problems into simple, beautiful,
                            and intuitive designs. <br /> <br /> My aim is to bring across your
                            message and identity in the most creative way. <br /> I created a lot of
                            web projects and I am a beginner in this sector
                        </p>

                        <h5 class="mb-2 text-2xl font-normal text-gray-900">Personal Info</h5>
                        <div class="grid grid-cols-2 gap-5">
                            <div className="flex flex-row">
                                <div>
                                    <FiSmartphone className="h-12 w-12 p-2 mr-2 rounded-lg shadow bg-white" />
                                </div>

                                <div>
                                    <h3 class="font-normal text-gray-500">Phone</h3>
                                    <h3 class="font-normal "> 01944-901141 </h3>
                                </div>
                            </div>

                            <div className="flex flex-row">
                                <div>
                                    <FiSmartphone className="h-12 w-12 p-2 mr-2 rounded-lg shadow bg-white" />
                                </div>

                                <div>
                                    <h3 class="font-normal text-gray-500">Location</h3>
                                    <h3 class="font-normal">Dhaka Bangladesh</h3>
                                </div>
                            </div>

                            <div className="flex flex-row">
                                <div>
                                    <FiSmartphone className="h-12 w-12 p-2 mr-2 rounded-lg shadow bg-white" />
                                </div>

                                <div>
                                    <h3 class="font-normal text-gray-500">Email</h3>
                                    <Link href="mailto:nijumdip019911@gmail.com" className=" hover:text-pink-500 ">
                                        nijumdip019911@gmail.com
                                    </Link>
                                </div>
                            </div>

                            <div className="flex flex-row">
                                <div>
                                    <FiSmartphone className="h-12 w-12 p-2 mr-2 rounded-lg shadow bg-white" />
                                </div>
                                <div>
                                    <h3 class="font-normal text-gray-500">Birthday</h3>
                                    <h3 class="font-normal">28 October 1992</h3>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-row ml:0 sm:ml-16 text-4xl font-normal text-gray-900 mt-12 lg:col-span-5  ">
                        <h1>What I do! </h1>
                        <p>
                            <hr className="border w-32 sm:w-60 mt-5 ml-6 border-pink-500" /> <br />
                        </p>
                    </div>

                    <div className=" mt-5 sm:px-20 px-0 rounded-lg lg:col-span-12 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 xl:grid-cols-3 ">
                        {aboutCard.map((card) => (
                            <AboutCard key={card._id} card={card}></AboutCard>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}

export default About;
