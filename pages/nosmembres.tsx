import Footer from "@components/footer/Footer";
import Members from "@components/membresPage/Members";
import { GetStaticPropsResult } from "next";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setFooter, setMembers } from "src/redux/action";
import { GET_MEMBERS } from "src/services/queries";
import { members } from "__generated__/members";
import { apolloClient } from "./_app";
import Head from "next/head";
import metaData from "../Data/metaData.json";

function nosmembres(member: members): JSX.Element {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setMembers(member));
        dispatch(setFooter(member.member.footer));
    }, []);

    return (
        <div>
            <Head>
                <title>{metaData.MembersPage.MembersPageTitle}</title>
                <meta charSet="utf-8" />
                <meta
                    name="description"
                    content={metaData.MembersPage.MembersPageDescription}
                />
                <meta
                    property="og:title"
                    content={metaData.MembersPage.MembersPageTitle}
                    key="ogtitle"
                />
            </Head>
            <Members />
            <Footer />
        </div>
    );
}

export async function getStaticProps(): Promise<GetStaticPropsResult<members>> {
    try {
        const { data } = await apolloClient.query({
            query: GET_MEMBERS,
        });

        return {
            props: { ...data },
        };
    } catch (error) {
        return { notFound: true };
    }
}

export default nosmembres;
