import React from "react";

function Association1901({ animation }: { animation: string }): JSX.Element {
    return (
        <div className="font-titilumWeb flex justify-center mt-32">
            <span
                className={`tracking-widest lg:text-xl text-md animate-fade ${animation}`}
            >
                ASSOCIATION 1901
            </span>
        </div>
    );
}

export default Association1901;
