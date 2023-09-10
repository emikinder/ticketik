import { useParams } from "react-router-dom";
import { useFetch } from "../api/useFetch";
import { Button, Image } from "@nextui-org/react";

export const Event = () => {
    let { id } = useParams();
    const { data, loading, error } = useFetch(`events/${id}`);

    error && <p>{error}</p>;
    loading && <p>Loading...</p>;
    console.log(data);
    return (
        <section>
            <h1>{data?.title}</h1>
            <h3>{data?.venue.display_location}</h3>
            <p>{data?.datetime_local}</p>
            <Image
                src={data?.performers[0].image}
                alt=""
            />
            <p>{data?.description}</p>
            <Button
                color="secondary"
                href={data?.url}
                auto
            >
                Buy Tickets
            </Button>
        </section>
    );
};
