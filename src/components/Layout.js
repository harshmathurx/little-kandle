// components/Layout.tsx
import classNames from "classnames";
import { useState } from "react";
import Sidebar from "./Sidebar";
import { navItems2 } from "./defaultNavItems";
const Layout = (props) => {
    const [collapsed, setSidebarCollapsed] = useState(true);
    return (
        <div
            className={classNames({
                "grid min-h-screen": true,
                "grid-cols-sidebar": !collapsed,
                "grid-cols-sidebar-collapsed": collapsed,
                "transition-[grid-template-columns] duration-300 ease-in-out": true,
            })}
        >
            <Sidebar 
                collapsed={collapsed}
                navItems2={navItems2}
                setCollapsed={() => setSidebarCollapsed((prev) => !prev)}
            />
            <div className=""> {props.children}</div>
        </div>
    );
};
export default Layout;