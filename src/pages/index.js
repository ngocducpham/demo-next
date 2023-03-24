import PublicLayout from '@/components/layout/PublicLayout';
import Head from 'next/head';
import LandingPage from '@/modules/landing-page';
import { sendRequest } from '@/services/api';
import apiConfig from '@/constants/apiConfig';

function Home() {
    return (
        <PublicLayout>
            <Head>
                <title>Demo Landing Page</title>
            </Head>
            <LandingPage />
        </PublicLayout>
    );
}

export async function getServerSideProps() {
    try {
        const { data } = await sendRequest(apiConfig.news.getList, {});
        console.log(data);
        const posts = {};
        return {
            props: {
                posts,
            },
        };
    } catch (error) {
        console.error(error);
        return {
            props: {
                posts: [],
            },
        };
    }
}

export default Home;
