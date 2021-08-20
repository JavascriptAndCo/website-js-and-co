import React from "react";
import Image from "next/image";
import { allContent_content_socialMedia_icon } from "__generated__/allContent";
import urlBuilder from "hook/imageUrl";

function SocialMedia({
    item,
}: {
    item: allContent_content_socialMedia_icon;
}): JSX.Element {
    return (
        <div>
            <a href={item?.link} target="_blank">
                <Image
                    src={urlBuilder(item.icon.url)}
                    alt="NosRéseaux"
                    width={80}
                    height={80}
                />
            </a>
        </div>
    );
}

export default SocialMedia;
