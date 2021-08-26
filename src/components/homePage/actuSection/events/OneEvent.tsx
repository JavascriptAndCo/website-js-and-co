import OneEventModal from "./OneEventModal";
import { useState } from "react";
import urlBuilder from "../../../../../hook/imageUrl";
import Image from "next/image";
import { allContent_content_actu_events } from "__generated__/allContent";

function OneEvent({
    item,
}: {
    item: allContent_content_actu_events;
}): JSX.Element {
    const date = new Date(item?.date).toLocaleDateString();
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [ImgAnimation, setImgAnimation] = useState("");
    const [textAnimation, settextAnimation] = useState("");

    return (
        <div>
            {isOpen && (
                <OneEventModal
                    date={date}
                    item={item}
                    setIsOpen={setIsOpen}
                ></OneEventModal>
            )}
            <button
                onMouseEnter={() => {
                    setImgAnimation(
                        "transform transition-transform duration-1000  -translate-y-2 -translate-x-2",
                    );
                    settextAnimation(
                        "transform transition-transform duration-1000  -translate-y-1 translate-x-1",
                    );
                }}
                onMouseLeave={() => {
                    setImgAnimation(
                        "transform transition-transform duration-1000  translate-y-0 translate-x-0",
                    );
                    settextAnimation(
                        "transform transition-transform duration-1000  translate-y-0 -translate-x-0",
                    );
                }}
                onClick={() => setIsOpen(true)}
                className="lg:w-full text-left transition duration-500 flex justify-start fong-titilumWeb rounded-lg my-4  transform hover:-translate-y-1 hover:scale-105"
            >
                <div
                    className={`rounded-lg border border-black animate-fade shadow-cardShadow hidden lg:flex ${ImgAnimation}`}
                >
                    <Image
                        className="rounded-lg "
                        src={urlBuilder(`${item?.image?.url}`)}
                        alt="EventImage"
                        height={150}
                        width={250}
                        priority
                    />
                </div>
                <div
                    className={`md:w-8/12 mr-2  p-2 flex-col ${textAnimation} text-textShad`}
                    style={{ textShadow: "2px 2px 15px rgba(0, 0, 0, 0.3)" }}
                >
                    <h3 className="text-lg font-bold">{item?.name}</h3>
                    <h4 className="text-sm mt-1">{date}</h4>
                    <div className="h-8  pb-5 mt-2 overflow-hidden overflow-ellipsis">
                        <p className="text-xs leading-4">{item?.description}</p>
                    </div>
                    <div className="w-full border-black border-b pb-5">
                        <a className="mt-2 w-40 text-xs underline ">
                            Plus d'infos
                        </a>
                    </div>
                </div>
            </button>
        </div>
    );
}

export default OneEvent;
