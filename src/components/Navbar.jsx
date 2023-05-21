import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faInstagram,
    faTwitter,
    faRebel,
} from "@fortawesome/free-brands-svg-icons";
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
                <NavbarItems styles="flex justify-between w-7/12" />
                <div className="flex justify-between w-20 mt-0">
                    <Link to="/">
                        <FontAwesomeIcon
                            className="w-7 h-7 hover:text-customGreen"
                            icon={faInstagram}
                        />
                    </Link>
                    <Link to="/">
                        <FontAwesomeIcon
                            className="w-7 h-7 hover:text-customGreen"
                            icon={faTwitter}
                        />
                    </Link>
                </div>
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
            <li className="pt-2">
                <Link className="navbar__item" to="/">
                    Home
                </Link>
            </li>
            <li className="pt-2">
                <Link className="navbar__item" to="/results">
                    Results
                </Link>
            </li>
            <li className="pt-2">
                <Link className="navbar__item" to="/sports">
                    Sports
                </Link>
            </li>
            <li className="pt-2">
                <Link className="navbar__item" to="/services">
                    Services
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
