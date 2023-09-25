import { useFetch } from "../api/useFetch";
import { Spinner } from "@nextui-org/react";
import CardCustom from "../components/CardCustom";

const Sports = () => {
    const { data, loading } = useFetch(
        "events.json?keyword=cs2&size=3&sort=random&"
    );

    if (loading)
        <Spinner
            className="my-10"
            color="secondary"
        />;

        const events = data && data._embedded.events;

    return (
        <section className="w-full md:w-1/2 mt-10">
            <div className="bg-purple text-white px-5 py-4 md:rounded-xl">
                <p className="text-3xl">All eSports Events here!</p>
                <p className="mt-3">
                    Experience the exhilaration of live gaming tournaments and
                    events, secure your spot, and join the passionate eSports
                    community. Get your tickets now!
                </p>
            </div>
            <div className="flex flex-wrap justify-center md:justify-between mt-2">
                {events &&
                    events.map((event, i) => (
                        <CardCustom
                            isFull
                            key={i}
                            name={event.name}
                            date={event.dates.start.dateTime}
                            location={event._embedded.venues[0].name}
                            image={event.images[1].url}
                            id={event.id}
                        />
                    ))}
            </div>
        </section>
    );
};

export default Sports;
