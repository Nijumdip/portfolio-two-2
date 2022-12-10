import { Navbar } from "flowbite-react";
import Link from "next/link";
import React from "react";

const WorkNav = () => {
    return (
        <>
            <div className="py-5 flex justify-end workNav ">
                <div className="">
                    <Link href="/works/all" className="px-4 py-1 rounded-lg home">
                        All
                    </Link>

                    <Link href="/works/frontEnd" className="px-4 py-1 rounded-lg home">
                        FrontEnd
                    </Link>
                    <Link href="/works/fullStack" className="px-4 py-1 rounded-lg home">
                        Full-Stack
                    </Link>
                    <Link href="/works/figma" className="px-4 py-1 rounded-lg home">
                        Figma
                    </Link>
                    <Link href="/works/app" className="px-4 py-1 rounded-lg home">
                        App
                    </Link>
                    
                </div>
            </div>
        </>
    );
};

export default WorkNav;
