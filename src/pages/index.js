import apiConfig from '@/constants/apiConfig';
import axios from 'axios';
import Landing from '@/components/desktop/landing-page';
import { accessRouteTypeEnum } from '@/constants';
import withAuth from '@/utils/withAuth';
import RenderContext from '@/components/common/RenderContext';
import PublicLayout from '@/components/layout/PublicLayout';
import LandingPageDesktop from '@/components/desktop/landing-page';
import LandingPageMobile from '@/components/mobile/landing-page';
import { deviceDetect } from '@/utils';

function Home({ ...props }) {
    return (
        <RenderContext
            title="Demo Landing Page"
            mobile={{ device: LandingPageMobile }}
            desktop={{ device: LandingPageDesktop }}
            {...props}
        />
    );
}

Home.getLayout = function getLayout(page) {
    return <PublicLayout>{page}</PublicLayout>;
};

export default Home;

export const getServerSideProps = withAuth(accessRouteTypeEnum.BOTH, async ({ session, context }) => {
    const isMobile = deviceDetect(context);
    try {
        const response = await axios.get(apiConfig.news.getList.baseURL);
        let news = {};
        if (response.data.result && response.data.data);
        news = response.data.data;
        return {
            props: {
                news,
                initDevice: isMobile,
            },
        };
    } catch (error) {
        console.error(error);
        return {
            props: {
                initDevice: isMobile,
            },
        };
    }
});
