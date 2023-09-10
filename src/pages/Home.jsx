// import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { Input } from "@nextui-org/react";
import CSGO from "../assets/images/eslcologne.png";
import CardSimple from "../components/CardSimple";
import CardFull from "../components/CardFull";
import { Image } from "@nextui-org/react";

import { useFetch } from "../api/useFetch";

export const Home = () => {
    const { data, loading, error } = useFetch("events");

    error && <p>{error}</p>;
    loading && <p>Loading...</p>;
    return (
        <>
            <section className="w-full">
                <div
                    className="md:h-[60vh] flex justify-center md:items-center overflow-hidden"
                    onClick={() => console.log("onclick")}
                >
                    <Image
                        src={CSGO}
                        alt="Counter Strike Global Offensive"
                        width="100%"
                        layout="responsive"
                        radius="none"
                    />
                </div>
                <div className="w-full bg-purple py-4 flex justify-center items-center">
                    <Input
                        type="text"
                        placeholder="Find your favorite artist or event..."
                        className="w-5/6 md:w-3/6 rounded-md text-sm"
                        endContent={<FontAwesomeIcon icon={faSearch} />}
                    />
                </div>
            </section>
            <section className="flex flex-col py-10 justify-center md:flex-row md:justify-around md:m-auto md:w-9/12">
                <section className="w-full md:w-1/2">
                    <h2 className="text-2xl text-center md:text-left">
                        <b>Top</b> <span>Selling</span>
                    </h2>
                    <div className="flex flex-wrap justify-center md:justify-start gap-3 mt-2">
                        {data &&
                            data.events.slice(0, 4).map((event, i) => (
                                <CardSimple
                                    key={i}
                                    location={event.venue.display_location}
                                    date={event.datetime_local}
                                    name={event.performers[0].short_name}
                                    image={event.performers[0].image}
                                    id={event.id}
                                />
                            ))}
                    </div>
                </section>
                <section className="w-full md:w-1/2 mt-10">
                    <div className="bg-purple text-white px-5 py-4 md:rounded-xl">
                        <p className="text-3xl">All eSports Events here!</p>
                        <p className="mt-3">
                            Experience the exhilaration of live gaming
                            tournaments and events, secure your spot, and join
                            the passionate eSports community. Get your tickets
                            now!
                        </p>
                    </div>
                    <div className="flex flex-wrap justify-center md:justify-between mt-2">
                        {data &&
                            data.events.slice(4, 7).map((event, i) => (
                                <CardFull
                                    key={i}
                                    location={event.venue.display_location}
                                    date={event.datetime_local}
                                    name={event.performers[0].short_name}
                                    image={event.performers[0].image}
                                />
                            ))}
                    </div>
                </section>
            </section>
        </>
    );
};
