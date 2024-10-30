import { IoMdMenu } from "react-icons/io";
import { motion } from "framer-motion";
import Logo from "../../assets/logo.svg";

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
  return (
    <nav className="relative z-20">
        <motion.div 
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        className="container py-10 flex justify-between items-center">

            {/* Logo */}
            <div>
                <img src={Logo} alt="" className="w-72"/>
            </div>

            {/* Menu */}
            <div className="hidden lg:block">
                <ul className="flex items-center gap-3">
                    {NavbarMenu.map((menu) => (
                        <li key={menu.id}>
                            <a 
                                href={menu.path} className="inline-block px-3 py-2 hover:text-secondary relative-group"
                            >
                                <div className="w-2 h-2 bg-secondary absolute mt-2 rounded-full left-1/2 -translate-x-1/2 top-1/2 bottom-0 group-hover:block hidden"></div>
                                {menu.title}</a>
                        </li>
                    ))}
                    <button className="primary-btn">Sign In</button>
                </ul>
            </div>

            {/* Mobile Hamburger Menu */}
            <div className="lg:hidden">
                <IoMdMenu className="text-4xl" />
            </div>

        </motion.div>
    </nav>
    );
};

export default Navbar;