import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { Input } from "@nextui-org/react";
import { Card, CardHeader, CardBody, Image } from "@nextui-org/react";
import CSGO from "../assets/images/eslcologne.png";
import { getEvents } from "../api/EventsAPI";

export const Home = () => {
    const [events, setEvents] = useState();
    const fetchTopEvents = async () => {
        const { events } = await getEvents();
        console.log(events);
        setEvents(events);
    };

    useEffect(() => {
        fetchTopEvents();
    }, []);

    return (
        <>
            <section className="w-full">
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
                        <TopSelligCards events={events} />
                    </div>
                </section>
                <section className="w-full md:w-1/2 mt-10">
                    <div className="bg-purple text-white px-5 py-4 rounded-xl">
                        <p className="text-3xl">All eSports Events here!</p>
                        <p className="mt-3">
                            Experience the exhilaration of live gaming
                            tournaments and events, secure your spot, and join
                            the passionate eSports community. Get your tickets
                            now!
                        </p>
                    </div>
                    <div className="flex justify-center md:justify-start gap-3 mt-2">
                        <TopSelligCardsFull events={events} />
                    </div>
                </section>
            </section>
        </>
    );
};

const TopSelligCards = ({ events }) => {
    return events?.slice(0, 4).map((event, i) => (
        <Card
            className="py-4"
            key={i}
        >
            <CardHeader className="pb-0 pt-2 px-4 flex-col items-start w-[300px]">
                <p className="text-tiny uppercase font-bold">
                    {event.venue.display_location}
                </p>
                <small className="text-default-500">
                    {event.datetime_local}
                </small>
                <h4 className="font-bold text-large">
                    {event.performers[0].short_name}
                </h4>
            </CardHeader>
            <CardBody className="overflow-visible py-2 justify-end">
                <Image
                    isZoomed
                    alt="Card background"
                    className="object-fill rounded-xl"
                    src={event.performers[0].image}
                    width={300}
                    height={200}
                />
            </CardBody>
        </Card>
    ));
};

const TopSelligCardsFull = ({ events }) => {
    return events?.slice(4, 7).map((event, i) => (
        <Card
            className="col-span-12 sm:col-span-4"
            key={i}
        >
            <CardHeader className="absolute z-10 top-1 flex-col !items-start">
                <p className="text-tiny text-white/60 uppercase font-bold">
                {event.venue.display_location}
                </p>
                <h4 className="text-white font-medium text-large">
                    {event.performers[0].short_name}
                </h4>
            </CardHeader>
            <Image
                removeWrapper
                isZoomed
                alt="Card background"
                className="z-0 w-full h-full object-cover"
                src={event.performers[0].image}
            />
        </Card>
    ));
};
