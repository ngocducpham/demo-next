import LanguageProvider from '@/locales/LanguageProvider';
import store from '@/stores';
import { Provider } from 'react-redux';
import 'antd/dist/reset.css';
import { SessionProvider } from 'next-auth/react';
import '@/styles/App.css';
export default function App({ Component, pageProps: { session, ...pageProps } }) {
    // Use the layout defined at the page level, if available
    const getLayout = Component.getLayout || ((page) => page);
    return (
        <SessionProvider session={session}>
            <Provider store={store}>{getLayout(<Component {...pageProps} />)}</Provider>
        </SessionProvider>
    );
}
