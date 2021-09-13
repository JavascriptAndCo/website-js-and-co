import { AnimatePresence, motion } from "framer-motion";
import React, { Dispatch, SetStateAction } from "react";
import { allContent_content_partners_partners } from "__generated__/allContent";
import Image from "next/image";
import urlBuilder from "hook/imageUrl";

interface IProps {
    item: allContent_content_partners_partners;
    setIsModal: Dispatch<SetStateAction<boolean>>;
}

function PartnerModal({ item, setIsModal }: IProps): JSX.Element {
    return (
        <div>
            <div
                className={`flex mb-16 lg:mb- font-titilumWeb  z-50  justify-center items-center fixed inset-0 transition duration-500 `}
            >
                <AnimatePresence>
                    <motion.div
                        key="modal"
                        animate={{ height: 600, opacity: 1 }}
                        initial={{ height: 0, opacity: 0 }}
                        transition={{ duration: 1 }}
                        exit={{ height: 0 }}
                        className="w-full h-80  px-5 lg:p-8 lg:mx-12 shadow-buttonShadow flex flex-col  border border-black justify-start z-50 text-black  bg-white  rounded-lg overflow-y-auto"
                    >
                        <motion.button
                            className="w-full flex justify-end my-2"
                            onClick={() => setIsModal(false)}
                        >
                            <Image
                                className="transform hover:scale-110"
                                src={"/icons/CloseButton.png"}
                                alt="closeButton"
                                height={30}
                                width={30}
                                priority
                            ></Image>
                        </motion.button>{" "}
                        <div className="flex flex-col justify-start items-center h-full">
                            <a
                                target="_blank"
                                href={item.link}
                                className="w-10/12 h-1/3 lg:w-60 lg:h-52"
                                style={{
                                    backgroundImage: `url(${urlBuilder(
                                        item?.logo.url,
                                    )})`,
                                    backgroundPosition: "center",
                                    backgroundRepeat: "no-repeat",
                                    backgroundSize: "contain",
                                }}
                            />
                            <div className="flex flex-col items-center lg:px-20">
                                <span className="text-base mt-5 lg:text-2xl">
                                    {item?.description}
                                </span>
                            </div>
                            <motion.a
                                target="_blank"
                                href={item.link}
                                whileTap={{ scale: 0.9 }}
                                className="bg-black mt-10 w-10/12 lg:w-72 text-customYellow text-xs py-1 px-12 shadow-buttonShadow rounded-md transform hover:scale-105"
                            >
                                Voir le Site
                            </motion.a>
                        </div>
                    </motion.div>
                </AnimatePresence>
            </div>
        </div>
    );
}

export default PartnerModal;
