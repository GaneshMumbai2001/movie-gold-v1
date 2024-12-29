import { Outlet } from "react-router-dom";
import React from "react";

const Layout = () => {
    return (
        <main>
            <Outlet />
        </main>
    );
};

export default Layout;  // This is correct for default export
