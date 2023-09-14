import { Card, CardHeader, CardBody, Image } from "@nextui-org/react";
import { useNavigate } from "react-router-dom";

const CardCustom = ({ isFull, location, date, name, image, id }) => {
    const navigate = useNavigate();
    const onPressHandler = () => {
        navigate(`/event/${id}`);
    };
    const simple = (
        <Card
            isPressable
            onPress={onPressHandler}
            className="py-4 cursor-pointer"
        >
            <CardHeader className="pb-0 pt-2 px-4 flex-col items-start w-[300px]">
                <p className="text-tiny uppercase font-bold">{location}</p>
                <small className="text-default-500">{date}</small>
                <h4 className="font-bold text-large">{name}</h4>
            </CardHeader>
            <CardBody className="overflow-visible py-2 justify-end">
                <Image
                    isZoomed
                    alt="Card background"
                    className="object-fill rounded-xl"
                    src={image}
                    width={300}
                    height={200}
                />
            </CardBody>
        </Card>
    );
    const full = (
        <Card
            isPressable
            onPress={onPressHandler}
            className="w-11/12 mt-2 md:w-[32.5%] md:mt-0"
            onClick={() => console.log(id)}
        >
            <CardHeader className="absolute z-10 top-1 flex-col !items-start">
                <p className="text-tiny text-white/60 uppercase font-bold">
                    {location}
                </p>
                <h4 className="text-white font-medium text-large">{name}</h4>
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
