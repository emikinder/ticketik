import { useParams } from "react-router-dom";
import { useFetch } from "../api/useFetch";
import { Button, Image, Spinner } from "@nextui-org/react";

import { useEffect } from "react";

export const Event = () => {
    let { id } = useParams();
    const { data, loading } = useFetch(`events/${id}?`);

    const formatDate = (date) => {
        const newDate = new Date(date);
        return newDate.toLocaleDateString("en-GB", {
            day: "numeric",
            month: "long",
            year: "numeric",
        });
    };

    useEffect(() => {
        if (data === null) return;
        const recents = JSON.parse(localStorage.getItem("recents"));
        if (recents === null) {
            localStorage.setItem(
                "recents",
                JSON.stringify([{ id: Number(id), title: data.short_title }])
            );
        } else {
            const filter = recents.filter((recent) => recent.id !== Number(id));
            localStorage.setItem(
                "recents",
                JSON.stringify([
                    ...filter,
                    { id: Number(id), title: data.short_title },
                ])
            );
        }
    }, [data, id]);

    console.log(data);

    return (
        <section className="flex flex-col w-full md:w-10/12 md:flex-row md:m-auto md:my-20 gap-3">
            {loading && (
                <Spinner
                    className="my-10"
                    color="secondary"
                />
            )}
            {data && (
                <>
                    <div className="w-full px-3 md:w-1/4">
                        <Image
                            src={data.performers[0].image}
                            alt=""
                            width="350"
                        />
                    </div>
                    <div className="w-full px-3 flex flex-col justify-between">
                        <section>
                            <h1 className="text-3xl text-bold">{data.title}</h1>
                            <p>{data.venue.display_location}</p>
                            <p className="">
                                {formatDate(data.datetime_local)}
                            </p>

                            <p>{data.description}</p>
                        </section>
                        <Button
                            className="w-full mb-6 mt-10 md:m-0 md:w-[130px]"
                            color="secondary"
                            href={data.url}
                            auto
                        >
                            Buy Tickets
                        </Button>
                    </div>
                </>
            )}
        </section>
    );
};
