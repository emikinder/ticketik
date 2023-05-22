import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFutbol } from "@fortawesome/free-solid-svg-icons";
import { LEAGUES_DATA } from "../assets/data/FootballData";
import OG from "../assets/images/OG.png";
import Table from "../components/Table";

export const Home = () => {
    // const league = LEAGUES_DATA[0];
    return (
        <>
            <section className="flex justify-center items-center h-[80vh]">
                <div className="w-full px-10 mt-10 md:flex md:px-0 md:w-10/12">
                    <div className="items-center md:w-8/12">
                        <h1 className="w-10/12 text-center text-3xl md:w-full md:text-left md:text-4xl lg:text-6xl">
                            Take your{" "}
                            <span className="text-customGreen">passion</span>{" "}
                            for <span className="text-customGreen">sports</span>{" "}
                            to the next level.
                        </h1>
                    </div>
                </div>
            </section>

            <section className="h-screen">
                <div className="flex justify-center">
                    <div className="md:flex md:w-10/12">
                        <div className="md:w-6/12">
                            <h2 className="text-2xl">
                                <FontAwesomeIcon
                                    className="hover:animate-spin"
                                    icon={faFutbol}
                                />{" "}
                                Top 5{" "}
                                <span className="text-customGreen">
                                    Football
                                </span>{" "}
                                Leagues
                            </h2>
                            <div className="flex flex-wrap justify-between items-center">
                                {LEAGUES_DATA.map((league, i) => (
                                    <Table key={i} league={league} />
                                ))}
                            </div>
                        </div>
                        <div className="md:w-6/12">
                            <div className="w-full px-8 py-4 text-white bg-customGreen rounded">
                                <p className="text-3xl">
                                    All Football Matches Fixtures & Tips for
                                    Tomorrow
                                </p>
                                <p className="mt-3">
                                    Get all the information about tomorrows
                                    matches from more than 300 leagues
                                    worldwide. We offer pre-match tips, results,
                                    and more to help you decide your next bet.
                                </p>
                            </div>
                            <div className="mt-8 w-1/2 flex justify-between items-start">
                                <img
                                    className="rounded-md w-10/12"
                                    src="https://vbsports.es/wp-content/uploads/2018/08/nba-banner.jpg"
                                    alt="NBA"
                                />
                                <img
                                    className="border rounded-md w-10/12"
                                    src={OG}
                                    alt="Olympic Games"
                                />
                            </div>
                        </div>
                    </div>
                    <div></div>
                </div>
            </section>
        </>
    );
};
