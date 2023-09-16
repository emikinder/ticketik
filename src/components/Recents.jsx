import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const Recents = () => {
    const [recents, setRecents] = useState([]);

    const removeRecent = (id) => {
        const newRecents = recents.filter((recent) => recent.id !== id);
        localStorage.setItem("recents", JSON.stringify(newRecents));
        setRecents(newRecents);
    };

    const navigate = useNavigate();
    const onPressHandler = (id) => {
        navigate(`/event/${id}`);
    };

    useEffect(() => {
        const recents = JSON.parse(localStorage.getItem("recents"));
        setRecents(recents);
    }, []);

    return (
        <>
            <section className="w-full bg-purple items-center py-5 border">
                <div className="w-10/12 m-auto text-white flex flex-wrap">
                    <p className="mr-10">Recents</p>
                    {recents?.length > 0 ? (
                        recents.toReversed().slice(0, 4).map((event, i) => (
                            <div
                                key={i}
                                className="bg-white mr-2 mb-1 text-black text-sm rounded-md px-2 py-1 flex"
                            >
                                <p className="cursor-pointer hover:font-bold" onClick={() => onPressHandler(event.id)}>{event.title}</p>
                                <button
                                    className="ml-2 hover:font-bold"
                                    onClick={() => removeRecent(event.id)}
                                >
                                    x
                                </button>
                            </div>
                        ))
                    ) : (
                        <p>No recents</p>
                    )}
                </div>
            </section>
        </>
    );
};
