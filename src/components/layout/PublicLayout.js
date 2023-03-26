import React from 'react';
import Header from './header/Header';

function PublicLayout({ children }) {
    return (
        <>
            <Header />
            {children}
        </>
    );
}

export default PublicLayout;