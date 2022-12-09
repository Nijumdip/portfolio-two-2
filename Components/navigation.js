import { Navbar } from "flowbite-react";
import Link from "next/link";
import { AiOutlineHome } from "react-icons/ai";
import { BsFileText } from "react-icons/bs";
import { FiCodesandbox } from "react-icons/fi";
import { FaBloggerB } from "react-icons/fa";
import { TiContacts } from "react-icons/ti";

function Navigation() {
    return (
        <>
            <Navbar className="py-5 bg-transparent ">
                <Navbar.Brand href="/">
                    <img
                        src="https://i.ibb.co/d0dBDFB/download.jpg"
                        className="mr-3 navbar-image rounded-full p-2"
                        alt="programming logo"
                    />
                    <span className=" text-2xl font-normal googleFont">Shamima Akter</span>
                </Navbar.Brand>

                <Navbar.Toggle />
                <Navbar.Collapse>
                    <Link
                        href="/"
                        className="flex items-center justify-center px-4 py-1 rounded-lg bg-white home"
                    >
                        <h1 className="p-2">
                            <AiOutlineHome />
                        </h1>
                        Home
                    </Link>

                    <Link
                        href="/about"
                        className="flex items-center justify-center px-4 py-1 rounded-lg bg-white home"
                    >
                        <i class="fa-regular fa-user p-2"></i>
                        About
                    </Link>
                    <Link
                        href="/resume"
                        className="flex items-center justify-center px-4 py-1 rounded-lg bg-white home"
                    >
                        <h1 className="p-2">
                            <BsFileText />
                        </h1>
                        Resume
                    </Link>
                    <Link
                        href="/work"
                        className="flex items-center justify-center px-4 py-1 rounded-lg bg-white home"
                    >
                        <h1 className="p-2">
                            <FiCodesandbox />
                        </h1>
                        work
                    </Link>
                    <Link
                        href="/blog"
                        className="flex items-center justify-center px-4 py-1 rounded-lg bg-white home"
                    >
                        <h1 className="p-2">
                            <FaBloggerB />
                        </h1>
                        Blog
                    </Link>
                    <Link
                        href="/contact"
                        className="flex items-center justify-center px-4 py-1 rounded-lg bg-white home"
                    >
                        <h1 className="p-2">
                            <TiContacts />
                        </h1>
                        Contact
                    </Link>
                </Navbar.Collapse>
            </Navbar>
        </>
    );
}

export default Navigation;
