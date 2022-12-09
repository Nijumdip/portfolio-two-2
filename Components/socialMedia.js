import Link from "next/link";
import { GrFacebookOption } from "react-icons/gr";
import { BsTwitter } from "react-icons/bs";
import {FaGithub} from "react-icons/fa";
import { GrLinkedinOption } from "react-icons/gr";

function SocialMedia() {
    return (
        <div class="flex items-center justify-center space-x-3 mt-4 ">
            <Link
                href="https://m.me/nizum.nizum.1481/"
                className=" px-2 py-1 rounded-lg bg-white text-blue-600 home" >
                <h1 className="p-2"> <GrFacebookOption /> </h1>
            </Link>

            <Link
                href="/"
                className="px-2 py-1 rounded-lg bg-white text-blue-600 home">
                <h1 className="p-2"> <BsTwitter /> </h1>
            </Link>

            <Link
                href="/"
                className=" px-2 py-1 rounded-lg bg-white text-blue-600 home"
            >
                <h1 className="p-2"> <FaGithub /> </h1>
            </Link>
            
            <Link
                href="/"
                className=" px-2 py-1 rounded-lg bg-white text-blue-600 home"
            >
                <h1 className="p-2"> <GrLinkedinOption /> </h1>
           </Link> 
        </div>
    );
}

export default SocialMedia;
