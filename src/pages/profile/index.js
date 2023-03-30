import { accessRouteTypeEnum } from '@/constants';
import Profile from '@/components/desktop/profile';
import withAuth from '@/utils/withAuth';
import React from 'react';
import apiConfig from '@/constants/apiConfig';
import { sendRequest } from '@/services/api';
import PublicLayout from '@/components/layout/PublicLayout';
import RenderContext from '@/components/common/RenderContext';
import { deviceDetect } from '@/utils';
import ProfileMobile from '@/components/mobile/profile';

function ProfilePage(props) {
    return <RenderContext mobile={{ device: ProfileMobile }} desktop={{ device: Profile }} {...props} />;
}

ProfilePage.getLayout = function getLayout(page) {
    return <PublicLayout>{page}</PublicLayout>;
};

export default ProfilePage;

export const getServerSideProps = withAuth(accessRouteTypeEnum.REQUIRE_LOGIN, async ({ session, context }) => {
    const isMobile = deviceDetect(context);
    try {
        // lấy dữ liệu của tin tức có slug là params.slug

        const res = await sendRequest(
            {
                ...apiConfig.account.getProfile,
                ignoreAuth: true,
                headers: {
                    Authorization: `Bearer ${session.user.accessToken}`,
                },
            },
            {},
        );
        let profile = {};
        if (res.data.result && res.data.data) profile = res.data.data;
        return {
            props: {
                data: { initDevice: isMobile, profile },
            },
        };
    } catch (error) {
        throw {
            defaultProps: {
                data: { profile: {}, initDevice: isMobile },
            },
            error,
        };
    }
});
