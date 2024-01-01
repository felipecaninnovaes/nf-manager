/** @format */

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import SideBarV2 from "@/components/SidabarV2";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "NF Manager",
	description: "Gerensie suas notas fiscais de forma simples e rápida",
};

export default function Home({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en" suppressHydrationWarning={true}>
			<body className={inter.className}>
				<div className="flex dark:text-shark-100 dark:bg-shark-950">
					<SideBarV2/>
					<div className="flex flex-col w-full">
						<div className="flex items-center justify-center h-full">
							<div className="bg-shark-100 dark:bg-shark-700 shadow-sm rounded-xl p-10">
								<div>{children}</div>
							</div>
						</div>
					</div>
				</div>
			</body>
		</html>
	);
}
