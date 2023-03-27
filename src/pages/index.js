import PublicLayout from '@/components/layout/PublicLayout';
import Head from 'next/head';
import apiConfig from '@/constants/apiConfig';
import axios from 'axios';
import Landing from '@/modules/landing-page';
import { accessRouteTypeEnum } from '@/constants';
import withAuth from '@/utils/withAuth';

function Home({ news }) {
    return <Landing news={news} />;
}

export default Home;

export const getServerSideProps = withAuth(accessRouteTypeEnum.BOTH, async ({ session }) => {
    try {
        const response = await axios.get(apiConfig.news.getList.baseURL);
        let news = {};
        if (response.data.result && response.data.data);
        news = response.data.data;
        return {
            props: {
                news,
                session,
            },
        };
    } catch (error) {
        console.error(error);
        return {
            props: {
                posts: [],
                session,
            },
        };
    }
});
