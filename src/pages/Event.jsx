import { useParams } from "react-router-dom";
import { useFetch } from "../api/useFetch";
import { Button, Image, Spinner } from "@nextui-org/react";
import { formatDate } from "../components/common/date";

import { useEffect } from "react";

export const Event = () => {
    let { id } = useParams();
    const { data, loading } = useFetch(`events/${id}?`);

    const createRecents = () => {
        const recents = JSON.parse(localStorage.getItem("recents"));
        if (recents === null) {
            localStorage.setItem(
                "recents",
                JSON.stringify([{ id: data.id, title: data.name }])
            );
        } else {
            const filter = recents.filter((recent) => recent.id !== id);
            localStorage.setItem(
                "recents",
                JSON.stringify([...filter, { id: data.id, title: data.name }])
            );
        }
    };

    useEffect(() => {
        if (data === null) return;
        createRecents();
    });

    if (loading)
        <Spinner
            className="my-10"
            color="secondary"
        />;

    return (
        <section className="flex flex-col w-full md:w-10/12 md:flex-row md:m-auto md:my-20 gap-3">
            {data && (
                <>
                    <div className="w-full px-3 md:w-1/4">
                        <Image
                            src={data.images[7].url}
                            alt=""
                            width="350"
                        />
                    </div>
                    <div className="w-full px-3 flex flex-col justify-between">
                        <section>
                            <h1 className="text-3xl text-bold">{data.name}</h1>
                            <p>{data._embedded.venues[0].name}</p>
                            <p className="">
                                {formatDate(data.dates.start.localDate)}
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
