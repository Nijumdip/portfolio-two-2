import React from "react";
import AboutCard from "../../Components/aboutCard";
import ShareAbout from "../../Components/shareAbout";
import WorkNav from "../../Components/workNav";

const Index = () => {
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
            <div className=" max-w-screen-xl py-8 mx-auto bg-white rounded-3xl mb-5">
                <div className="px-5 sm:ml-16">
                    <ShareAbout title="Portfolio" />
                </div>
                <WorkNav />
                <div className="mt-5 sm:px-20 px-0 rounded-lg lg:col-span-12 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 xl:grid-cols-3">
                    {aboutCard.map((card) => (
                        <AboutCard key={card._id} card={card}></AboutCard>
                    ))}
                </div>
            </div>
        </>
    );
};

export default Index;
