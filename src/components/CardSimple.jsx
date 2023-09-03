import { Card, CardHeader, CardBody, Image } from "@nextui-org/react";

const CardSimple = ({ location, date, name, image }) => {
    return (
        <Card
            className="py-4"
            // key={i}
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
};

export default CardSimple;
