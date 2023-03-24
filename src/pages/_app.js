import LanguageProvider from '@/locales/LanguageProvider';
import store from '@/stores';
import '@/styles/index.scss';
import { Provider } from 'react-redux';
import 'antd/dist/reset.css';
import { SessionProvider } from 'next-auth/react';

export default function App({ Component, pageProps: { session, ...pageProps } }) {
    return (
        <SessionProvider session={session}>
            <Provider store={store}>
                <Component {...pageProps} />
            </Provider>
        </SessionProvider>
    );
}
