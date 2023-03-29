import { authOptions } from '@/pages/api/auth/[...nextauth]';
import { getServerSession } from 'next-auth';
import { accessRouteTypeEnum } from '@/constants';

const withAuth = (accessType, cb) => {
    return async (context) => {
        const { req, res } = context;
        const session = await getServerSession(req, res, authOptions);

        if (accessType === accessRouteTypeEnum.REQUIRE_LOGIN && (!session || session.error == "RefreshAccessTokenError")) {
            return {
                redirect: {
                    destination: '/login',
                    permanent: false,
                },
            };
        }
        if (accessType === accessRouteTypeEnum.NOT_LOGIN && session && session.error != "RefreshAccessTokenError") {
            return {
                redirect: {
                    destination: '/',
                    permanent: false,
                },
            };
        }

        if (cb) {
            return await cb({ session, context });
        }

        return {
            props: {},
        };
    };
};

export default withAuth;
