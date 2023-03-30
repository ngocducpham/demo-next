import { authOptions } from '@/pages/api/auth/[...nextauth]';
import { getServerSession } from 'next-auth';
import { accessRouteTypeEnum } from '@/constants';

const withAuth = (accessType, cb) => {
    return async (context) => {
        const { req, res } = context;
        const session = await getServerSession(req, res, authOptions);

        if (accessType === accessRouteTypeEnum.REQUIRE_LOGIN && !session) {
            return {
                redirect: {
                    destination: '/login',
                    permanent: false,
                },
            };
        }
        if (accessType === accessRouteTypeEnum.NOT_LOGIN && session) {
            return {
                redirect: {
                    destination: '/',
                    permanent: false,
                },
            };
        }

        try {
            const pageProps = await cb({ session, context });
            return {
                ...pageProps,
                session,
            };
        } catch (e) {
            let { error, defaultProps } = e;
            if (error?.response.status === 401) {
                error = 'Unauthorized';
            }

            return {
                props: {
                    ...defaultProps,
                    error,
                },
            };
        }
    };
};

export default withAuth;
