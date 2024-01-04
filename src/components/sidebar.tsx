"use client";
import React, { useState } from "react";
import { cn } from "@/libs/utils";
import Link from "next/link";
import { HiMenuAlt3 } from "react-icons/hi";
import { MdOutlineDashboard } from "react-icons/md";
import { AiOutlineUser } from "react-icons/ai";
import { FiFolder } from "react-icons/fi";
import { IconType } from "react-icons";
// define a NavItem prop
export type NavItem = {
	label: string;
	href: string;
	icon: IconType;
};
export const defaultNavItems: NavItem[] = [
	{ label: "Dashboard", href: "/portal/dashboard", icon: MdOutlineDashboard },
	{ label: "Usuario", href: "/portal/usuarios", icon: AiOutlineUser },
	{ label: "Nfe", href: "/portal/nfe", icon: FiFolder },
];

// add NavItem prop to component prop
type Props = {
	collapsed?: boolean;
	navItems?: NavItem[];
	setCollapsed(collapsed: boolean): void;
	shown: boolean;
};
const Sidebar = ({
	navItems = defaultNavItems,
	shown,
	collapsed,
	setCollapsed,
}: Props) => {
	const Icon = collapsed ? HiMenuAlt3 : HiMenuAlt3;
	return (
		<section>
			<div
				className={cn({
					"bg-shark-50 dark:bg-shark-700 text-shark-600 dark:text-shark-100 fixed md:static md:translate-x-0 z-20": true,
					"transition-all duration-300 ease-in-out": true,
					"w-[300px]": !collapsed,
					"w-16": collapsed,
					"-translate-x-full": !shown,
				})}
			>
				<div
					className={cn({
						"flex flex-col justify-between h-screen sticky inset-0 w-full": true,
					})}
				>
					{/* logo and collapse button */}
					<div
						className={cn({
							"flex items-center border-b border-b-shark-800 transition-none": true,
							"p-4 justify-between": !collapsed,
							"py-4 justify-center": collapsed,
						})}
					>
						{!collapsed && <span className="whitespace-nowrap">My Logo</span>}
						<button
							type="button"
							className="grid place-content-center hover:bg-shark-200 dark:hover:bg-shark-900 w-10 h-10 rounded-full opacity-0 md:opacity-100"
							onClick={() => setCollapsed(!collapsed)}
						>
							<Icon className="w-5 h-5" />
						</button>
					</div>
					<nav className="flex-grow">
						<ul
							className={cn({
								"my-2 flex flex-col gap-2 items-stretch": true,
							})}
						>
							{navItems.map((item, index) => {
								return (
									<li
										key={item.label + index}
										className={cn({
											"text-shark-900 dark:text-shark-100 hover:bg-shark-200 dark:hover:bg-shark-900 flex": true, //colors
											"transition-colors duration-300": true, //animation
											"rounded-md p-2 mx-3 gap-4 ": !collapsed,
											"rounded-full p-2 mx-3 w-10 h-10": collapsed,
										})}
									>
										<Link href={item.href} className="flex gap-2">
											{React.createElement(item?.icon, { size: "20" })}{" "}
											<span>{!collapsed && item.label}</span>
										</Link>
									</li>
								);
							})}
						</ul>
					</nav>
					<div
						className={cn({
							"grid place-content-stretch p-4 ": true,
						})}
					>
						<div className="flex gap-4 items-center h-11 overflow-hidden">
							{!collapsed && (
								<div className="flex flex-col ">
									<span className="text-shark-900 dark:text-shark-100 my-0">
										Tom Cook
									</span>
									<Link
										href="/"
										className="text-shark-900 dark:text-shark-100 text-sm"
									>
										View Profile
									</Link>
								</div>
							)}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};
export default Sidebar;
