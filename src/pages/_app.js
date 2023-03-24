import LanguageProvider from '@/locales/LanguageProvider';
import store from '@/stores';
import '@/styles/globals.css';
import { Provider } from 'react-redux';
import 'antd/dist/reset.css';

export default function App({ Component, pageProps }) {
    return (
        <Provider store={store}>
            <LanguageProvider>
                <Component {...pageProps} />
            </LanguageProvider>
        </Provider>
    );
}
