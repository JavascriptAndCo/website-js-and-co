import AboutUs from "@components/aboutPage/AboutUs";
import DesEntrepreneurs from "@components/aboutPage/DesEntrepreneurs";
import DesFormation from "@components/aboutPage/DesFormation";
import UneExpertise from "@components/aboutPage/UneExpertise";
import UnRéseaux from "@components/aboutPage/UnRéseaux";
import Footer from "@components/footer/Footer";
import { GetStaticPropsResult } from "next";

import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setAboutUs, setFooter } from "src/redux/action";
import { GET_ABOUTUS } from "src/services/queries";
import { about_about } from "__generated__/about";
import { apolloClient } from "./_app";
import Head from "next/head";
import metaData from "../Data/metaData.json";

function quisommesnous(about: about_about): JSX.Element {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setAboutUs(about.aboutUs));
        dispatch(setFooter(about.footer));
    }, []);

    return (
        <div>
            <Head>
                <title>{metaData.AboutPage.AboutPageTitle}</title>
                <meta charSet="utf-8" />
                <meta
                    name="description"
                    content={metaData.AboutPage.AboutPageDescription}
                />
                <meta
                    property="og:title"
                    content={metaData.AboutPage.AboutPageTitle}
                    key="ogtitle"
                />
            </Head>
            <AboutUs />
            <UnRéseaux />
            <UneExpertise />
            <DesEntrepreneurs />
            <DesFormation />
            <Footer />
        </div>
    );
}

export async function getStaticProps(): Promise<
    GetStaticPropsResult<about_about>
> {
    try {
        const { data } = await apolloClient.query({
            query: GET_ABOUTUS,
        });
        return {
            props: { ...data.about },
        };
    } catch (error) {
        return { notFound: true };
    }
}

export default quisommesnous;
