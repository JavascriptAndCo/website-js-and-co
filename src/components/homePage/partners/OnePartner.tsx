import React, { useState } from "react";
import { motion } from "framer-motion";
import { allContent_content_partners_partners } from "__generated__/allContent";
import urlBuilder from "hook/imageUrl";
import PartnerModal from "./PartnerModal";

function OnePartner({
    item,
}: {
    item: allContent_content_partners_partners;
}): JSX.Element {
    const [isModal, setIsModal] = useState(false);

    return (
        <>
            {isModal && <PartnerModal item={item} setIsModal={setIsModal} />}

            <div className="lg:my-1 w-80 my-2 rounded-xl py-2 lg:w-96 lg:h-80 flex flex-col items-center justify-center bg-white  border border-black shadow-buttonShadow transition duration-500 transform hover:scale-105">
                {item?.logo === null ? (
                    ""
                ) : (
                    <button
                        onClick={() => setIsModal(true)}
                        className="w-56 h-28 lg:w-60 lg:h-52"
                        style={{
                            backgroundImage: `url(${urlBuilder(
                                item?.logo.url,
                            )})`,
                            backgroundPosition: "center",
                            backgroundRepeat: "no-repeat",
                            backgroundSize: "contain",
                        }}
                    />
                )}

                <motion.button
                    onClick={() => setIsModal(true)}
                    whileTap={{ scale: 0.9 }}
                    className="bg-black mt-5 text-customYellow text-xs lg:mt-5 py-1 px-12 shadow-buttonShadow rounded-md transform hover:scale-105"
                >
                    En Savoir Plus
                </motion.button>
            </div>
        </>
    );
}

export default OnePartner;
