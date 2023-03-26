import NextAuth from 'next-auth/next';
import CredentialsProvider from 'next-auth/providers/credentials';
import { sendRequest } from '@/services/api';
import apiConfig from '@/constants/apiConfig';

export default NextAuth({
    session: {
        strategy: 'jwt',
        maxAge: 6 * 24 * 60 * 60,
    },
    jwt: {
        maxAge: 6 * 24 * 60 * 60,
    },
    providers: [
        CredentialsProvider({
            async authorize(credentials) {
                try {
                    const login = await sendRequest(
                        {
                            ...apiConfig.account.login,
                            ignoreAuth: true,
                        },
                        {
                            data: {
                                username: credentials.username,
                                password: credentials.password,
                                app: 'APP_WEB_CMS',
                            },
                        }
                    );
                    const profile = await sendRequest(
                        {
                            ...apiConfig.account.getProfile,
                            ignoreAuth: true,
                            headers: {
                                Authorization: `Bearer ${login.data.data.token}`,
                            },
                        },
                        {}
                    );

                    return {
                        email: profile.data.data.email,
                        id: profile.data.data.id,
                        avatar: profile.data.data.avatar,
                        fullName: profile.data.data.fullName,
                        token: login.data.data.token,
                    };
                } catch (e) {
                    console.log(e);
                    throw new Error('Login failed, username or password is incorrect');
                }
            },
        }),
    ],
    callbacks: {
        jwt: async ({ token, user }) => {
            if (user?.token) {
                token.accessToken = user.token;
                token.email = user.email;
                token.id = user.id;
                token.avatar = user.avatar;
                token.fullName = user.fullName;
            }

            return token;
        },
        async session({ session, token }) {
            if (token) {
                // console.log(token);
                const { email, id, avatar, fullName, accessToken } = token;
                session.user = {
                    email,
                    id,
                    avatar,
                    fullName,
                    accessToken,
                };
            }
            return session;
        },
    },
});
