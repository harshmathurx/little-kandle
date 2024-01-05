import cn from "classnames";
import Image from "next/image";
import Link from "next/link";
import { defaultNavItems } from "./defaultNavItems";

const Sidebar = ({ collapsed, setCollapsed, navItems = defaultNavItems, navItems2 }) => {
    return (
        <div
            className={cn({
                "bg-[#1A1C20] text-zinc-50 z-20": true,
            })}
        >
            <div
                className={cn({
                    "flex flex-col justify-between": true,
                    "h-full": true,
                })}
            >
                <div
                    className={cn({
                        "flex items-center": true,
                        "p-4 justify-between": !collapsed,
                        "py-4 justify-center": collapsed,
                    })}
                >
                    <button
                        className={cn({
                            "grid place-content-center": true, // position
                            "bg-[#24262B] ": true, // colors
                            "w-10 h-10 rounded-[4px]": true, // shape
                        })}
                        onClick={() => setCollapsed(!collapsed)}
                    >
                        <Image src="/assets/menu.svg" height={100} width={100} alt="menu" className="w-5 h-5" />
                    </button>
                </div>
                <nav className="flex-grow">
                    <ul
                        className={cn({
                            "my-2 flex flex-col gap-2 items-stretch": true,
                        })}
                    >
                        {navItems.map((group, indexParent) => {
                            return (
                                <div className={cn({
                                    "my-1 flex flex-col items-stretch": true,
                                    "bg-[#24262B] transition-colors duration-300": true,
                                    "rounded-md p-2 mx-3 gap-4": !collapsed,
                                    "rounded-[4px] p-2 mx-3 gap-4": collapsed,
                                })} key={indexParent}>
                                    {
                                        group.map((item, index) => {
                                            return (
                                                <li
                                                    key={index}
                                                    className={cn({
                                                    })}
                                                >
                                                    <Link href={item.href} className="flex gap-2">
                                                        {item.icon} <span>{!collapsed && item.label}</span>
                                                    </Link>
                                                </li>
                                            );
                                        })
                                    }
                                </div>
                            )
                        })}
                    </ul>
                </nav>
                <nav className="">
                    <ul
                        className={cn({
                            "my-2 flex flex-col gap-2 items-stretch": true,
                        })}
                    >
                        {navItems2.map((group, indexParent) => {
                            return (
                                <div className={cn({
                                    "my-1 flex flex-col items-stretch": true,
                                    "bg-[#24262B] transition-colors duration-300": true,
                                    "rounded-md p-2 mx-3 gap-4": !collapsed,
                                    "rounded-[4px] p-2 mx-3 gap-4": collapsed,
                                })} key={indexParent}>
                                    {
                                        group.map((item, index) => {
                                            return (
                                                <li
                                                    key={index}
                                                    className={cn({
                                                    })}
                                                >
                                                    <Link href={item.href} className="flex gap-2">
                                                        {item.icon} <span>{!collapsed && item.label}</span>
                                                    </Link>
                                                </li>
                                            );
                                        })
                                    }
                                </div>
                            )
                        })}
                    </ul>
                </nav>
            </div>
        </div>
    );
};
export default Sidebar;

