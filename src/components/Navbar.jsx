import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRebel } from "@fortawesome/free-brands-svg-icons";
import { faBars, faX } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

export const Navbar = () => {
    const [navBarOpen, setNavBarOpen] = useState(false);

    return (
        <nav className="fixed backdrop-blur-lg w-full md:h-auto md:flex md:justify-center">
            {/* desktop */}
            <div className="max-[640px]:hidden max-[1000px]:w-full sm:hidden md:flex justify-between items-center w-10/12 px-10 py-8">
                <div className="flex justify-between">
                    <Link to="/" onClick={() => window.scrollTo(0, 0)}>
                        <FontAwesomeIcon
                            className="w-12 h-12 hover:text-customGreen"
                            icon={faRebel}
                        />
                    </Link>
                </div>
                <NavbarItems styles="flex justify-between w-1/3" />
            </div>

            {/* mobile */}
            <div className="px-10 py-8 md:hidden">
                <div className="flex justify-between">
                    <Link to="/" onClick={() => window.scrollTo(0, 0)}>
                        <FontAwesomeIcon className="w-8 h-8" icon={faRebel} />
                    </Link>
                    <div className="flex items-center">
                        <button onClick={() => setNavBarOpen(!navBarOpen)}>
                            <FontAwesomeIcon
                                className="w-5 h-5"
                                icon={navBarOpen ? faX : faBars}
                            />
                        </button>
                    </div>
                </div>
                {navBarOpen && <NavbarItems />}
            </div>
        </nav>
    );
};

// eslint-disable-next-line react/prop-types
const NavbarItems = ({ styles }) => {
    return (
        <ul className={styles}>
            <li className="pt-2 flex items-center">
                <Link className="navbar__item" to="/live">
                    LIVE
                </Link>
                <div className="ml-2 animate-ping w-2 h-2 rounded-full bg-red-500"></div>
            </li>
            <li className="pt-2">
                <Link className="navbar__item" to="/tickets">
                    Tickets
                </Link>
            </li>
            <li className="pt-2">
                <Link className="navbar__item" to="/contact">
                    Contact us
                </Link>
            </li>
        </ul>
    );
};
