import React from "react";
import NBData from "Data/navBar.json";
import ListItem from "./ListItem";
import ContactForm from "./ContactForm";
import NewMembers from "./NewMember";
import { useSelector } from "react-redux";
import { RootState } from "src/redux/reducer";

function Footer(): JSX.Element {
    const { linkSocialMedia, link_partners } = useSelector(
        (state: RootState) => state.footer,
    );

    return (
        <div
            className="lg:h-screen font-titilumWeb flex flex-col justify-between"
            style={{
                scrollSnapAlign: "start",
            }}
        >
            <NewMembers />
            <div className="lg:h-80 flex flex-col justify-between bg-customYellow pt-16 lg:pt-0 px-5 border border-black animate-fadeMid">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-center">
                    <div className="flex w-full justify-around lg:justify-start">
                        <ul className="flex w-full lg:justify-start text-xs">
                            <ListItem
                                data={linkSocialMedia}
                                title={"Nos Réseaux"}
                            />
                            <ListItem data={NBData} title={"Nos Liens"} />
                            <ListItem
                                data={link_partners}
                                title={"Nos Partenaires"}
                            />
                        </ul>
                    </div>

                    <ContactForm />
                </div>
                <div className="text-xs text-center lg:text-left mb-5 lg:ml-5 w-full">
                    <a href="https://digitalcopilote.io/" target="_blank">
                        Produce by @DigitialCopilote
                    </a>
                    <a
                        href="https://www.portfolio.thomasbarrial.com/"
                        target="_blank"
                    >
                        / Develop by Thomas Barrial / Design by ThomasBarrial
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Footer;
/* 
     .--.
    |o_o |
    |:_/ |
   //   \ \
  (|     | )
 /'\_   _/`\
 \___)=(___/

*/
