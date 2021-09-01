import { useOnScreen } from "hook/useOnScroll";
import React, { MutableRefObject, useRef } from "react";
import Events from "./events/Events";
import TextSection from "./TextSection";

function Section2(): JSX.Element {
    const scrollRefSec2 = useRef();
    const isVisibleSec2 = useOnScreen(
        scrollRefSec2 as unknown as MutableRefObject<HTMLDivElement>,
    );
    return (
        <div className="h-screen w-screen flex py-10 md:px-10 pt-10 lg:py-20 lg:px-10 items-center">
            <div
                ref={
                    scrollRefSec2 as unknown as MutableRefObject<HTMLDivElement>
                }
            >
                {isVisibleSec2 && (
                    <div className="flex flex-col lg:flex-row h-screen  py-10">
                        <div className="lg:w-6/12 lg:h-full w-full">
                            <TextSection />
                        </div>
                        <div className="lg:w-8/12 w-full h-screen lg:h-full  overflow-y-scroll animate-fadeTop">
                            <Events />
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Section2;
