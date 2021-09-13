import BecomeMembers from "@components/NewMember/BecomeMember";
import React from "react";
import Head from "next/head";
import metaData from "../Data/metaData.json";

function devenirmembre(): JSX.Element {
    return (
        <div>
            <Head>
                <title>{metaData.BecomeMemberPage.BecomeMemberPageTitle}</title>
                <meta charSet="utf-8" />
                <meta
                    name="description"
                    content={
                        metaData.BecomeMemberPage.BecomeMemberPageDescription
                    }
                />
                <meta
                    property="og:title"
                    content={metaData.BecomeMemberPage.BecomeMemberPageTitle}
                    key="ogtitle"
                />
            </Head>
            <BecomeMembers />
        </div>
    );
}

export default devenirmembre;
