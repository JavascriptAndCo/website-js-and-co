import React from "react";

function BecomeMembers(): JSX.Element {
    return (
        <div
            className="h-screen w-screen flex flex-col pt-12 lg:pt-0 items-center justify-center bg-white z-50"
            style={{
                scrollSnapAlign: "start",
            }}
        >
            <iframe
                className="w-screen h-screen lg:pt-10"
                src="https://www.helloasso.com/associations/js-co/adhesions/adhesion-js-co-2021/widget"
                title="Hello Asso"
            ></iframe>
        </div>
    );
}

export default BecomeMembers;
