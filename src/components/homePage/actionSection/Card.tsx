import { motion } from "framer-motion";
import React, { Dispatch, SetStateAction, useState } from "react";
import Image from "next/image";
import CardContent from "./CardContent";
import { allContent_content_action_action_cards } from "__generated__/allContent";
import urlBuilder from "hook/imageUrl";

interface IProps {
    item: allContent_content_action_action_cards | undefined;
    setIsModal: Dispatch<SetStateAction<boolean>>;
    index: number;
    setCardSelected: Dispatch<SetStateAction<number>>;
    isModal: boolean;
    isVisibleSec3: boolean;
}

function Card({
    item,
    setIsModal,

    index,
    setCardSelected,
    isVisibleSec3,
}: IProps): JSX.Element {
    const [ImgAnimation, setImgAnimation] = useState("");
    const [textAnimation, settextAnimation] = useState("");
    return (
        <div
            onMouseEnter={() => {
                setImgAnimation(
                    "transform transition-transform duration-1000  -translate-y-1 -translate-x-1",
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
            className={`flex flex-col items-center xxl:items-start ${textAnimation} ${
                isVisibleSec3 && `animate-fadeBottom`
            }`}
        >
            <motion.button
                onClick={() => {
                    setIsModal(true);
                    setCardSelected(index);
                }}
                className={`relative z-50 h-24 w-24 ml-3`}
                whileTap={{ scale: 0.9 }}
            >
                <Image
                    className={`z-40 ${ImgAnimation}`}
                    src={urlBuilder(`${item?.icon?.url}`)}
                    alt="cardIcon"
                    layout="fill"
                />
            </motion.button>
            <CardContent item={item} />
        </div>
    );
}

export default Card;
