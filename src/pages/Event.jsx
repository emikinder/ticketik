import { useParams } from "react-router-dom";
import { useFetch } from "../api/useFetch";
import { Button, Image, Spinner, Chip } from "@nextui-org/react";
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

    const onPressHandler = (url) => {
        window.open(url, "_blank");
    };

    return (
        <section className="flex flex-col w-full md:w-10/12 md:flex-row md:m-auto md:my-28 gap-3">
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
                            <p>
                                {data.venue.name} -{" "}
                                {data.venue.display_location}
                            </p>
                            <p className="">
                                {formatDate(data.datetime_local)}
                            </p>

                            <Chip
                                color="secondary"
                                variant="bordered"
                                size="sm"
                                className="capitalize"
                            >
                                {data.type}
                            </Chip>
                        </section>
                        <Button
                            className="w-full mb-6 mt-10 md:m-0 md:w-[130px]"
                            color="secondary"
                            onPress={() => onPressHandler(data.url)}
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
