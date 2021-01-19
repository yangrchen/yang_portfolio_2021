import React from 'react';
import Sidebar from '../sidebar/sidebar';

const Layout = ({ children }) => {
    return (
        <div className="lg:flex lg:space-x-16">
            <Sidebar></Sidebar>
            <main>
                {children}
            </main>
        </div>
    )
}
export default Layout