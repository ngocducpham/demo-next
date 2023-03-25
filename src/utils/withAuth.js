const { accessRouteTypeEnum } = require('@/constants');
const { getSession } = require('next-auth/react');

const withAuth = (accessType, cb) => {
    return async (context) => {
        const { req } = context;
        const session = await getSession({ req });

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

        return await cb({ session, context });
    };
};

export default withAuth;
