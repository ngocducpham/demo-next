import withAuth from '@/components/withAuth';
import { accessRouteTypeEnum } from '@/constants';
import useAuth from '@/hooks/useAuth';
import React from 'react';

function ProfilePage() {
    const { profile } = useAuth();
    return <div>Đay la profile {profile}</div>;
}

export default withAuth(ProfilePage, accessRouteTypeEnum.REQUIRE_LOGIN);
