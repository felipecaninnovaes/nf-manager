"use client";
import Layout from "@/components/layout";
import { SideItems } from "@/interfaces/sidebar";
import {
	HiCloudUpload,
	HiDocumentText,
	HiOutlineDocumentText,
	HiOutlineUser,
} from "react-icons/hi";
import { MdOutlineDashboard } from "react-icons/md";

export const sideItems: SideItems[] = [
	{ label: "Dashboard", href: "/portal/dashboard", icon: MdOutlineDashboard },
	{
		label: "Usuario",
		href: "/portal/usuarios",
		icon: HiOutlineUser,
		submenu: true,
		subMenuItems: [
			{
				label: "Listagem",
				href: "/portal/usuarios/listagem",
				icon: HiDocumentText,
			},
		],
	},
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
				label: "Listagem",
				href: "/portal/empresas/listagem",
				icon: HiDocumentText,
			},
			{
				label: "Cadastro",
				href: "/portal/empresas/cadastro",
				icon: HiCloudUpload,
			},
		],
	},
];

export default function DashboardLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<section>
			<Layout sideBarItems={sideItems}>
				<div>{children}</div>
			</Layout>
		</section>
	);
}
