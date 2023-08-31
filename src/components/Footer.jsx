import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter, faInstagram, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";

export const Footer = () => {
    return (
        <div className="flex justify-center w-full h-[40vh] bg-purple text-white">
            <section className="flex flex-col md:flex-row md:justify-between w-10/12">
                <div className="flex mt-5 md:w-4/12">
                    <div className="w-1/2">
                        <ul>
                            <li className="pt-2">
                                <Link className="" to="/">
                                    Home
                                </Link>
                            </li>
                            <li className="pt-2">
                                <Link className="" to="/music">
                                    Music
                                </Link>
                            </li>
                            <li className="pt-2">
                                <Link className="" to="/sports">
                                    Sports
                                </Link>
                            </li>
                            <li className="pt-2">
                                <Link className="" to="/art">
                                    Art
                                </Link>
                            </li>
                            <li className="pt-2">
                                <Link className="" to="/specials">
                                    Specials
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="w-1/2">
                        <ul>
                            <li className="pt-2">
                                <Link className="" to="/">
                                    About
                                </Link>
                            </li>
                            <li className="pt-2">
                                <Link className="" to="/music">
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="w-1/2 flex justify-between mt-5 md:w-2/12">
                    <Link to="/">
                        <FontAwesomeIcon
                            className="w-7 h-7 hover:text-purple"
                            icon={faInstagram}
                        />
                    </Link>
                    <Link to="/">
                        <FontAwesomeIcon
                            className="w-7 h-7 hover:text-purple"
                            icon={faTwitter}
                        />
                    </Link>
                    <Link to="/">
                        <FontAwesomeIcon
                            className="w-7 h-7 hover:text-purple"
                            icon={faLinkedinIn}
                        />
                    </Link>
                </div>
            </section>
        </div>
    );
};
