import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useSelector } from "react-redux";
import { RootState } from "src/redux/reducer";

function AboutUs(): JSX.Element {
    const [animation, setAnimation] = useState("");
    useEffect(() => {
        setAnimation(
            "transform -translate-y-24 transition-transform duration-2000",
        );
    }, []);

    const { title_1, text, text2 } = useSelector(
        (state: RootState) => state.aboutUs,
    );

    return (
        <div className="h-screen w-screen flex flex-col justify-between pt-20 lg:pt-40 lg:justify-between items-center font-titilumWeb bg-customYellow px-5 ">
            <div className="text-center  lg:px-20">
                <h2 className="font-bold text-4xl lg:text-6xl tracking-wider animate-fadeTop">
                    {title_1}
                </h2>
                <p className="mt-10 text-xl lg:text-2xl tracking-wider border-b border-black pb-5 animate-fadeBottom">
                    {text}
                </p>
                <p className="text-lg lg:text-xl tracking-wider leading-9 lg:leading-10 mt-10 animate-fadeBottom">
                    {text2}
                </p>
            </div>
            <div className={`animate-fade mt-20 lg:pt-20 ${animation}`}>
                <Image
                    src="/icons/DownArrow.svg"
                    alt="arrow"
                    width={40}
                    height={40}
                />
            </div>
        </div>
    );
}

export default AboutUs;
