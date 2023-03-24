import { accessRouteTypeEnum } from '@/constants';
import useAuth from '@/hooks/useAuth';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import Loading from '../loading';

const getRedirectPath = (authRequire, isAuthenticated) => {
    if (authRequire === accessRouteTypeEnum.NOT_LOGIN && isAuthenticated) {
        return '/';
    }

    if (authRequire === accessRouteTypeEnum.REQUIRE_LOGIN && !isAuthenticated) {
        return '/login';
    }

    return false;
};

function withAuth(WrappedComponent, authRequire) {
    const Auth = (props) => {
        const routes = useRouter();
        const { loading, isAuthenticated, token } = useAuth();
        const redirectPath = getRedirectPath(authRequire, isAuthenticated);

        useEffect(() => {
            if (redirectPath) routes.replace(redirectPath);
        }, [redirectPath, routes]);

        if (loading || (!isAuthenticated && redirectPath)) {
            return <Loading show />;
        }

        return redirectPath ? null : <WrappedComponent {...props} />;
    };

    return Auth;
}

export default withAuth;
