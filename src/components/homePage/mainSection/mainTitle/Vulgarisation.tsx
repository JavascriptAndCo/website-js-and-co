import React from "react";

function Vulgarisation({
    animation,
    animation2,
    animation3,
}: IKeyWords): JSX.Element {
    return (
        <div className="font-bold font-titilumWeb lg:text-3xl text-lg  flex justify-center mt-5 lg:mt-10">
            <span className={`mx-2 animate-fade  ${animation}`}>V</span>
            <span className={`lg:mx-4 mx-2 animate-fade ${animation2}`}>U</span>
            <span className={`lg:mx-4 mx-2 animate-fade ${animation3}`}>L</span>
            <span className={`lg:mx-4 mx-2 animate-fade ${animation3}`}>G</span>
            <span className={`lg:mx-4 mx-2 animate-fade ${animation}`}>A</span>
            <span className={`lg:mx-4 mx-2 animate-fade ${animation2}`}>R</span>
            <span className={`lg:mx-4 mx-2 animate-fade ${animation3}`}>I</span>
            <span className={`lg:mx-4 mx-2 animate-fade ${animation}`}>S</span>
            <span className={`lg:mx-4 mx-2 animate-fade ${animation2}`}>A</span>
            <span className={`lg:mx-4 mx-2 animate-fade ${animation3}`}>T</span>
            <span className={`lg:mx-4 mx-2 animate-fade ${animation}`}>I</span>
            <span className={`lg:mx-4 mx-2 animate-fade ${animation2}`}>O</span>
            <span className={`mx-2 animate-fade ${animation3}`}>N</span>
        </div>
    );
}

export default Vulgarisation;
