import { Card, CardHeader, Image } from "@nextui-org/react";

const CardFull = ({ location, name, image, id }) => {
    return (
        <Card
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
