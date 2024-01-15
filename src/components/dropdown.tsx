"use client";
import React, { useState } from "react";
import Link from "next/link";
import { IconType } from "react-icons";

interface NavItem {
	label: string;
	href: string;
	submenu?: boolean;
	icon?: IconType;
	subMenuItems?: NavItem[];
}

interface DropdownMenuProps {
	items: NavItem[];
	collapsed?: boolean;
	setCollapsed(collapsed: boolean): void;
}

const DropdownMenu: React.FC<DropdownMenuProps> = ({
	items,
	collapsed,
	setCollapsed,
}: DropdownMenuProps) => {
	const [activeIndex, setActiveIndex] = useState(-1);
	const handleClick = (index: number) => {
		setCollapsed(false);
		setActiveIndex((prevIndex) => (prevIndex === index ? -1 : index));
	};

	return (
		<ul
		className={`transition-colors duration-300 flex flex-col gap-2 ${
		collapsed ? "items-center" : "flex"}`}
		>
			{items.map((item, index) => (
				<li
					key={item.label}
					className="px-4 py-2 hover:bg-gray-200 transition-all duration-200 ease-in-out transform"
				>
					{item.submenu ? (
						<button
							type="button"
							onClick={() => handleClick(index)}
							className={`flex items-center ${
								activeIndex === index ? "text-blue-500" : ""
							}`}
						>
							{item.icon && React.createElement(item.icon, { size: "25" })}
							<span className="text-xl flex">
								{collapsed ? "" : item?.label}
							</span>
						</button>
					) : (
						<Link
							href={item.href}
							onClick={() => handleClick(index)}
							className={`flex items-center ${
								activeIndex === index ? "text-blue-500" : ""
							}`}
						>
							{item.icon && React.createElement(item.icon, { size: "25" })}
							<span className="text-xl flex">
								{collapsed ? "" : item?.label}
							</span>
						</Link>
					)}
					{item.submenu && activeIndex === index && (
						<ul
							className={`bg-gray-200 rounded-md py-2 mt-2 transition-all duration-200 ease-in-out transform ${
								activeIndex === index ? "scale-100" : "scale-0"
							}`}
						>
							{item.subMenuItems?.map((subItem, subIndex) => (
								<li
									key={subItem.label}
									className="px-4 py-2 hover:bg-gray-300 transition-all duration-200 ease-in-out transform"
								>
									<Link
										href={subItem.href}
										className="transition-colors duration-300 flex gap-2"
									>
										{subItem.icon &&
											React.createElement(subItem.icon, { size: "25" })}
										<span className="text-xl flex">
											{collapsed ? "" : subItem?.label}
										</span>
									</Link>
								</li>
							))}
						</ul>
					)}
				</li>
			))}
		</ul>
	);
};

export default DropdownMenu;
