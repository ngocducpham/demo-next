import { defaultLocale } from '@/constants';
import React from 'react';
import { IntlProvider } from 'react-intl';

import locale_EN from './en.json';
import locale_VI from './vi.json';

const messages = {
    en: locale_EN,
    vi: locale_VI,
};

const LanguageProvider = ({ children }) => {
    const locale  = 'en';

    return (
        <IntlProvider
            locale={locale}
            messages={messages[locale]}
            defaultLocale={defaultLocale}
            onError={e => console.log("MISSING_TRANSLATION: " + e?.descriptor?.id)}
        >
            {children}
        </IntlProvider>
    );
};

export default LanguageProvider;
