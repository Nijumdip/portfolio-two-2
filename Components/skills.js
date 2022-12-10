import React from "react";
import SkillCard from "./skillCard";
import SkillHeading from "./skillHeading";

const Skills = () => {
    return (
        <>
            <div>
                <SkillHeading title="Comfort " />
                <div className=" lg:col-span-12 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
                    <SkillCard title="HTML " image="https://i.ibb.co/XDwvNt3/html1.png" />

                    <SkillCard title="CSS " image="https://i.ibb.co/ft0SPhq/css.png" />

                    <SkillCard title="Bootstrap " image="https://i.ibb.co/6nfcPsr/boostrap.png" />

                    <SkillCard title="TailwindCss " image="https://i.ibb.co/QYDWNXw/tailwind.jpg" />

                    <SkillCard title="JavaScript " image="https://i.ibb.co/YLMkW5b/js.png" />

                    <SkillCard title="ReactJs " image="https://i.ibb.co/JzBbGTX/react.png" />

                    <SkillCard title="DaisyUi " image="https://i.ibb.co/y5KxngK/daisyUi.jpg" />

                    <SkillCard title="Flowbite " image="https://i.ibb.co/gTD5cq6/flowbite.jpg" />
                </div>
            </div>

            <div>
                <SkillHeading title="Familiar " />
                <div className=" lg:col-span-12 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
                    <SkillCard title="NextJs " image="https://i.ibb.co/pzYNLq8/next.jpg" />
                    <SkillCard title="Mongodb " image="https://i.ibb.co/t4hxshT/mongo.jpg" />

                    <SkillCard title="Express " image="https://i.ibb.co/YNtKsZW/express.png" />

                    <SkillCard title="Firebase " image="https://i.ibb.co/Jsr8vQY/Firebase.png" />

                    <SkillCard title="NodeJS " image="https://i.ibb.co/Hxsb5nJ/nodejs.png" />

                    <SkillCard title="Redux " image="https://i.ibb.co/YyZFBWG/redux1.png" />

                    <SkillCard title="Mongoose " image="https://i.ibb.co/VjMGg9R/mon.png" />

                    <SkillCard title="Git & Github " image="https://i.ibb.co/JQk7vD0/Git-Git-Hub.png" />
                </div>
            </div>
        </>
    );
};

export default Skills;
