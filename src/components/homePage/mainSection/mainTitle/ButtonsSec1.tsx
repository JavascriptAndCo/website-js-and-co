import BlackButton from "@components/buttons/BlackButton";
import React, { useEffect, useState } from "react";
import data from "../../../../../Data/Acceuil.json";

function Button(): JSX.Element {
    const [animation, setAnimation] = useState("");

    useEffect(() => {
        setAnimation(
            "transform -translate-y-24 transition-transform duration-2000",
        );
    }, []);
    return (
        <div
            className={`flex flex-col text-sm lg:text-xs lg:flex-row justify-center items-center w-full lg:mt-20 mt-10 ${animation}`}
        >
            <div className="mx-4">
                <BlackButton link={data.button1.link}>
                    {data.button1.title}
                </BlackButton>
            </div>
            <div className="mx-4">
                <BlackButton link={data.button2.link}>
                    {data.button2.title}
                </BlackButton>
            </div>
        </div>
    );
}

export default Button;
