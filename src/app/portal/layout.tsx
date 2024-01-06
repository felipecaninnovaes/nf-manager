"use client"
import Layout from "@/components/layout";
import SideNav from "@/components/sidebar";
import SideBarV2 from "@/components/sidebar";
import { useState } from "react";

export default function DashboardLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	const [showSidebar, setShowSidebar] = useState(true);
	const [collapsed, setSidebarCollapsed] = useState(false);
	return (
		<section>
				<Layout>
				<div>{children}</div>
				</Layout>
		</section>
	);
}
