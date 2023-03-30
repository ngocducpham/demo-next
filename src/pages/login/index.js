import React from 'react';
import { showErrorMessage, showSucsessMessage } from '@/services/notifyService';
import { useRouter } from 'next/router';
import Login from '@/components/desktop/login';
import PublicLayout from '@/components/layout/PublicLayout';
import { getSession, signIn } from 'next-auth/react';
import withAuth from '@/utils/withAuth';
import { accessRouteTypeEnum } from '@/constants';
import RenderContext from '@/components/common/RenderContext';
import { deviceDetect } from '@/utils';
import LoginMobile from '@/components/mobile/login';

function LoginPage(props) {
    const router = useRouter();

    const onFinish = async (values) => {
        const result = await signIn('credentials', {
            ...values,
            redirect: false,
        });
        if (!result?.error) {
            showSucsessMessage('Login Success');
            router.replace('/');
        } else {
            showErrorMessage('Login failed');
        }
    };

    return (
        <RenderContext
            mobile={{ device: LoginMobile }}
            desktop={{ device: Login }}
            onFinish={onFinish}
            title="Login Page"
            {...props}
        />
    );
}

LoginPage.getLayout = function getLayout(page) {
    return <PublicLayout>{page}</PublicLayout>;
};

export const getServerSideProps = withAuth(accessRouteTypeEnum.NOT_LOGIN, ({ session, context }) => {
    const isMobile = deviceDetect(context);
    return {
        props: {
            initDevice: isMobile,
        },
    };
});

export default LoginPage;
