import React from "react";
import ShareAbout from "../../Components/shareAbout";
import WorkCard from "../../Components/workCard";
import WorkNav from "../../Components/workNav";

const Index = () => {
    const aboutCard = [
        {
            _id: 1,
            title:"Frond End Projects",
            name: "Web Design",
            img: "https://i.ibb.co/BNLmwWM/Web-Design.png",
        },
        {
            _id: 2,
            title:"Frond End Projects",
            name: "Web Development",
            img: "https://i.ibb.co/s9JjPtC/web-development1.png",
        },
        {
            _id: 3,
            title:"Frond End Projects",
            name: "App Development",
            img: "https://i.ibb.co/193vLWr/app-develop.png",
        },
        {
            _id: 4,
            title:"Frond End Projects",
            name: "Figma to Html",
            img: "https://i.ibb.co/qJYqHqR/Figma-to-Html.jpg",
        },
        {
            _id: 5,
            title:"Frond End Projects",
            name: "Existing Site Re-development",
            img: "https://i.ibb.co/r0v8Zg5/Existing-Site-Re-development.png",
        },
        {
            _id: 6,
            title:"Frond End Projects",
            name: "Management",
            img: "https://i.ibb.co/xj0865x/Management.jpg",
        },
        {
            _id: 7,
            title:"Frond End Projects",
            name: "Management",
            img: "https://i.ibb.co/xj0865x/Management.jpg",
        },
        {
            _id: 8,
            title:"FullStack",
            name: "Management",
            img: "https://i.ibb.co/xj0865x/Management.jpg",
        },
        {
            _id: 9,
            title:"FullStack",
            name: "Management",
            img: "https://i.ibb.co/xj0865x/Management.jpg",
        },
        {
            _id: 10,
            title:"FullStack",
            name: "Management",
            img: "https://i.ibb.co/xj0865x/Management.jpg",
        },
        {
            _id: 11,
            title:"FullStack",
            name: "Management",
            img: "https://i.ibb.co/xj0865x/Management.jpg",
        },
        {
            _id: 12,
            title:"FullStack",
            name: "Management",
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
                        <WorkCard key={card._id} card={card}></WorkCard>
                    ))}
                </div>
            </div>
        </>
    );
};

export default Index;
