import { useOnScreen } from "hook/useOnScroll";
import React, { MutableRefObject, useRef } from "react";
import Image from "next/image";
import { useSelector } from "react-redux";
import { RootState } from "src/redux/reducer";
import urlBuilder from "hook/imageUrl";

function DesEntrepreneurs(): JSX.Element {
    const scrollRef4 = useRef();
    const isVisible4 = useOnScreen(
        scrollRef4 as unknown as MutableRefObject<HTMLDivElement>,
    );

    const { desEntrepreneurs } = useSelector(
        (state: RootState) => state.aboutUs,
    );
    return (
        <div className="h-screen w-screen flex justify-center pt-10 px-5 lg:px-10 bg-white">
            <div
                className="w-full flex flex-col lg:flex-row items-center lg:justify-center"
                ref={scrollRef4 as unknown as MutableRefObject<HTMLDivElement>}
            >
                <div
                    className={`font-titilumWeb text-center lg:text-left lg:w-7/12 pt-20 lg:pr-10 lg:mr-2 lg:mb-20 ${
                        isVisible4 && `animate-fadeTop lg:animate-fadeRight`
                    }`}
                >
                    <h1 className="text-4xl lg:text-7xl font-bold z-30  transform  lg:translate-y-32 ">
                        {desEntrepreneurs?.title}
                    </h1>
                    <h1 className="hidden lg:flex lg:text-8xl z-10 font-bold opacity-20 text-customYellow transform lg:translate-x-20 ">
                        {desEntrepreneurs?.title}
                    </h1>
                    <p className="text-xl lg:text-2xl lg:leading-10 leading-8 my-5  lg:my-14 border-b border-black pb-10">
                        {desEntrepreneurs?.text}
                    </p>
                </div>
                {desEntrepreneurs?.icon?.url === undefined ? (
                    ""
                ) : (
                    <div className="hidden lg:flex">
                        <Image
                            className={`${
                                isVisible4 &&
                                `animate-fadeBottom lg:animate-fadeLeft`
                            }`}
                            src={urlBuilder(
                                desEntrepreneurs?.icon?.url as string,
                            )}
                            alt="Un Réseaux"
                            height={350}
                            width={350}
                            priority
                        />
                    </div>
                )}
            </div>
        </div>
    );
}

export default DesEntrepreneurs;
