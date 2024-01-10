"use client";
import React, { useState } from "react";
import { cn } from "@/libs/utils";
import Link from "next/link";
import {
	HiMenuAlt3,
	HiCloudUpload,
	HiOutlineDocumentText,
	HiDocumentText,
	HiOutlineUser,
} from "react-icons/hi";
import { MdOutlineDashboard } from "react-icons/md";
import { IconType } from "react-icons";
import DropdownMenu from "./dropdown";

interface NavItem {
	label: string;
	href: string;
	submenu?: boolean;
	icon?: IconType;
	subMenuItems?: NavItem[];
}

type Props = {
	collapsed?: boolean;
	navItems?: NavItem[];
	navItem?: NavItem;
	setCollapsed(collapsed: boolean): void;
	shown: boolean;
	pathName?: string;
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
			{ label: "Upload", href: "/portal/nfe/upload", icon: HiCloudUpload },
		],
	},
	{
		label: "Empresas",
		href: "/portal/empresas",
		icon: HiOutlineDocumentText,
		submenu: true,
		subMenuItems: [
			{
				label: "Cadastro",
				href: "/portal/empresas/cadastro",
				icon: HiCloudUpload,
			},
		],
	},
];
// add NavItem prop to component prop

const Sidebar = ({
	navItems = defaultNavItems,
	shown,
	collapsed,
	setCollapsed,
}: Props) => {
	const Icon = collapsed ? HiMenuAlt3 : HiMenuAlt3;
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
				<DropdownMenu items={navItems} collapsed={collapsed} setCollapsed={setCollapsed}/>
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

// const DropdownMenu: React.FC<DropdownMenuProps> = ({
// 	items,
// 	collapsed,
// 	setCollapsed,
// }: DropdownMenuProps) => {
// 	const [activeIndex, setActiveIndex] = useState(-1);
// 	const handleClick = (index: number) => {
// 		setCollapsed(false);
// 		setActiveIndex((prevIndex) => (prevIndex === index ? -1 : index));
// 	};

// 	return (
// 		<ul
// 		className={`transition-colors duration-300 flex flex-col gap-2 ${
// 		collapsed ? "items-center" : "flex"}`}
// 		>
// 			{items.map((item, index) => (
// 				<li
// 					key={item.label}
// 					className="px-4 py-2 hover:bg-gray-200 transition-all duration-200 ease-in-out transform"
// 				>
// 					{item.submenu ? (
// 						<button
// 							type="button"
// 							onClick={() => handleClick(index)}
// 							className={`flex items-center ${
// 								activeIndex === index ? "text-blue-500" : ""
// 							}`}
// 						>
// 							{item.icon && React.createElement(item.icon, { size: "25" })}
// 							<span className="text-xl flex">
// 								{collapsed ? "" : item?.label}
// 							</span>
// 						</button>
// 					) : (
// 						<Link
// 							href={item.href}
// 							onClick={() => handleClick(index)}
// 							className={`flex items-center ${
// 								activeIndex === index ? "text-blue-500" : ""
// 							}`}
// 						>
// 							{item.icon && React.createElement(item.icon, { size: "25" })}
// 							<span className="text-xl flex">
// 								{collapsed ? "" : item?.label}
// 							</span>
// 						</Link>
// 					)}
// 					{item.submenu && activeIndex === index && (
// 						<ul
// 							className={`bg-gray-200 rounded-md py-2 mt-2 transition-all duration-200 ease-in-out transform ${
// 								activeIndex === index ? "scale-100" : "scale-0"
// 							}`}
// 						>
// 							{item.subMenuItems?.map((subItem, subIndex) => (
// 								<li
// 									key={subItem.label}
// 									className="px-4 py-2 hover:bg-gray-300 transition-all duration-200 ease-in-out transform"
// 								>
// 									<Link
// 										href={subItem.href}
// 										className="transition-colors duration-300 flex gap-2"
// 									>
// 										{subItem.icon &&
// 											React.createElement(subItem.icon, { size: "25" })}
// 										<span className="text-xl flex">
// 											{collapsed ? "" : subItem?.label}
// 										</span>
// 									</Link>
// 								</li>
// 							))}
// 						</ul>
// 					)}
// 				</li>
// 			))}
// 		</ul>
// 	);
// };

export default Sidebar;
