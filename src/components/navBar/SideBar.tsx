import React, { Dispatch, SetStateAction } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/router";

function SideBar({
    data,
    setIsSidebar,
}: {
    data: INavBar_items[];
    setIsSidebar: Dispatch<SetStateAction<boolean>>;
}): JSX.Element {
    const router = useRouter();
    return (
        <motion.div
            className={`bg-customYellow h-screen animate-fadeRight z-50 `}
        >
            <motion.div className="flex flex-col my-10 w-screen">
                {data.map((item, index) => {
                    return (
                        <button
                            key={index}
                            onClick={() => {
                                setIsSidebar((c) => !c);
                                router
                                    .push(item.link)
                                    .then(() => window.scrollTo(0, 0));
                            }}
                            className="lg:mx-4 mx-2 my-5 text-xl font-bold text-left"
                        >
                            {item.name}
                        </button>
                    );
                })}
            </motion.div>
        </motion.div>
    );
}

export default SideBar;
