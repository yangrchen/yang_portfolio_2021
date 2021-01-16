import React from 'react';
import Sidebar from '../sidebar/sidebar';

const Layout = ({ children }) => {
    return (
        <div class="">
            <Sidebar></Sidebar>
            <main>
                {children}
            </main>
        </div>
    )
}
export default Layout