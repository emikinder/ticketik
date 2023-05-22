import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter, faInstagram } from "@fortawesome/free-brands-svg-icons";

export const Footer = () => {
    return (
        <div className="p-10 w-full h-[40vh] bg-customGreen text-white">
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
    );
};
