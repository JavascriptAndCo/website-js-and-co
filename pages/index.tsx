import Section1 from "@components/homePage/mainSection/Section1";
import { apolloClient } from "./_app";
import { GET_HOMEPAGE } from "src/services/queries";
import { useDispatch } from "react-redux";
import {
    setAction,
    setActu,
    setFooter,
    setPartners,
    setSocialMedia,
} from "src/redux/action";
import { GetStaticPropsResult } from "next";
import Actions from "@components/homePage/actionSection/Actions";
import MediaSocial from "@components/homePage/socialMedia/MediaSocial";
import Partners from "@components/homePage/partners/Partners";
import { allContent_content } from "__generated__/allContent";
import Footer from "@components/footer/Footer";
import Actu from "@components/homePage/actuSection/Actu";
import { useEffect } from "react";

export function Home(content: allContent_content): JSX.Element {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setActu(content.actu));
        dispatch(setAction(content.action));
        dispatch(setSocialMedia(content.socialMedia));
        dispatch(setPartners(content.partners));
        dispatch(setFooter(content.footer));
    }, []);

    return (
        <div>
            <Section1 />
            <Actu />
            <Actions />
            <MediaSocial />
            <Partners />
            <Footer />
        </div>
    );
}

export async function getStaticProps(): Promise<
    GetStaticPropsResult<allContent_content>
> {
    try {
        const { data } = await apolloClient.query({
            query: GET_HOMEPAGE,
        });

        return {
            props: { ...data?.content } || null,
        };
    } catch (error) {
        return { notFound: true };
    }
}

export default Home;
