import { useOnScreen } from "hook/useOnScroll";
import React, { MutableRefObject, useRef } from "react";
import Image from "next/image";
import { useSelector } from "react-redux";
import { RootState } from "src/redux/reducer";
import urlBuilder from "hook/imageUrl";

function DesFormation(): JSX.Element {
    const scrollRef3 = useRef();
    const isVisible3 = useOnScreen(
        scrollRef3 as unknown as MutableRefObject<HTMLDivElement>,
    );
    const { desFormations } = useSelector((state: RootState) => state.aboutUs);
    return (
        <div className="h-screen w-screen flex justify-center pt-10 px-5 lg:px-10 bg-customYellow">
            <div
                className="w-full flex flex-col lg:flex-row-reverse items-center justify-center lg:justify-center"
                ref={scrollRef3 as unknown as MutableRefObject<HTMLDivElement>}
            >
                <div
                    className={`font-titilumWeb text-center lg:text-left lg:w-7/12 lg:ml-20 lg:mb-20 ${
                        isVisible3 && `animate-fadeTop lg:animate-fadeRight`
                    }`}
                >
                    <h1 className="text-5xl mt-10  lg:text-7xl font-bold z-30  transform  lg:translate-y-28 ">
                        {desFormations?.title}
                    </h1>
                    <h1 className="text-5xl hidden lg:flex lg:text-8xl z-10 font-bold opacity-10 text-black transform lg:-translate-x-24">
                        {desFormations?.title}
                    </h1>
                    <p className="text-xl lg:text-2xl lg:leading-10 leading-8 my-5 lg:my-10 border-b border-black pb-10">
                        {desFormations?.text}
                    </p>
                </div>
                {desFormations?.icon?.url === undefined ? (
                    " "
                ) : (
                    <div className="hidden lg:flex">
                        <Image
                            className={`${
                                isVisible3 &&
                                `animate-fadeBottom lg:animate-fadeLeft`
                            }`}
                            src={urlBuilder(desFormations?.icon.url as string)}
                            alt="Un Réseaux"
                            height={300}
                            width={350}
                            priority
                        />
                    </div>
                )}
            </div>
        </div>
    );
}

export default DesFormation;
