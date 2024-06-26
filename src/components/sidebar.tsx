"use client";
import { cn } from "@/libs/utils";
import type { SideBarProps } from "@/types/sidbar";
import { HiMenuAlt3 } from "react-icons/hi";
import DropdownMenu from "./dropdown";

// add NavItem prop to component prop

const Sidebar = ({
	sideItems: navItems,
	shown,
	collapsed,
	setCollapsed,
}: SideBarProps) => {
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
				<DropdownMenu
					items={navItems || []}
					collapsed={collapsed}
					setCollapsed={setCollapsed}
				/>
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
