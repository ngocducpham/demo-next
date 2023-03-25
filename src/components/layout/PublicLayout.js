import React from 'react';
import Header from './Header';

function PublicLayout({ children }) {
    return (
        <>
            <Header />
            {children}
        </>
    );
}

export default PublicLayout;