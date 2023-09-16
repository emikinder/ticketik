import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { Input, Image, Spinner } from "@nextui-org/react";
import CSGO from "../assets/images/eslcologne.png";
import CardCustom from "../components/CardCustom";

import { useFetch } from "../api/useFetch";
import { Recents } from "../components/Recents";
import Sports from "../components/Sports";

export const Home = () => {
    const { data, loading } = useFetch("events?");
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
                        {loading && (
                            <Spinner
                                className="my-10"
                                color="secondary"
                            />
                        )}
                        {data &&
                            data.events.slice(0, 4).map((event, i) => (
                                <CardCustom
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
                <Sports />
            </section>
            <Recents />
        </>
    );
};
