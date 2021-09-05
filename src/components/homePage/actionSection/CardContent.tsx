import React from "react";
import { allContent_content_action_action_cards } from "__generated__/allContent";

function CardContent({
    item,
    isModal,
}: {
    item: allContent_content_action_action_cards | undefined;
    isModal: boolean;
}): JSX.Element {
    return (
        <div>
            <div className="w-full flex items-center justify-center">
                <span className="text-center font-bold">{item?.title}</span>
            </div>
            <div
                className={`bg-white font-titilumWeb h-80 w-96 shadow-buttonShadow xxl:flex flex-col z-10 lg:p-5 border border-black rounded-lg transform -translate-y-14 ${
                    isModal ? `flex` : `hidden`
                }`}
            >
                <span className="hidden xxl:flex font-bold lg:text-2xl mt-5">
                    {item?.title}
                </span>
                <span className="hidden h-full xxl:flex text-xs lg:text-xs lg:leading-7 pt-2">
                    {item?.text}
                </span>
            </div>
        </div>
    );
}

export default CardContent;
