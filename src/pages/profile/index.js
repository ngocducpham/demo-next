import { accessRouteTypeEnum } from '@/constants';
import Profile from '@/modules/profile';
import withAuth from '@/utils/withAuth';
import React from 'react';

function ProfilePage({ session }) {
    console.log(session);
    return <Profile />;
}

export default ProfilePage;

export const getServerSideProps = withAuth(accessRouteTypeEnum.REQUIRE_LOGIN, ({ session }) => {
    return {
        props: {
            session,
        },
    };
});
