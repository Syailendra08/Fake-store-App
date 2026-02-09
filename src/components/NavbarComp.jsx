import {
    Button,
    Navbar,
    NavbarBrand,
} from "flowbite-react";
import { FcPaid } from "react-icons/fc";
import  imageLogo  from "../assets/logo.png";
import { CgProfile } from "react-icons/cg";
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext.jsx";
import { CartContext } from "../contexts/CartContext.jsx";

export default function NavbarComp() {
   const { isLogin, logout } = useContext(AuthContext);

   const navigate = useNavigate();

   function handleLogout() {
    // panggil func lgout dari context
    logout();
    // pindahkan halama, navigate tidak bisa digunakan di context
    navigate('/')
   }

   const {cart} = useContext(CartContext);
    return (
        <Navbar fluid rounded className="px-10 py-5">
            <NavbarBrand href="https://flowbite-react.com">

                <img src={ imageLogo } className="mr-3 h-6 sm:h-9" alt="Flowbite React Logo" />
                            <Link to="/">
                <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Fake Store App</span>
                </Link>
            </NavbarBrand>
            <div className="flex md:order-2">
                <Link to="/cart" style={{position: "relative"}}>
                <span className="bg-red-200 text-red-500 px-2 rounded-full font-bold" style={{ position: "absolute", right: "20px", bottom: "20px",}}>{cart.length}</span>
                <FcPaid className="text-4xl mt-2" />
                </Link>
                {
                    isLogin && (<Button color="red" className="ms-3" onClick={handleLogout}>Logout</Button>)
                }
                <a href="/profile">
                    <CgProfile className="text-2xl" color="white" />
                </a>
            </div>

        </Navbar>
    )
}