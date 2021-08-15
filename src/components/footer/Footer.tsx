import React, { MutableRefObject, useRef } from "react";
import SMData from "FakeData/HomePage/RéseauxSociaux.json";
import NBData from "FakeData/navBar.json";
import PartnersData from "FakeData/HomePage/NosPartenaires.json";
import ListItem from "./ListItem";
import ContactForm from "./ContactForm";
import NewMembers from "./NewMember";
import { useOnScreen } from "hook/useOnScroll";

function Footer(): JSX.Element {
    const scrollRefSecFooter = useRef();
    const isVisibleSecFooter = useOnScreen(
        scrollRefSecFooter as unknown as MutableRefObject<HTMLDivElement>,
    );
    return (
        <div
            className="lg:h-screen font-titilumWeb flex flex-col justify-between"
            style={{
                scrollSnapAlign: "start",
            }}
            ref={
                scrollRefSecFooter as unknown as MutableRefObject<HTMLDivElement>
            }
        >
            <NewMembers isVisibleSecFooter={isVisibleSecFooter} />
            {isVisibleSecFooter ? (
                <div
                    className="lg:h-80 flex flex-col justify-between bg-customYellow pt-16 lg:pt-0 px-5 border border-black animate-fadeMid"
                    style={{
                        scrollSnapAlign: "start",
                    }}
                >
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-center">
                        <div className="flex w-full justify-around lg:justify-start">
                            <ul className="flex w-full lg:justify-start text-xs">
                                <ListItem
                                    data={SMData.iconRéseaux}
                                    title={"Nos Réseaux"}
                                />
                                <ListItem data={NBData} title={"Nos Liens"} />
                                <ListItem
                                    data={PartnersData.partenaire}
                                    title={PartnersData.nosPartenaires.title}
                                />
                            </ul>
                        </div>
                        <ContactForm />
                    </div>
                    <p className="text-xs text-center lg:text-left mb-5 lg:ml-5 w-full">
                        Produce by @DigitialCopilote / Develop by Thomas Barrial
                        and Julien Abbadie / Design by ThomasBarrial
                    </p>
                </div>
            ) : (
                ""
            )}
        </div>
    );
}

export default Footer;

//    .--.
//   |o_o |
//   |:_/ |
//  //   \ \
// (|     | )
// /'\_   _/`\
// \___)=(___/
