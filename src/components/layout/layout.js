import React from 'react';
import Sidebar from '../sidebar/sidebar';

const Layout = ({ children }) => {
    return (
        <div className="lg:flex ">
            <Sidebar></Sidebar>
            <main className="w-5/6">
                {children}
            </main>
        </div>
    )
}
export default Layout