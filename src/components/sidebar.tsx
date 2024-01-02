"use client";
import React, { useState } from "react";
import { HiMenuAlt3 } from "react-icons/hi";
import { MdOutlineDashboard } from "react-icons/md";
import { AiOutlineUser } from "react-icons/ai";
import { FiFolder } from "react-icons/fi";
import Link from "next/link";
import { IconType } from "react-icons";
import { v4 as uuidv4 } from "uuid";

type MenuType = {
	name: string;
	link: string;
	icon: IconType;
	margin?: boolean;
};

const SideBarV2 = () => {
	const menus: MenuType[] = [
		{ name: "Dashboard", link: "/portal/dashboard", icon: MdOutlineDashboard },
		{ name: "Usuario", link: "/portal/usuarios", icon: AiOutlineUser },
		{ name: "Nfe", link: "/portal/nfe", icon: FiFolder },
	];
	const [open, setOpen] = useState(false);
	return (
		<div>
			<section className="flex">
				<div
					className={`bg-shark-700 min-h-screen ${
						open ? "w-72" : "w-16"
					} duration-500 text-shark-600 dark:text-shark-100 px-4`}
				>
					<div className="py-3 flex justify-end">
						<HiMenuAlt3
							size={26}
							className="cursor-pointer"
							onClick={() => setOpen(!open)}
						/>
					</div>
					<div className="mt-4 flex flex-col gap-4 relative">
						{menus?.map((menu, i) => (
							<Link
								href={menu?.link}
								key={uuidv4()}
								className={` ${
									menu?.margin && "mt-5"
								} group flex items-center text-sm  gap-3.5 font-medium p-2 hover:bg-shark-800 rounded-md`}
							>
								<div>{React.createElement(menu?.icon, { size: "20" })}</div>
								<h2
									style={{
										transitionDelay: `${i + 3}00ms`,
									}}
									className={`whitespace-pre duration-500 ${
										!open && "opacity-0 translate-x-28 overflow-hidden"
									}`}
								>
									{menu?.name}
								</h2>
								<h2
									className={`${
										open && "hidden"
									} absolute left-48 bg-shark-50 dark:bg-shark-700 font-semibold whitespace-pre text-shark-900 dark:text-shark-100 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit  `}
								>
									{menu?.name}
								</h2>
							</Link>
						))}
					</div>
				</div>
			</section>
		</div>
	);
};

export default SideBarV2;
