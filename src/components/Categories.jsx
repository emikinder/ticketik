import {
    faMusic,
    faFutbol,
    faPalette,
} from "@fortawesome/free-solid-svg-icons";
import { Category } from "./Category";

export const Categories = () => {
    return (
        <section className="flex flex-col py-10 justify-center md:flex-row md:justify-around md:m-auto md:w-9/12">
            <section className="w-full px-2 md:w-1/2">
                <div className="flex justify-between">
                    <Category
                        icon={faMusic}
                        name="music"
                    />
                    <Category
                        icon={faFutbol}
                        name="sports"
                    />
                    <Category
                        icon={faPalette}
                        name="art"
                    />
                </div>
            </section>
        </section>
    );
};
