import { Navbar } from "flowbite-react";
import Link from "next/link";
import React from "react";

const WorkNav = () => {
    return (
        <>
            <Navbar className="py-5 bg-transparent justify-end ">
            
                    <Link
                        href="/"
                        className="flex items-center justify-center px-4 py-1 rounded-lg bg-white home"
                    >
                        Home
                    </Link>

                    <Link
                        href="/"
                        className="flex items-center justify-center px-4 py-1 rounded-lg bg-white home"
                    >
    
                        About
                    </Link>
                    <Link
                        href="/resume"
                        className="flex items-center justify-center px-4 py-1 rounded-lg bg-white home"
                    >
                        
                        Resume
                    </Link>
                    <Link
                        href="/works"
                        className="flex items-center justify-center px-4 py-1 rounded-lg bg-white home"
                    >
                        
                        Works
                    </Link>
                    <Link
                        href="/blog"
                        className="flex items-center justify-center px-4 py-1 rounded-lg bg-white home"
                    >
                       
                        Blog
                    </Link>
                    <Link
                        href="/contact"
                        className="flex items-center justify-center px-4 py-1 rounded-lg bg-white home"
                    >
                        
                        Contact
                    </Link>
                
            </Navbar>
        </>
    );
};

export default WorkNav;
