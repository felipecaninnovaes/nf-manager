/** @format */

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import LoginPage from "./page";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "NF Manager",
	description: "Gerensie suas notas fiscais de forma simples e rápida",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<LoginPage />
			</body>
		</html>
	);
}
