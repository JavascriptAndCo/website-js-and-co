import React, { MutableRefObject, useRef } from "react";
import Image from "next/image";
import { useOnScreen } from "hook/useOnScroll";
import { useSelector } from "react-redux";
import { RootState } from "src/redux/reducer";
import urlBuilder from "hook/imageUrl";

function UnRéseaux(): JSX.Element {
    const scrollRef = useRef();
    const isVisible = useOnScreen(
        scrollRef as unknown as MutableRefObject<HTMLDivElement>,
    );
    const { unReseau } = useSelector((state: RootState) => state.aboutUs);

    return (
        <div
            className="h-screen w-screen flex justify-center px-5 lg:px-10 bg-white"
            style={{ scrollSnapAlign: "start" }}
        >
            <div
                className="w-full flex flex-col lg:flex-row items-center justify-center lg:justify-center"
                ref={scrollRef as unknown as MutableRefObject<HTMLDivElement>}
            >
                <div
                    className={`font-titilumWeb text-center lg:text-left lg:w-6/12 lg:mr-20 lg:mb-20 ${
                        isVisible && `animate-fadeTop lg:animate-fadeRight`
                    }`}
                >
                    <h1 className="text-5xl lg:text-7xl font-bold z-30  transform translate-y-20 lg:translate-y-36 ">
                        {unReseau?.title}
                    </h1>
                    <h1 className="text-7xl lg:text-9xl z-10 font-bold opacity-20 text-customYellow">
                        {unReseau?.title}
                    </h1>
                    <p className="text-xl lg:text-2xl lg:leading-10 leading-8 my-5 lg:my-10 border-b border-black pb-10">
                        {unReseau?.text}
                    </p>
                </div>
                {unReseau?.icon?.url === undefined ? (
                    ""
                ) : (
                    <div className="hidden lg:flex">
                        <Image
                            className={`${
                                isVisible &&
                                `animate-fadeBottom lg:animate-fadeLeft`
                            }`}
                            src={urlBuilder(unReseau?.icon?.url as string)}
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

export default UnRéseaux;
