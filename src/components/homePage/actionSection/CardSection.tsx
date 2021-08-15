import React, { Dispatch, SetStateAction } from "react";
import { allContent_content_action_action_cards } from "__generated__/allContent";
import Card from "./Card";

interface IProps {
    item: allContent_content_action_action_cards[] | undefined;
    setCardSelected: Dispatch<SetStateAction<number>>;
    setIsModal: Dispatch<SetStateAction<boolean>>;
    isModal: boolean;
    isVisibleSec3: boolean;
}

function CardSection({
    item = [],
    setIsModal,
    setCardSelected,
    isModal,
    isVisibleSec3,
}: IProps): JSX.Element {
    return (
        <div className="flex flex-row justify-center lg:px-2 transform -translate-y-24 lg:-translate-y-32">
            {item?.map((item, index) => {
                return (
                    <div
                        className="mt-40 lg:mt-0 lg:mx-2 xl:mx-10 xl:w-96 h-24 "
                        key={index}
                    >
                        <Card
                            isVisibleSec3={isVisibleSec3}
                            isModal={isModal}
                            setCardSelected={setCardSelected}
                            setIsModal={setIsModal}
                            item={item}
                            index={index}
                        />
                    </div>
                );
            })}
        </div>
    );
}

export default CardSection;
