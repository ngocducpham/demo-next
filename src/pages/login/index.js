import Head from 'next/head';
import React from 'react';
import { showErrorMessage } from '@/services/notifyService';
import { useRouter } from 'next/router';
import Login from '@/modules/login';
import PublicLayout from '@/components/layout/PublicLayout';
import { getSession, signIn } from 'next-auth/react';
import withAuth from '@/utils/withAuth';
import { accessRouteTypeEnum } from '@/constants';

function LoginPage() {
    const router = useRouter();

    const onFinish = async (values) => {
        const result = await signIn('credentials', {
            ...values,
            redirect: false
        });
        if (!result?.error) {
            router.replace('/');
        } else {
            showErrorMessage('Login failed');
        }
    };

    return (
        <PublicLayout>
            <Head>
                <title>Login</title>
            </Head>
            <Login onFinish={onFinish} />
        </PublicLayout>
    );
}

export const getServerSideProps = withAuth(accessRouteTypeEnum.NOT_LOGIN);

export default LoginPage;
