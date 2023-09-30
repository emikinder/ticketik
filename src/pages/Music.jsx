import { Image, Chip } from "@nextui-org/react";
import { useFetch } from "../api/useFetch";
import { Spinner } from "@nextui-org/react";
import { useNavigate } from "react-router-dom";
import PortadaMusic from "../assets/images/portada-music.jpg";
import CardCustom from "../components/CardCustom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFutbol, faMasksTheater } from "@fortawesome/free-solid-svg-icons";

export const Music = () => {
    const navigate = useNavigate();
    const { data, loading } = useFetch(
        "events?per_page=9&taxonomies.name=concert&"
    );

    window.scrollTo(0, 0);

    if (loading)
        <Spinner
            className="my-10"
            color="secondary"
        />;

    return (
        <section className="">
            <Image
                src={PortadaMusic}
                alt="Music"
                width="100%"
                layout="responsive"
                radius="none"
            />
            <div className="p-6 md:m-auto md:w-9/12">
                <h1 className="text-3xl">
                    <strong>Music</strong> events & concerts
                </h1>
                <div className="flex flex-wrap justify-around gap-3 mt-5">
                    {data &&
                        data.events.map((event, i) => (
                            <CardCustom
                                key={i}
                                name={event.performers[0].name}
                                date={event.datetime_local}
                                location={event.venue.display_location}
                                image={event.performers[0].image}
                                id={event.id}
                                isTrending={i <= 1}
                            />
                        ))}
                </div>
                <div className="flex mt-10">
                    <strong>Explore&nbsp;</strong> other categories:
                    <div className="ml-5 flex gap-4">
                        <Chip
                            size="md"
                            color="secondary"
                            className="cursor-pointer"
                            onClick={() => navigate("/sports")}
                            startContent={<FontAwesomeIcon icon={faFutbol} />}
                        >
                            Sports
                        </Chip>
                        <Chip
                            size="md"
                            color="secondary"
                            className="cursor-pointer"
                            onClick={() => navigate("/Comedy")}
                            startContent={<FontAwesomeIcon icon={faMasksTheater} />}
                        >
                            Comedy
                        </Chip>
                    </div>
                </div>
            </div>
        </section>
    );
};
