import { useFetch } from "../api/useFetch";
import { Spinner } from "@nextui-org/react";
import CardCustom from "./CardCustom";

const TopSellers = () => {
    const { data, loading } = useFetch("events.json?size=4&sort=relevance,desc&");

    if (loading)
        <Spinner
            className="my-10"
            color="secondary"
        />;

    const events = data && data._embedded.events;
    return (
        <>
            <h2 className="text-2xl text-center md:text-left">
                <b>Top</b> <span>Selling</span>
            </h2>
            <div className="flex flex-wrap justify-center md:justify-start gap-3 mt-2">
                {events &&
                    events.map((event, i) => (
                        <CardCustom
                            key={i}
                            name={event.name}
                            date={event.dates.start.dateTime}
                            location={event.products[0].name}
                            image={event.images[5].url}
                            id={event.id}
                        />
                    ))}
            </div>
        </>
    );
};

export default TopSellers;
