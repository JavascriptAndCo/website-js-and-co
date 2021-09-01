import React from "react";
import Image from "next/image";
import { allContent_content_socialMedia_icons } from "__generated__/allContent";
import urlBuilder from "hook/imageUrl";

function SocialMedia({
    item,
}: {
    item: allContent_content_socialMedia_icons;
}): JSX.Element {
    return (
        <div>
            {item.icon === null ? (
                ""
            ) : (
                <a href={item?.link} target="_blank">
                    <Image
                        src={urlBuilder(item.icon.url)}
                        alt="NosRéseaux"
                        width={80}
                        height={80}
                        priority
                    />
                </a>
            )}
        </div>
    );
}

export default SocialMedia;
