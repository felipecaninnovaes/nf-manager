/** @format */

import Table, { ColumnDefinitionType } from "@/components/Table";
import { Nfe } from "@/interfaces/nfe";
import Total from "@/components/Total";
import Search from "@/components/Search";
import { cookies } from "next/headers";
import Link from "next/link";

const columns: ColumnDefinitionType<Nfe, keyof Nfe>[] = [
	{
		key: "idnfe",
		header: "NFEid",
	},
	{
		key: "dhemi",
		header: "Data de Emissão",
		width: 250,
	},
	{
		key: "nftotal",
		header: "NF Total",
	},
	{
		key: "nfe_idemit",
		header: "Emitente",
	},
	{
		key: "nfe_iddest",
		header: "Destinatario",
	},
];

async function getData() {
	const res: Response = await fetch(`${process.env.API_URL_LOCAL}/api/nfe`, {
		method: "GET",
		headers: {
			"Content-Type": "application/json",
			Authorization: `Bearer ${cookies().get("Bearer")?.value}`,
		},
		cache: "no-cache",
	});
	if (res.ok) {
		const data = await res.json();
		return data;
	}
	return res;
}

export default async function Home() {
	const dataTable = await getData();
	// console.log(dataTable);
	return (
		<div>
			<Search data="teste">
				<Link
					type="button"
					href="/dashboard/nfe/upload"
					className="group relative w-auto flex justify-center py-2 px-6 text-sm font-medium rounded-lg text-shark-800 dark:text-shark-100 bg-shark-50 border-2 border-shark-300 dark:border-shark-600 dark:bg-shark-800 p-1 hover:bg-shark-200 dark:hover:bg-shark-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-shark-500"
				>
					Upload
				</Link>
			</Search>
			<Table data={dataTable} columns={columns} />
			<Total data={dataTable} />
		</div>
	);
}
