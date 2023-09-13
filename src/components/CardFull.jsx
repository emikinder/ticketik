import { Card, CardHeader, Image } from "@nextui-org/react";
import { useNavigate } from "react-router-dom";

const CardFull = ({ location, name, image, id }) => {
    const navigate = useNavigate();
    const onPressHandler = () => {
        navigate(`/event/${id}`);
    };
    return (
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
};

export default CardFull;
