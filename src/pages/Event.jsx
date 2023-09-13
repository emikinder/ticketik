import { useParams } from "react-router-dom";
import { useFetch } from "../api/useFetch";
import { Button, Image } from "@nextui-org/react";

export const Event = () => {
    let { id } = useParams();
    const { data, loading, error } = useFetch(`events/${id}`);

    loading && <p>Loading...</p>;
    error && <p>{error}</p>;
    console.log(data);

    const formatDate = (date) => {
        const newDate = new Date(date);
        return newDate.toLocaleDateString("en-GB", {
            day: "numeric",
            month: "long",
            year: "numeric",
        });
    };

    return (
        <section className="flex flex-col w-full md:w-10/12 md:flex-row md:m-auto md:my-20 gap-3">
            <div className="w-full px-3 md:w-1/3">
                <Image
                    src={data?.performers[0].image}
                    alt=""
                    width="500"
                />
            </div>
            <div className="w-full px-3 md:w-2/3 flex flex-col justify-between">
                <section>
                    <h1 className="text-3xl text-bold">{data?.title}</h1>
                    <p>{data?.venue.display_location}</p>
                    <p className="">{formatDate(data?.datetime_local)}</p>

                    <p>{data?.description}</p>
                </section>
                <Button
                    className="w-full mb-6 mt-10 md:m-0 md:w-[130px]"
                    color="secondary"
                    href={data?.url}
                    auto
                >
                    Buy Tickets
                </Button>
            </div>
        </section>
    );
};
