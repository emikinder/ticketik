import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { Input, Image } from "@nextui-org/react";
import CSGO from "../assets/images/eslcologne.png";

import { Recents } from "../components/Recents";
import TopSellers from "../components/TopSellers";
import Sports from "../components/Sports";

export const Home = () => {
    return (
        <>
            <section className="w-full">
                <div
                    className="md:h-[60vh] flex justify-center md:items-center overflow-hidden"
                    onClick={() => console.log("onclick")}
                >
                    <Image
                        src={CSGO}
                        alt="Counter Strike Global Offensive"
                        width="100%"
                        layout="responsive"
                        radius="none"
                    />
                </div>
                <div className="w-full bg-purple py-4 flex justify-center items-center">
                    <Input
                        type="text"
                        placeholder="Find your favorite artist or event..."
                        className="w-5/6 md:w-3/6 rounded-md text-sm"
                        endContent={<FontAwesomeIcon icon={faSearch} />}
                    />
                </div>
            </section>
            <section className="flex flex-col py-10 justify-center md:flex-row md:justify-around md:m-auto md:w-9/12">
                <section className="w-full md:w-1/2">
                    <TopSellers />
                </section>
                <Sports />
            </section>
            <Recents />
        </>
    );
};
