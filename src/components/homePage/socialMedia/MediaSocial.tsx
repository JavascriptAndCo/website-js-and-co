import { useOnScreen } from "hook/useOnScroll";
import React, { MutableRefObject, useRef } from "react";
import { useSelector } from "react-redux";
import { RootState } from "src/redux/reducer";
import SocialMedia from "./SocialMedia";

function Section4(): JSX.Element {
    const scrollRefSec4 = useRef();
    const isVisibleSec4 = useOnScreen(
        scrollRefSec4 as unknown as MutableRefObject<HTMLDivElement>,
    );

    const { text, title_1, title_2, icons } = useSelector(
        (state: RootState) => state.socialMedia,
    );

    return (
        <div className=" w-screen flex md:px-10  h-screen items-center bg-white">
            {
                <div
                    ref={
                        scrollRefSec4 as unknown as MutableRefObject<HTMLDivElement>
                    }
                    className={`flex font-titilumWeb flex-col w-full items-center justify-center text-center mx-5 lg:mx-40 ${
                        isVisibleSec4 && `animate-fadeTop`
                    }`}
                >
                    <h2 className="text-4xl tracking-wider font-bold lg:text-6xl">
                        {title_1}
                    </h2>
                    <span className="text-xl lg:text-2xl mt-5 lg:mt-10 mx-5">
                        {title_2}
                    </span>
                    <div className="flex flex-wrap items-center pb-5 justify-center border-b-2 border-customYellow mt-10 lg:mt-16">
                        {icons?.map((item, index) => {
                            return (
                                <div key={index} className="lg:mx-5">
                                    <SocialMedia item={item} />
                                </div>
                            );
                        })}
                    </div>
                    <span className="mt-10 text-lg lg:text-2xl">{text}</span>
                </div>
            }
        </div>
    );
}

export default Section4;
