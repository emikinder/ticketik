import { Card, CardHeader, CardBody, Image } from "@nextui-org/react";
import { useNavigate } from "react-router-dom";
import { formatDate } from "../components/common/date";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFire } from "@fortawesome/free-solid-svg-icons";

const CardCustom = ({ isFull, isTrending, location, date, name, image, id }) => {
    const navigate = useNavigate();
    const onPressHandler = () => {
        navigate(`/event/${id}`);
    };

    const simple = (
        <Card
            isPressable
            onPress={onPressHandler}
            className="py-4 cursor-pointer md:w-[45%] lg:w-[30%]"
        >
            <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                <section className="text-left flex w-full">
                    <div>
                        <p className="text-tiny uppercase font-bold">
                            {location}
                        </p>
                        <small className="text-default-500">
                            {formatDate(date)}
                        </small>
                    </div>
                    {isTrending && (
                        <FontAwesomeIcon
                            icon={faFire}
                            size="lg"
                            className="ml-auto text-red-500 fa-shake"
                        />
                    )}
                </section>
                <h4 className="font-bold text-large text-left">{name}</h4>
            </CardHeader>
            <CardBody className="overflow-visible py-2 justify-end">
                <Image
                    isZoomed
                    alt="Card background"
                    className="object-fill rounded-xl"
                    src={image}
                    width={300}
                />
            </CardBody>
        </Card>
    );
    const full = (
        <Card
            isPressable
            onPress={onPressHandler}
            className="mt-2 md:w-[45%] md:mt-0 lg:w-[30%]"
            onClick={() => console.log(id)}
        >
            <CardHeader className="absolute z-10 top-1 flex-col !items-start">
                <p className="text-tiny text-white/60 uppercase font-bold">
                    {location}
                </p>
                <h4 className="text-white font-medium text-large text-left">
                    {name}
                </h4>
            </CardHeader>
            <Image
                removeWrapper
                isZoomed
                alt="Card background"
                className="z-0 w-full h-full object-cover"
                src={image}
            />
        </Card>
    );
    return isFull ? full : simple;
};

export default CardCustom;
