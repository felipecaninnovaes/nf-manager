/** @format */
"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import React, { useState } from "react";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import { usePathname } from "next/navigation";

// icons
import { GoHome, GoHomeFill } from "react-icons/go";
import { RiArrowLeftDoubleFill } from "react-icons/ri";
import { FiSearch } from "react-icons/fi";
import { CiSearch } from "react-icons/ci";


interface SideNavItemType {
	icon?: {
		icon: React.ReactNode;
		fillIcon: React.ReactNode;
	};
	label: string;
	href: string;
}

const sidebarItmes: SideNavItemType[] = [
	{
		icon: {
			icon: <GoHome />,
			fillIcon: <GoHomeFill />,
		},
		label: "Home",
		href: "/",
	},
	{
		icon: {
			icon: <GoHome />,
			fillIcon: <GoHomeFill />,
		},
		label: "NFe",
		href: "/nfe",
	},
	{
		icon: {
			icon: <CiSearch />,
			fillIcon: <FiSearch />,
		},
		label: "Usuarios",
		href: "/usuarios",
	},
];
export default function Sidebar() {
	const [isSidebarOpen, setSidebarOpen] = useState(true);

	return (
		<div
			className={cn(
				"min-h-screen max-h-screen overflow-y-auto w-fit md:pr-2 pr-2 pt-2 flex flex-col bg-zinc-100 dark:bg-zinc-700 gap-3 pl-2",
				isSidebarOpen && "md:w-60",
			)}
		>
			{/* logo */}
			<HoverContainer>
				<Link href={"/"}>{/* NF-Manager */}</Link>
			</HoverContainer>

			{/* sidenavitems */}

			{sidebarItmes.map((d, i) => (
				<HoverContainer key={d.label}>
					<SideNavItem
						icon={d.icon}
						href={d.href}
						isSidebarOpen={isSidebarOpen}
						label={d.label}
					/>
				</HoverContainer>
			))}

			{/* toggle button  */}
			<section
				className={cn(
					"hidden md:flex w-ful justify-end",
					!isSidebarOpen && "justify-start",
				)}
			>
				<HoverContainer>
					<RiArrowLeftDoubleFill
						onClick={() => setSidebarOpen(!isSidebarOpen)}
						className={cn(
							"text-gray-400 transition-all text-4xl",
							!isSidebarOpen && "rotate-180",
						)}
					/>
				</HoverContainer>
			</section>
		</div>
	);
}

function SideNavItem({
	href,
	isSidebarOpen,
	icon,
	label,
}: SideNavItemType & { isSidebarOpen: boolean }) {
	const [animationParent] = useAutoAnimate();
	const pathname = usePathname();
	const isActivePage = pathname === href;
	return (
		<Link
			ref={animationParent}
			href={href}
			className={cn("flex gap-1 items-center cursor-pointer")}
		>
			{/* icon */}
			<div className="w-9 h-9 text-3xl">
				{isActivePage ? icon?.fillIcon : icon?.icon}
			</div>

			{/* label */}
			{isSidebarOpen && (
				<p
					className={cn(
						"text-xl hidden md:block pr-1 transition-all ",
						isActivePage && "font-bold",
					)}
				>
					{label}
				</p>
			)}
		</Link>
	);
}

function HoverContainer({
	children,
	className,
}: {
	children: React.ReactNode;
	className?: string;
}) {
	return (
		<div className="p-2 transition-all rounded-full cursor-pointer hover:bg-zinc-100 w-fit dark:hover:bg-zinc-800 group-hover:dark:bg-zinc-800 group-hover:bg-zinc-100 ">
			{children}
		</div>
	);
}
