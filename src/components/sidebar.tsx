"use client";
import React, { useState } from "react";
import { cn } from "@/libs/utils";
import Link from "next/link";
import { HiMenuAlt3 } from "react-icons/hi";
import { MdOutlineDashboard } from "react-icons/md";
import { AiOutlineUser } from "react-icons/ai";
import { FiFolder } from "react-icons/fi";
import { IconType } from "react-icons";
import { usePathname } from "next/navigation";
import { IoIosArrowDown } from "react-icons/io";
// define a NavItem prop
export type NavItem = {
	label: string;
	href: string;
	icon: IconType;
	submenu?: boolean;
	subMenuItems?: NavItem[];
};
export const defaultNavItems: NavItem[] = [
	{ label: "Dashboard", href: "/portal/dashboard", icon: MdOutlineDashboard },
	{ label: "Usuario", href: "/portal/usuarios", icon: AiOutlineUser },
	{
		label: "Nfe",
		href: "/portal/nfe",
		icon: FiFolder,
		submenu: true,
		subMenuItems: [{ label: "DFE", href: "/portal/nfe", icon: FiFolder }],
	},
];

// add NavItem prop to component prop
type Props = {
	collapsed?: boolean;
	navItems?: NavItem[];
	navItem?: NavItem;
	setCollapsed(collapsed: boolean): void;
	shown: boolean;
	pathName?: string;
};

const Sidebar = ({
	navItems = defaultNavItems,
	shown,
	collapsed,
	setCollapsed,
}: Props) => {
	const Icon = collapsed ? HiMenuAlt3 : HiMenuAlt3;
	const pathname = usePathname();
	const [subMenuOpen, setSubMenuOpen] = useState(false);
	const toggleSubMenu = () => {
		setSubMenuOpen(!subMenuOpen);
		setCollapsed(false);
	};
	return (
		<div
			className={cn({
				"bg-shark-50 dark:bg-shark-700 text-shark-600 dark:text-shark-100 fixed md:static md:translate-x-0 z-20": true,
				"transition-all duration-300 ease-in-out": true,
				"w-[300px]": !collapsed,
				"w-24": collapsed,
				"-translate-x-full": !shown,
			})}
		>
			<div
				className={cn({
					"flex flex-col h-screen sticky inset-0 w-full": true,
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

				{navItems.map((item, index) => {
					return (
						<div className="" key={index + 1}>
							{item.submenu ? (
								<>
									<button
										type="button"
										onClick={toggleSubMenu}
										className={`flex flex-row items-center p-2 rounded-lg hover-bg-zinc-100 w-full justify-between hover:bg-zinc-100 ${
											pathname.includes(item.href) ? "bg-zinc-100" : "flex items-center "
										}`}
									>
										<div className="flex flex-row space-x-4 items-center">
											{React.createElement(item?.icon, { size: "20" })}{" "}
											<span className="font-semibold text-xl flex">
												{collapsed ? "" : item.label}
											</span>
										</div>

										<div
											className={`${
												subMenuOpen
													? "rotate-180 transition-all duration-300 ease-in-out"
													: "transition-all duration-300 ease-in-out"
											} flex`}
										>
											{collapsed ? "" : <IoIosArrowDown size="20" />}
										</div>
									</button>

									{subMenuOpen && (
										<div
											className={cn({
												"text-shark-900 dark:text-shark-100 hover:bg-shark-200 dark:hover:bg-shark-900 flex": true, //colors
												"transition-colors duration-300": true, //animation
												"rounded-md p-2 mx-3 gap-4 ": !collapsed,
												"rounded-full p-2 mx-3 w-10 h-10": collapsed,
											})}
										>
											<SubMenuItem
												key={index + 1}
												navItems={item.subMenuItems}
												collapsed={collapsed}
												pathName={pathname}
												setCollapsed={setCollapsed}
												shown={shown}
											/>
										</div>
									)}
								</>
							) : (
								<MenuItem
									key={index + 3}
									navItem={item}
									collapsed={collapsed}
									pathName={pathname}
									setCollapsed={setCollapsed}
									shown={shown}
								/>
							)}
						</div>
					);
				})}
				<div
					className={cn({
						"grid place-content-stretch p-4 h-screen": true,
					})}
				>
					<div className="flex gap-4 items-end h-11 overflow-hidden">
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
	);
};
export default Sidebar;

const SubMenuItem = ({ navItems, collapsed, pathName }: Props) => {
	return (
		<div
		className={cn({
			"text-shark-900 dark:text-shark-100 hover:bg-shark-200 dark:hover:bg-shark-900 flex": true, //colors
			"transition-colors duration-300": true, //animation
			"rounded-md p-2 mx-3 gap-4": !collapsed,
			"rounded-full p-2 mx-3 w-10 h-10": collapsed,
		})}
		>
			{navItems?.map((subItem, idx) => {
				return (
					<Link
						key={idx + 1}
						href={subItem.href}
						className={cn({
							"text-shark-900 dark:text-shark-100 hover:bg-shark-200 dark:hover:bg-euc-900 flex": true, //colors
							"transition-colors duration-300": true, //animation
							"rounded-md mx-3 gap-4": !collapsed,
							"rounded-full p-2 mx-3 w-10 h-10": collapsed,
							"font-bold": subItem.href === pathName ? true : false,
						})}
					>
						<span>{collapsed ? "" : subItem.label}</span>
					</Link>
				);
			})}
		</div>
	);
};

const MenuItem = ({ navItem, collapsed, pathName }: Props) => {
	return (
		<Link
			href={navItem?.href || ""}
			className={cn({
				"text-shark-900 dark:text-shark-100 hover:bg-shark-200 dark:hover:bg-shark-900 flex": true, //colors
				"transition-colors duration-300": true, //animation
				"rounded-md p-2 mx-3 gap-4": !collapsed,
				"rounded-full p-2 mx-3 w-10 h-10": collapsed,
				"font-bold": navItem?.href === pathName ? true : false,
			})}
		>
			{navItem?.icon && React.createElement(navItem.icon, { size: "20" })}{" "}
			<span className="font-semibold text-xl flex">
				{collapsed ? "" : navItem?.label}
			</span>
		</Link>
	);
};
