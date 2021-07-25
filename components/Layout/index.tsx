import React from 'react';
import BarraNavegacao from '../BarraNavegacao';

const Layout = ({children}) => {
    return (
        <>
            <BarraNavegacao />
           {children} 
        </>
    );
};

export default Layout;