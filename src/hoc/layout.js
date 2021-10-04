import React from 'react';
import Navbar from '../pages/Navbar';

const Layout = (props) => {
    return (
        <div>
            <Navbar />
            {props.children}
        </div>
    );
};

export default Layout;