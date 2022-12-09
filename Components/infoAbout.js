import { FiSmartphone } from "react-icons/fi";
import Link from "next/link";

const InfoAbout = () => {
    return (
        <>
            <h5 class="mb-6 text-2xl font-normal text-gray-900">Who am i?</h5>
            <p class="mb-6 text-base text-gray-500 dark:text-gray-400">
                I'm Front-end Developer from Dhaka, Bangladesh, working in web <br />
                development. I enjoy turning complex problems into simple, beautiful, and intuitive
                designs. <br /> <br /> My aim is to bring across your message and identity in the
                most creative way. <br /> I created a lot of web projects and I am a beginner in
                this sector
            </p>

            <h5 class="mb-6 text-2xl font-normal text-gray-900">Personal Info</h5>
            <div class="grid lg:grid-cols-2 gap-5">
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
                        <Link
                            href="mailto:nijumdip019911@gmail.com"
                            className=" hover:text-pink-500 "
                        >
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
                        <h3 class="font-normal">28 October, 1992</h3>
                    </div>
                </div>
            </div>
        </>
    );
};

export default InfoAbout;
