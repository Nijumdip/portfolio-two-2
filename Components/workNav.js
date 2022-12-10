import { Navbar } from "flowbite-react";
import Link from "next/link";
import React from "react";

const WorkNav = () => {
    return (
        <>
            <div className="py-5 sm:m-50  flex justify-end workNav ">
                <div>
                    <Link href="/" className="px-4 py-1 rounded-lg home">
                        All
                    </Link>

                    <Link href="/" className="px-4 py-1 rounded-lg home">
                        FrontEnd
                    </Link>
                    <Link href="/resume" className="px-4 py-1 rounded-lg home">
                        Full-Stack
                    </Link>
                    <Link href="/works" className="px-4 py-1 rounded-lg home">
                        Figma
                    </Link>
                    <Link href="/blog" className="px-4 py-1 rounded-lg home">
                        App
                    </Link>
                    
                </div>
            </div>
        </>
    );
};

export default WorkNav;
