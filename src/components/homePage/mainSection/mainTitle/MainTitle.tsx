import React, { useEffect, useState } from "react";
import JSandCo from "./JsandCo";
import Vulgarisation from "./Vulgarisation";
import Diffusion from "./Diffusion";
import Formation from "./Formation";
import Button from "./ButtonsSec1";
import Association1901 from "./Association1901";

function MainTitle(): JSX.Element {
    const [animation, setAnimation] = useState("");
    const [animation2, setAnimation2] = useState("");
    const [animation3, setAnimation3] = useState("");
    useEffect(() => {
        setAnimation(
            "transform -translate-y-24 transition-transform duration-2000",
        );
        setAnimation2(
            "transform -translate-y-24 transition-transform duration-1000",
        );
        setAnimation3(
            "transform -translate-y-24 transition-transform duration-1500",
        );
    }, []);
    return (
        <div className="h-max-10/12 mt-32">
            <JSandCo />
            <Association1901 animation={animation} />
            <Vulgarisation
                animation={animation}
                animation2={animation2}
                animation3={animation3}
            />
            <Diffusion
                animation={animation}
                animation2={animation2}
                animation3={animation3}
            />
            <Formation
                animation={animation}
                animation2={animation2}
                animation3={animation3}
            />
            <Button />
        </div>
    );
}

export default MainTitle;
