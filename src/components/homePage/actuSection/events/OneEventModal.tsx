import React, { Dispatch, SetStateAction } from "react";
import BlackButton from "../../../buttons/BlackButton";
import { motion, AnimatePresence } from "framer-motion";
import { allContent_content_actu_events } from "__generated__/allContent";
import urlBuilder from "hook/imageUrl";
import Image from "next/image";

interface Iprops {
    item: allContent_content_actu_events;
    date: string;
    setIsOpen: Dispatch<SetStateAction<boolean>>;
}

function OneEventModal({ date, item, setIsOpen }: Iprops): JSX.Element {
    return (
        <div>
            <div
                className={`flex font-titilumWeb bg-white z-50 bg-opacity-80 justify-center items-center fixed inset-0 transition duration-500 `}
            >
                <AnimatePresence>
                    <motion.div
                        key="modal"
                        animate={{ height: 600, opacity: 1 }}
                        initial={{ height: 0, opacity: 0 }}
                        transition={{ duration: 1 }}
                        exit={{ height: 0 }}
                        className="w-10/12 h-10/12 cursor-pointer lg:h-96 px-5 lg:p-8 lg:mx-12 shadow-buttonShadow flex flex-col  border border-black justify-start z-50 text-black dark:text-white bg-customYellow dark:bg-component rounded-lg overflow-y-auto"
                    >
                        <div className="flex justify-between">
                            <div className="flex-col">
                                <motion.button
                                    className="w-full flex justify-end lg:justify-start my-2"
                                    onClick={() => setIsOpen(false)}
                                >
                                    <Image
                                        className="transform hover:scale-110"
                                        src={"/icons/CloseButton.png"}
                                        alt="closeButton"
                                        height={30}
                                        width={30}
                                        priority
                                    ></Image>
                                </motion.button>
                                <h2 className="w-full text-3xl font-bold  lg:pr-20">
                                    {item?.name}
                                </h2>
                                <h3 className="text-xl mt-3">
                                    {`Rendez-vous le ${date}`}{" "}
                                </h3>
                                {/* Ajouter le lieux au data envoyer par strapi URGENT !!!! */}
                                <p className="text-xl mt-20 font-bold">
                                    Lieu du rendez-vous : {item?.place}
                                </p>
                                <p className="text-xl mt-3 font-bold">
                                    Adresse : {item?.adresse}
                                </p>
                            </div>
                            <div
                                className="h-72 w-6/12 rounded-lg  flex-col items-end p-5  shadow-cardShadow border border-black hidden lg:flex"
                                style={{
                                    backgroundImage: `url(${urlBuilder(
                                        `${item?.image?.url}`,
                                    )})`,
                                    backgroundPosition: "center",
                                    backgroundSize: "cover",
                                    backgroundRepeat: "no-repeat",
                                }}
                            ></div>
                        </div>
                        <p className="text-lg mt-10 mb-10">
                            {item?.description}
                        </p>
                        <a href={`${item?.link_register}`} target="_blank">
                            <BlackButton link={""}>Je m'inscrit</BlackButton>
                        </a>
                    </motion.div>
                </AnimatePresence>
            </div>
        </div>
    );
}

export default OneEventModal;
