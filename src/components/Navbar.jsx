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
            <div className="px-10 py-8 md:flex md:justify-between md:items-center md:w-10/12">
                <div className="flex justify-between">
                    <Link to="/" onClick={() => window.scrollTo(0, 0)}>
                        <FontAwesomeIcon
                            className="w-8 h-8 md:w-12 md:h-12 hover:text-customGreen"
                            icon={faRebel}
                        />
                    </Link>
                    <div className="flex items-center md:hidden">
                        <button onClick={() => setNavBarOpen(!navBarOpen)}>
                            <FontAwesomeIcon
                                className="w-5 h-5"
                                icon={navBarOpen ? faBars : faX}
                            />
                        </button>
                    </div>
                </div>
                {navBarOpen && (
                    <>
                        <ul className="md:flex md:justify-between md:w-3/6">
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
                        <div className="mt-10 flex justify-between w-20 md:mt-0">
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
                    </>
                )}
            </div>
        </nav>
    );
};
