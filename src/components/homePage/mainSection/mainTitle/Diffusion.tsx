import React from "react";

function Diffusion({
    animation,
    animation2,
    animation3,
}: IKeyWords): JSX.Element {
    return (
        <div className="font-bold font-titilumWeb lg:text-3xl text-lg  flex justify-center lg:mt-5 mt-2">
            <span className={`lg:mx-6 mx-1 animate-fade  ${animation}`}>D</span>
            <span className={`lg:mx-7 mx-4 animate-fade ${animation3}`}>I</span>
            <span className={`lg:mx-7 mx-4 animate-fade ${animation}`}>F</span>
            <span className={`lg:mx-7 mx-4 animate-fade ${animation2}`}>F</span>
            <span className={`lg:mx-7 mx-4 animate-fade ${animation}`}>U</span>
            <span className={`lg:mx-7 mx-4 animate-fade ${animation3}`}>S</span>
            <span className={`lg:mx-7 mx-4 animate-fade ${animation}`}>I</span>
            <span className={`lg:mx-7 mx-4 animate-fade ${animation3}`}>O</span>
            <span className={`lg:mx-6 mx-1 animate-fade ${animation}`}>N</span>
        </div>
    );
}

export default Diffusion;
