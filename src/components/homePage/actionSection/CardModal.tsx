import React, { Dispatch, SetStateAction } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { allContent_content_action_action_cards } from "__generated__/allContent";
import urlBuilder from "hook/imageUrl";

interface IProps {
    setIsModal: Dispatch<SetStateAction<boolean>>;
    isModal: boolean;
    selectedCard: allContent_content_action_action_cards;
}

function CardModal({ setIsModal, isModal, selectedCard }: IProps): JSX.Element {
    return (
        <div className="flex xxl:hidden bg-customYellow z-50  px-10 absolute h-screen w-screen items-center justify-center">
            <motion.button
                animate={{ opacity: 1 }}
                initial={{ opacity: 0 }}
                transition={{ delay: 0.2 }}
                onClick={() => setIsModal(false)}
                className={`font-titilumWeb lg:flex flex-col z-10 lg:p-7 items-center  ${
                    isModal ? `flex` : `hidden`
                }`}
            >
                <Image
                    src={urlBuilder(`${selectedCard?.icon?.url}`)}
                    alt="cardIcon"
                    width={100}
                    height={100}
                />
                <span className="font-bold text-5xl mt-5">
                    {selectedCard?.title}
                </span>
                <span className="text-2xl leading-10 border-b mt-5  text-center border-black pt-2 pb-5">
                    {selectedCard?.text}
                </span>
            </motion.button>
        </div>
    );
}

export default CardModal;
