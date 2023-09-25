import { useFetch } from "../api/useFetch";
import { Spinner } from "@nextui-org/react";
import CardCustom from "../components/CardCustom";

const Sports = () => {
    const { data, loading } = useFetch("events?taxonomies.name=mls&per_page=3&");

    if (loading)
        <Spinner
            className="my-10"
            color="secondary"
        />;

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
                {data &&
                    data.events.map((event, i) => (
                        <CardCustom
                            isFull
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
    );
};

export default Sports;
