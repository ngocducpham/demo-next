import LanguageProvider from '@/locales/LanguageProvider';
import store from '@/stores';
import { Provider } from 'react-redux';
import 'antd/dist/reset.css';
import { SessionProvider, signOut } from 'next-auth/react';
import '@/styles/App.css';
import Error from 'next/error';

export default function App({ Component, pageProps: { session, error, ...pageProps } }) {
    // Use the layout defined at the page level, if available
    const getLayout = Component.getLayout || ((page) => page);

    if (error === 'Unauthorized') {
        signOut();
        return null;
    } else if (error) {
        return <Error statusCode={401} title="You do not have permission to access this page." />;
    }

    return (
        <SessionProvider session={session}>
            <Provider store={store}>{getLayout(<Component {...pageProps} />)}</Provider>
        </SessionProvider>
    );
}
