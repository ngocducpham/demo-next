import React from 'react';
import Footer from './footer/Footer';
import Header from './header/Header';

function PublicLayout({ children }) {
    return (
        <>
            <Header />
            {children}
            <Footer />
        </>
    );
}

export default PublicLayout;
