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

        try {
            return await cb({ session, context });
        } catch (e) {
            const { error, defaultProps } = e;
            if (error?.response.status === 401) {
                return {
                    props: {
                        ...defaultProps,
                        error: 'Unauthorized',
                    },
                };
            }
            return {
                props: defaultProps,
            };
        }
    };
};

export default withAuth;
