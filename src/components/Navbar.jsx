import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faBars,
    faX,
    faStar,
    // faMagnifyingGlass,
    faUser,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

export const Navbar = () => {
    const [navBarOpen, setNavBarOpen] = useState(false);

    return (
        <nav className="fixed backdrop-blur-lg w-full md:h-auto md:flex md:justify-center z-10">
            {/* desktop */}
            <div className="max-[640px]:hidden max-[1000px]:w-full sm:hidden md:flex justify-between items-center w-10/12 py-7">
                <div className="w-1/5 flex justify-between">
                    <Link to="/" onClick={() => window.scrollTo(0, 0)}>
                        <span className="text-3xl hover:text-customGreen">
                            <FontAwesomeIcon icon={faStar} /> <b>TICKET</b>
                            VIBE
                        </span>
                    </Link>
                </div>
                <NavbarItems styles="flex justify-between w-2/5" />
                <LoginSection />
            </div>

            {/* mobile */}
            <div className="px-10 py-4 md:hidden">
                <div className="flex justify-between">
                    <Link to="/" onClick={() => window.scrollTo(0, 0)}>
                        <FontAwesomeIcon className="w-8 h-8" icon={faStar} />
                    </Link>
                    <div className="flex items-center">
                        <LoginSection />
                        <button onClick={() => setNavBarOpen(!navBarOpen)}>
                            <FontAwesomeIcon
                                className="w-5 h-5 ml-5"
                                icon={navBarOpen ? faX : faBars}
                            />
                        </button>
                    </div>
                </div>
                {navBarOpen && (
                    <>
                        <NavbarItems />
                    </>
                )}
            </div>
        </nav>
    );
};

// eslint-disable-next-line react/prop-types
const NavbarItems = ({ styles }) => {
    return (
        <ul className={styles}>
            {/* <li className="pt-2 flex items-center">
                <Link className="navbar__item" to="/live">
                    LIVE
                </Link>
                <div className="ml-2 animate-ping w-2 h-2 rounded-full bg-red-500"></div>
            </li> */}
            <li className="pt-2">
                <Link className="navbar__item" to="/">
                    Home
                </Link>
            </li>
            <li className="pt-2">
                <Link className="navbar__item" to="/music">
                    Music
                </Link>
            </li>
            <li className="pt-2">
                <Link className="navbar__item" to="/sports">
                    Sports
                </Link>
            </li>
            <li className="pt-2">
                <Link className="navbar__item" to="/art">
                    Art
                </Link>
            </li>
            <li className="pt-2">
                <Link className="navbar__item" to="/specials">
                    Specials
                </Link>
            </li>
        </ul>
    );
};

const LoginSection = () => {
    return (
        <Link to="/login" className="md:w-1/5 md:text-right hover:text-customGreen">
            {/* <FontAwesomeIcon icon={faMagnifyingGlass} />
            <input
                type="text"
                className="border rounded h-10 pl-2 ml-3 mr-10 border-customGreen"
            /> */}
            <FontAwesomeIcon icon={faUser} />
        </Link>
    );
};
