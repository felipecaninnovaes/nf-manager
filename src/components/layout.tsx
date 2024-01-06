import { cn } from "@/libs/utils";
import React, { PropsWithChildren, useState } from "react";
import Sidebar from "@/components/sidebar";
import Navbar from "@/components/navbar";

const Layout = (props: PropsWithChildren) => {
	const [collapsed, setSidebarCollapsed] = useState(false);
	const [showSidebar, setShowSidebar] = useState(true);
	return (
		<div className={cn({
            "grid bg-zinc-100 min-h-screen": true,
            "grid-cols-sidebar": !collapsed,
            "grid-cols-sidebar-collapsed": collapsed,
            "transition-[grid-template-columns] duration-300 ease-in-out": true,
          })}>
			<div className="flex dark:text-shark-100 dark:bg-shark-950">
				<Sidebar
					collapsed={collapsed}
					setCollapsed={setSidebarCollapsed}
					shown={showSidebar}
				/>
				<div className="">
					<Navbar onMenuButtonClick={() => setShowSidebar((prev) => !prev)} />
				</div>
				<div className="flex flex-col w-full">
					<div className="flex items-center justify-center h-full">
						<div className="bg-shark-100 dark:bg-shark-700 shadow-sm rounded-xl p-10">
							<div>{props.children}</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Layout;
