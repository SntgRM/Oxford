import React from "react";
import { IoMdMenu } from "react-icons/io";
import { motion } from "framer-motion";
import Logo from "../../assets/logo.svg";
import ResponsiveMenu from "./ResponsiveMenu";

const NavbarMenu = [
    {
        id: 1,
        title: "Home",
        path: "/",
    },
    {
        id: 2,
        title: "Admissions",
        path: "#",
    },
    {
        id: 3,
        title: "Research",
        path: "#",
    },
    {
        id: 4,
        title: "News & Events",
        path: "#",
    },
    {
        id: 5,
        title: "About",
        path: "#",
    },
]
const Navbar = () => {
    const [open, setOpen] = React.useState(false);
  
    return (
      <>
        <nav className="relative z-20">
            <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            className="container py-10 flex justify-between items-center"
            >
            {/* Logo */}
            <div>
                <a href="/">
                <img src={Logo} alt="" className="w-72 hover:scale-105 transition-all" />
                </a>
            </div>
    
            {/* Menu */}
            <div className="hidden lg:block">
                <ul className="flex items-center gap-3">
                {NavbarMenu.map((menu) => (
                    <li key={menu.id}>
                    <a href={menu.path} className="inline-block px-3 py-2 hover:text-secondary relative-group">
                        <div className="w-2 h-2 bg-secondary absolute mt-2 rounded-full left-1/2 -translate-x-1/2 top-1/2 bottom-0 group-hover:block hidden"></div>
                        {menu.title}
                    </a>
                    </li>
                ))}
                <button className="primary-btn">Sign In</button>
                </ul>
            </div>
    
            {/* Mobile Hamburger Menu */}
            <div className="lg:hidden relative z-50">
                <IoMdMenu className="text-4xl cursor-pointer" onClick={() => setOpen(!open)} />
            </div>
            </motion.div>
        </nav>
        {/* Mobile Sidebar Section */}
        <ResponsiveMenu open={open} setOpen={setOpen} />
      </>

    );
  };
  
  export default Navbar;
  