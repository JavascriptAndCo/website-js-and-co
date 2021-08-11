import React from "react";

function Association1901({
    textShadow,
    animation,
}: {
    textShadow: string;
    animation: string;
}): JSX.Element {
    return (
        <div className="font-titilumWeb flex justify-center mt-32">
            <span
                className={`tracking-widest md:text-xl text-md animate-fade ${animation}`}
                style={{ textShadow: textShadow }}
            >
                Assiociation 1901
            </span>
        </div>
    );
}

export default Association1901;
