import Head from 'next/head';
import React from 'react';
import { setCacheAccessToken } from '@/services/userService';
import { showErrorMessage } from '@/services/notifyService';
import useFetch from '@/hooks/useFetch';
import apiConfig from '@/constants/apiConfig';
import { useRouter } from 'next/router';
import withAuth from '@/components/withAuth';
import { accessRouteTypeEnum } from '@/constants';
import Login from '@/modules/login';
import PublicLayout from '@/components/layout/PublicLayout';

function LoginPage() {
    const { execute, loading } = useFetch(apiConfig.account.login, {});
    const router = useRouter();

    const onFinish = (values) => {
        execute({
            data: values,
            onCompleted: (res) => {
                setCacheAccessToken(res.data?.token);
                router.replace('/');
            },
            onError: ({ message }) => showErrorMessage(message),
        });
    };

    return (
        <PublicLayout>
            <Head>
                <title>Login</title>
            </Head>
            <Login onFinish={onFinish} loading={loading} />
        </PublicLayout>
    );
}

export default withAuth(LoginPage, accessRouteTypeEnum.NOT_LOGIN);
