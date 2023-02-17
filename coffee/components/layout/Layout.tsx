import Footer from './Footer';
import Header from './Header';
import React from 'react';

const Layout = ({children}:any) => {
    return (
        <>
         <Header />
         {children}
         <Footer /> 
        </>
    );
};

export default Layout;