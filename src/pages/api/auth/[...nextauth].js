import NextAuth from 'next-auth/next';
import CredentialsProvider from 'next-auth/providers/credentials';
import { sendRequest } from '@/services/api';
import apiConfig from '@/constants/apiConfig';

async function refreshAccessToken(tokenObject) {
    try {
        const response = await sendRequest(apiConfig.account.refreshToken, {
            refreshToken: tokenObject.refreshToken,
        });

        return {
            ...tokenObject,
            accessToken: response.data.data.token,
            refreshToken: response.data.data.refreshToken,
        };
    } catch (e) {
        return {
            ...tokenObject,
            error: 'RefreshAccessTokenError',
        };
    }
}

export const authOptions = {
    session: {
        strategy: 'jwt',
    },
    providers: [
        CredentialsProvider({
            async authorize(credentials) {
                try {
                    const login = await sendRequest(apiConfig.account.login, {
                        data: {
                            username: credentials.username,
                            password: credentials.password,
                            app: 'APP_WEB_CMS',
                        },
                    });

                    const accessToken = login.data.data.token;

                    const profile = await sendRequest(apiConfig.account.getProfile, {}, null, { accessToken });

                    const { email, id, avatar, fullName } = profile.data.data;

                    return {
                        email,
                        id,
                        avatar,
                        fullName,
                        accessToken,
                    };
                } catch (e) {
                    throw new Error(e);
                }
            },
        }),
    ],
    callbacks: {
        jwt: async ({ token, user }) => {
            if (user) {
                token.accessToken = user.accessToken;
                token.accessTokenExpires = user.accessTokenExpires;
                token.refreshToken = user.refreshToken;
                token.email = user.email;
                token.id = user.id;
                token.avatar = user.avatar;
                token.fullName = user.fullName;
            }

            if (token.refreshToken) {
                // we need to refresh the access token after accessTokenExpires - 1 hour
                const shouldRefreshAccessToken = Math.round(token.accessTokenExpires - 60 * 60 * 1000 - Date.now()) < 0;

                if (shouldRefreshAccessToken) {
                    return refreshAccessToken(token);
                }
            }

            return token;
        },
        async session({ session, token }) {
            if (token) {
                const { email, id, avatar, fullName, accessToken, accessTokenExpires } = token;
                session.user = {
                    email,
                    id,
                    avatar,
                    fullName,
                    accessToken,
                    accessTokenExpires,
                };
            }
            return session;
        },
    },
};

export default NextAuth(authOptions);
