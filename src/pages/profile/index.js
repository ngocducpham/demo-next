import { accessRouteTypeEnum } from '@/constants';
import Profile from '@/modules/profile';
import withAuth from '@/utils/withAuth';
import React from 'react';
import apiConfig from '@/constants/apiConfig';
import { sendRequest } from '@/services/api';
import PublicLayout from '@/components/layout/PublicLayout';
import Head from 'next/head';
function ProfilePage(props) {
    return (
        <PublicLayout>
            <Head>
                <title>Login</title>
            </Head>
            <Profile {...props} />
        </PublicLayout>
    );
}

export default ProfilePage;

export const getServerSideProps = withAuth(accessRouteTypeEnum.REQUIRE_LOGIN, async ({ session }) => {
    try {
        // lấy dữ liệu của tin tức có slug là params.slug

        const res = await sendRequest(apiConfig.account.getProfile, {}, null, session);
        let profile = {};
        if (res.data.result && res.data.data) profile = res.data.data;
        return {
            props: {
                data: { session, profile },
            },
        };
    } catch (error) {
        console.error(error);
        return {
            props: {
                data: { profile: {}, session },
            },
        };
    }
});
