// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import NBA from "../assets/images/nba.png";
import CSGO from "../assets/images/eslcologne.png";
// import { FootballTable } from "../components/FootballTable";

export const Home = () => {
    return (
        <>
            <section className="w-full h-[50vh] md:h-[90vh] pt-[4.5rem] md:pt-24">
                <div
                    className="md:h-[60vh] flex justify-center md:items-center overflow-hidden"
                    onClick={() => console.log("onclick")}
                >
                    <img
                        className=""
                        src={CSGO}
                        alt="Counter Strike Global Offensive"
                    />
                </div>
                <div className="w-full bg-customGreen py-4 flex justify-center items-center">
                    <input
                        className="w-5/6 md:w-3/6 rounded-md px-3 h-8 text-sm"
                        type="text"
                        placeholder="Find your favorite artist or event..."
                    />
                </div>
            </section>
            <section className="md:h-screen">
                <div className="flex justify-center">
                    <div className="md:flex md:w-10/12">
                        <div className="md:w-6/12">
                            <h2 className="text-2xl text-center md:text-left">
                                <b>Top</b> <span>Selling</span>
                            </h2>
                            <div className="items-center mt-6 flex justify-center md:block md:justify-normal"></div>
                        </div>
                        <div className="md:w-6/12">
                            <div className="w-full px-8 py-4 text-white bg-customGreen md:rounded">
                                <p className="text-3xl">
                                    All eSports Events here!
                                </p>
                                <p className="mt-3">
                                    Experience the exhilaration of live gaming
                                    tournaments and events, secure your spot,
                                    and join the passionate eSports community.
                                    Get your tickets now!
                                </p>
                            </div>
                            <div className="mt-8 mb-8 w-1/2 flex justify-between items-start">
                                <img
                                    className="rounded-md h-40"
                                    src={NBA}
                                    alt="NBA"
                                />
                                {/* <img
                                    className="border rounded-md w-10/12"
                                    src={}
                                    alt="Olympic Games"
                                />
                                <img
                                    className="border rounded-md w-10/12"
                                    src={}
                                    alt="Mundial"
                                /> */}
                            </div>
                        </div>
                    </div>
                    <div></div>
                </div>
            </section>
        </>
    );
};
