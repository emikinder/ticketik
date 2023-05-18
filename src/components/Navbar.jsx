import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faTwitter, faRebel } from "@fortawesome/free-brands-svg-icons";

export const Navbar = () => {
    return (
        <nav className="flex justify-center w-full fixed backdrop-blur-lg">
            <div className="w-10/12 px-10 py-8 flex justify-between items-center">
                <div>
                    <Link to="/" onClick={() => window.scrollTo(0, 0)}>
                        {/* <img
                            className="w-16 h-fit-content"
                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/Adidas_isologo.svg/1200px-Adidas_isologo.svg.png"
                            alt="logo-img"
                        /> */}
                        <FontAwesomeIcon className="w-12 h-12 hover:animate-ping hover:text-customGreen" icon={faRebel} />
                    </Link>
                </div>
                <ul className="flex justify-between w-3/6">
                    <li>
                        <Link className="navbar__item" to="/">
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link className="navbar__item" to="/results">
                            Results
                        </Link>
                    </li>
                    <li>
                        <Link className="navbar__item" to="/sports">
                            Sports
                        </Link>
                    </li>
                    <li>
                        <Link className="navbar__item" to="/services">
                            Services
                        </Link>
                    </li>
                    <li>
                        <Link className="navbar__item" to="/contact">
                            Contact us
                        </Link>
                    </li>
                </ul>
                <div className="flex justify-between w-20">
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
        </nav>
    );
};
