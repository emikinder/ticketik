import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

export const Category = ({ icon, name }) => {
    return (
        <Link className="flex flex-col items-center gap-2 cursor-pointer hover:font-bold" to={`/${name}`}>
            <div className="bg-slate-300 text-black hover:bg-purple hover:text-white rounded-full w-28 h-28 flex justify-center items-center">
                <FontAwesomeIcon icon={icon} />
            </div>
            <p className="capitalize">{name}</p>
        </Link>
    );
};
