import { useOnScreen } from "hook/useOnScroll";
import React, { MutableRefObject, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "src/redux/reducer";
import CardSection from "./CardSection";
import TextSection from "./TextSection";
import CardModal from "./CardModal";

function Section3(): JSX.Element {
    const { title, text, action_cards } = useSelector(
        (state: RootState) => state.action,
    );

    const scrollRefSec3 = useRef();
    const isVisibleSec3 = useOnScreen(
        scrollRefSec3 as unknown as MutableRefObject<HTMLDivElement>,
    );
    const [isModal, setIsModal] = useState(false);
    const [cardSelected, setCardSelected] = useState<number>(0);
    const item = action_cards;
    const selectedCard = item && item[cardSelected];
    return (
        <div className="flex flex-col items-center w-screen pt-5 relative bg-customYellow xxl:bg-white mb-52">
            <div
                ref={
                    scrollRefSec3 as unknown as MutableRefObject<HTMLDivElement>
                }
            >
                {isModal && (
                    <CardModal
                        setIsModal={setIsModal}
                        isModal={isModal}
                        selectedCard={selectedCard}
                    />
                )}

                <TextSection
                    title={title}
                    text={text}
                    isVisibleSec3={isVisibleSec3}
                />
                <CardSection
                    isVisibleSec3={isVisibleSec3}
                    isModal={isModal}
                    setCardSelected={setCardSelected}
                    setIsModal={setIsModal}
                    item={action_cards}
                />
            </div>
        </div>
    );
}

export default Section3;
