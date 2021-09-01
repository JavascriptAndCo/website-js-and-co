import { AnimatePresence, motion } from "framer-motion";
import urlBuilder from "hook/imageUrl";
import React, { Dispatch, SetStateAction } from "react";
import { members_member_members } from "__generated__/members";
import Image from "next/image";

function MemberModal({
    setIsModal,
    item,
}: {
    setIsModal: Dispatch<SetStateAction<boolean>>;
    item: members_member_members;
}): JSX.Element {
    return (
        <div
            className={`flex font-titilumWeb bg-white bg-opacity-80 z-50 justify-center items-center fixed inset-0 transition duration-500 `}
        >
            <AnimatePresence>
                <motion.div
                    key="modal"
                    animate={{ height: 600, opacity: 1 }}
                    initial={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    exit={{ height: 0 }}
                    className="w-10/12 h-full shadow-buttonShadow cursor-pointer lg:9/12  lg:p-0 lg:mx-12 flex flex-col items-center  border border-black justify-start z-50 text-black dark:text-white  bg-white rounded-lg overflow-y-auto"
                >
                    <div className="lg:h-36 h-28 w-full flex items-start p-2 justify-end bg-customYellow">
                        {" "}
                        <motion.button
                            whileTap={{ scale: 0.9 }}
                            onClick={() => setIsModal(false)}
                        >
                            <Image
                                src={"/icons/CloseButton.png"}
                                alt="closeButton"
                                height={30}
                                width={30}
                            ></Image>
                        </motion.button>
                    </div>
                    <div className="lg:w-full px-5 lg:px-12 transform -translate-y-14 flex flex-col items-center lg:items-start">
                        <div
                            className="h-40 w-40 rounded-full border-4 border-white "
                            style={{
                                backgroundImage: `url(${urlBuilder(
                                    item.avatar.url,
                                )})`,
                                backgroundPosition: "center",
                                backgroundSize: "cover",
                                backgroundRepeat: "no-repeat",
                            }}
                        ></div>
                        <div className="flex font-bold text-2xl lg:text-4xl mt-5">
                            <h2 className="mr-2">{item.firstName}</h2>
                            <h2>{item.lastName}</h2>
                        </div>

                        <h3 className="text-xl lg:text-3xl">{item.function}</h3>
                        <a
                            className="text-xs font-bold lg:text-lg mt-2 lg:mt-5"
                            href={item.linkPortfolio}
                            target="_blank"
                        >
                            {" "}
                            portfolio : {item.linkPortfolio}
                        </a>
                        <p className="text-center text-sm lg:text-xl lg:text-left mt-5">
                            {item.description}
                        </p>
                        <div className="flex w-full items-center justify-center lg:justify-start mt-10">
                            {item.socialMedia?.map((item, index) => {
                                return (
                                    <div
                                        className="text-center text-sm lg:text-base lg:mr-5 underline"
                                        key={index}
                                    >
                                        {item.icon === null ? (
                                            ""
                                        ) : (
                                            <a
                                                href={item?.link}
                                                target="_blank"
                                            >
                                                <Image
                                                    src={urlBuilder(
                                                        item.icon.url,
                                                    )}
                                                    alt="icon"
                                                    width={50}
                                                    height={50}
                                                    priority
                                                />
                                            </a>
                                        )}
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </motion.div>
            </AnimatePresence>
        </div>
    );
}

export default MemberModal;
