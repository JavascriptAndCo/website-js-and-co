import React, { useState } from "react";
import data from "FakeData/navBar.json";
import SideBar from "./SideBar";
import Burger from "./Burger";
import { useRouter } from "next/router";

function NavBar(): JSX.Element {
    const [isSideBar, setIsSidebar] = useState(false);
    const router = useRouter();
    return (
        <div
            className="w-full bg-customYellow px-5 shadow-navBarShadow py-3 font-titilumWeb z-50 fixed top-0"
            style={{ textShadow: "5px 5px 10px rgba(0, 0, 0, 0.25)" }}
        >
            <div className="hidden lg:flex text-ms items-center justify-center lg:justify-start z-10 animate-fade">
                {data.map((item, index) => {
                    return (
                        <button
                            className="lg:mx-4 mx-2"
                            key={index}
                            onClick={() =>
                                router
                                    .push(item.link)
                                    .then(() => window.scrollTo(0, 0))
                            }
                        >
                            {item.name}
                        </button>
                    );
                })}
            </div>
            <button
                className="flex lg:hidden"
                onClick={() => {
                    setIsSidebar((c) => !c);
                }}
            >
                <Burger isSideBar={isSideBar} />
            </button>
            {isSideBar && <SideBar data={data} setIsSidebar={setIsSidebar} />}
        </div>
    );
}

export default NavBar;
