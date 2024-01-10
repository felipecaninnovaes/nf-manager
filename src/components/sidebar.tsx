"use client";
import React, { useState } from "react";
import { cn } from "@/libs/utils";
import Link from "next/link";
import { HiMenuAlt3, HiCloudUpload, HiOutlineDocumentText, HiDocumentText, HiOutlineUser } from "react-icons/hi";
import { MdOutlineDashboard } from "react-icons/md";
import { IconType } from "react-icons";
import { usePathname } from "next/navigation";
import { IoIosArrowDown } from "react-icons/io";
import { IEmpresas } from "@/interfaces/empresas";
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
	{ label: "Usuario", href: "/portal/usuarios", icon: HiOutlineUser },
	{
		label: "Nfe",
		href: "/portal/nfe",
		icon: HiOutlineDocumentText,
		submenu: true,
		subMenuItems: [
			{ label: "Notas", href: "/portal/nfe/emitidas", icon: HiDocumentText },
			{ label: "Upload", href: "/portal/nfe/upload", icon: HiCloudUpload }],
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
	data?: IEmpresas[];
};

const Sidebar = ({
	navItems = defaultNavItems,
	shown,
	collapsed,
	setCollapsed,
	data
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
					"flex flex-col h-screen transition-all duration-300 ease-in-out inset-0 w-full": true,
				})}
			>
				{/* logo and collapse button */}
				<div
					className={cn({
						"flex items-center transition-all duration-300 ease-in-out": true,
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
						<div
							className={
								collapsed
									? "flex items-center py-2 justify-center transition-all duration-300 ease-in-out"
									: " py-2 justify-center transition-all duration-300 ease-in-out"
								
							}
							key={index + 1}
						>
							{item.submenu ? (
								<>
									<button
										type="button"
										onClick={toggleSubMenu}
										className={
											collapsed
												? ""
												: `flex flex-row transition-all duration-300 ease-in-out items-center p-2 rounded-lg hover-bg-zinc-100 w-full justify-between hover:bg-zinc-100 ${
														pathname.includes(item.href)
															? "bg-zinc-100"
															: "flex items-center"
												  }`
										}
									>
										<div
											className={
												collapsed
													? "flex flex-row p-2 items-center transition-all duration-300 ease-in-out"
													: "flex flex-row space-x-4 items-center transition-all duration-300 ease-in-out"
											}
										>
											{React.createElement(item?.icon, { size: "25" })}{" "}
											<span className="text-xl flex">
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
											className={
												collapsed
													? "flex items-center py-2 justify-center transition-all duration-300 ease-in-out"
													: " py-2 justify-center dark:bg-shark-800 transition-all duration-300 ease-in-out"
											}
											key={index + 1}
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
					<div className="flex gap-4 items-end h-auto overflow-hidden">
						{!collapsed && (
							<div className="flex flex-col ">
								<span className="text-shark-900 dark:text-shark-100 my-0">
									Admin
								</span>
								
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
				"transition-colors duration-300 flex flex-col gap-2": true, //animation
			})}
		>
			{navItems?.map((subItem, idx) => {
				return (
					<Link
						key={idx + 1}
						href={subItem?.href || "flex items-center "}
						className={cn({
							"text-shark-900 dark:text-shark-100 hover:bg-shark-200 dark:hover:bg-shark-900 flex items-center": true, //colors
							"transition-colors duration-300 ": true, //animation
							"rounded-md p-1 mx-5 gap-4": !collapsed,
							"font-bold": subItem?.href === pathName ? true : false,
						})}
					>
						{collapsed
							? ""
							: subItem?.icon &&
							  React.createElement(subItem.icon, { size: "25" })}{" "}
						<span className="text-xl flex">
							{collapsed ? "" : subItem?.label}
						</span>
					</Link>
				);
			})}
		</div>
	);
};

const MenuItem = ({ navItem, collapsed, pathName }: Props) => {
	return (
		<Link
			href={navItem?.href || "flex items-center "}
			className={cn({
				"text-shark-900 dark:text-shark-100 hover:bg-shark-200 dark:hover:bg-shark-900 flex items-center": true, //colors
				"transition-colors duration-300": true, //animation
				"rounded-md p-2 gap-4": !collapsed,
				"rounded-full p-2 w-10 h-10": collapsed,
				"font-bold": navItem?.href === pathName ? true : false,
			})}
		>
			{navItem?.icon && React.createElement(navItem.icon, { size: "25" })}{" "}
			<span className="text-xl flex">{collapsed ? "" : navItem?.label}</span>
		</Link>
	);
};
