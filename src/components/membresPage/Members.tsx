import React from "react";
import OneMembers from "./OneMember";
import { useSelector } from "react-redux";
import { RootState } from "src/redux/reducer";

function Members(): JSX.Element {
    const { member } = useSelector((state: RootState) => state.members);
    return (
        <div className="h-screen w-screen flex flex-col justify-center font-titilumWeb pt-10 bg-customYellow px-5">
            <div className="text-center  mt-5 lg:m-10 pb-5 border-b border-black animate-fadeTop">
                <h2 className="text-5xl lg:text-6xl font-bold">
                    {member?.title}
                </h2>
            </div>
            <div className="h-full w-full lg:w-full bg-customYellow flex flex-col lg:flex-row lg:flex-wrap lg:items-start lg:justify-startx animate-fadeBottom  overflow-y-auto py-5">
                {member?.members?.map((item, index) => {
                    return (
                        <div className="w-full lg:w-52" key={index}>
                            <OneMembers item={item} />
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default Members;
