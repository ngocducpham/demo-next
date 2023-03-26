import PublicLayout from '@/components/layout/PublicLayout';
import Head from 'next/head';
import LandingPage from '@/modules/landing-page';
import { sendRequest } from '@/services/api';
import apiConfig from '@/constants/apiConfig';
import axios from 'axios';
import Landing from '@/modules/landing-page';
function Home({ news }) {
    return (
        <PublicLayout>
            <Head>
                <title>Demo Landing Page</title>
            </Head>
            <Landing news={news} />
        </PublicLayout>
    );
}

export async function getServerSideProps() {
    try {
        const response = await axios.get(apiConfig.news.getList.baseURL);
        let news = {};
        if (response.data.result && response.data.data);
        news = response.data.data;
        return {
            props: {
                news,
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
