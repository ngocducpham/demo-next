import LanguageProvider from '@/locales/LanguageProvider';
import store from '@/stores';
import { Provider } from 'react-redux';
import 'antd/dist/reset.css';
import { SessionProvider } from 'next-auth/react';
import '@/styles/App.css';
import { useMemo } from 'react';
import { getServerSession } from 'next-auth';
import { authOptions } from './api/auth/[...nextauth]';

export default function App({ Component, pageProps: { session, ...pageProps } }) {
    const refetchInterval = useMemo(() => {
        if (!session || !session.accessTokenExpires) return 0;

        // refetch session 30 minutes before it expires
        const timeRemaining = Math.round(session.accessTokenExpires - 30 * 60 * 1000 - Date.now()) / 1000;
        console.log('timeRemaining', timeRemaining);
        return timeRemaining > 0 ? timeRemaining : 0;
    }, [session]);

    return (
        <SessionProvider session={session} refetchInterval={refetchInterval}>
            <Provider store={store}>
                <Component {...pageProps} />
            </Provider>
        </SessionProvider>
    );
}

App.getInitialProps = async ({ ctx }) => {
    return {
        session: await getServerSession(ctx.req, ctx.res, authOptions),
    };
};
