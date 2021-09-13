import { useEffect, useState } from "react";

function JSandCo(): JSX.Element {
    const [animation, setAnimation] = useState("");
    const [animation2, setAnimation2] = useState("");
    const [animation3, setAnimation3] = useState("");
    const [animation4, setAnimation4] = useState("");
    useEffect(() => {
        setAnimation(
            "transform lg:translate-x-16 translate-x-10 transition-transform duration-2000",
        );
        setAnimation2(
            "transform lg:translate-x-16 translate-x-10 transition-transform duration-1000",
        );
        setAnimation3(
            "transform lg:-translate-x-16 -translate-x-10 transition-transform duration-1000",
        );
        setAnimation4(
            "transform lg:-translate-x-16 -translate-x-10 transition-transform duration-2000",
        );
    }, []);

    return (
        <div
            className={`font-bold font-titilumWeb text-7xl lg:text-9xl flex justify-center`}
        >
            <span className={`${animation}`}>J</span>
            <span className={`${animation2}`}>S</span>
            <span className="lg:mx-16 mx-12 animate-fade  text-white ">&</span>
            <span className={`${animation3}`}>C</span>
            <span className={`${animation4}`}>o</span>
        </div>
    );
}

export default JSandCo;
