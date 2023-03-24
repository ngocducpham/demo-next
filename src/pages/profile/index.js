import { accessRouteTypeEnum } from '@/constants';
import withAuth from '@/utils/withAuth';
import React from 'react';

function ProfilePage() {
    return <div>Đay la profile {profile}</div>;
}

export default ProfilePage;

export const getServerSideProps = withAuth(accessRouteTypeEnum.REQUIRE_LOGIN, ({ session }) => {
    return {
        props: {
            session,
        },
    };
});
