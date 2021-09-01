import React from "react";

function Formation({
    animation,
    animation2,
    animation3,
}: IKeyWords): JSX.Element {
    return (
        <div className="font-bold font-titilumWeb lg:text-3xl text-lg flex justify-center lg:mt-5 mt-2">
            <span className={`lg:mx-4 animate-fade  ${animation}`}>F</span>
            <span className={`lg:mx-7 mx-4 animate-fade ${animation2}`}>O</span>
            <span className={`lg:mx-7 mx-4 animate-fade ${animation}`}>R</span>
            <span className={`lg:mx-7 mx-4 animate-fade ${animation3}`}>M</span>
            <span className={`lg:mx-7 mx-4 animate-fade ${animation}`}>A</span>
            <span className={`lg:mx-7 mx-4 animate-fade ${animation2}`}>T</span>
            <span className={`lg:mx-7 mx-4 animate-fade ${animation3}`}>I</span>
            <span className={`lg:mx-7 mx-4 animate-fade ${animation}`}>O</span>
            <span className={`lg:mx-4  animate-fade ${animation2}`}>N</span>
        </div>
    );
}

export default Formation;
