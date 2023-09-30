import { useFetch } from "../api/useFetch";
import { Spinner } from "@nextui-org/react";
import CardCustom from "./CardCustom";

const TopSellers = () => {
    const { data, loading } = useFetch("events?per_page=6&");

    if (loading)
        <Spinner
            className="my-10"
            color="secondary"
        />;

    return (
        <section className="w-full md:w-1/2">
            <h2 className="text-2xl text-center md:text-left">
                <b>Top</b> <span>Selling</span>
            </h2>
            <div className="flex flex-wrap justify-center md:justify-start gap-3 mt-2">
                {data &&
                    data.events.map((event, i) => (
                        <CardCustom
                            key={i}
                            name={event.performers[0].name}
                            date={event.datetime_local}
                            location={event.venue.display_location}
                            image={event.performers[0].image}
                            id={event.id}
                            isTrending={i <= 2}
                        />
                    ))}
            </div>
        </section>
    );
};

export default TopSellers;
