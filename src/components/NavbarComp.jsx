import {
    Navbar,
    NavbarBrand,
} from "flowbite-react";
import { FcPaid } from "react-icons/fc";
import  imageLogo  from "../assets/logo.png";
import { CgProfile } from "react-icons/cg";
import { Link } from "react-router-dom";

export default function NavbarComp() {
    return (
        <Navbar fluid rounded className="px-10 py-5">
            <NavbarBrand href="https://flowbite-react.com">

                <img src={ imageLogo } className="mr-3 h-6 sm:h-9" alt="Flowbite React Logo" />
                            <Link to="/">
                <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Fake Store App</span>
                </Link>
            </NavbarBrand>
            <div className="flex md:order-2 gap-4">
                <FcPaid className="text-2xl" />
                <a href="/profile">
                    <CgProfile className="text-2xl" color="white" />
                </a>
            </div>

        </Navbar>
    )
}