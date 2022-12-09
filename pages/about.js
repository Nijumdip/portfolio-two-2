import AboutCard from "../Components/aboutCard";
import InfoAbout from "../Components/infoAbout";
import ShareAbout from "../Components/shareAbout";

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
                
                <ShareAbout title="About Me" />

                <div class="grid lg:grid-cols-12 bg-white rounded-3xl">
                    
                    <div class="w-80 lg:mt-0 lg:col-span-5 lg:flex flex-col ml-0 sm:ml-14 rounded-3xl">
                        <img
                            src="https://i.ibb.co/4VRSWvV/nijum-pic-removebg-preview.png"
                            alt="mockup"
                            className="rounded-3xl "
                        />
                    </div>

                    <div class="mr-auto ml:0 sm:-ml-16 lg:col-span-7 mt-5">
                        <InfoAbout />
                    </div>

                    
                   

                    <div className="mt-12 lg:col-span-5  ">
                    <ShareAbout title="What I do!" />
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
