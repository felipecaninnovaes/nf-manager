/** @format */

import Table, { ColumnDefinitionType } from "@/components/Table";
import { use, useEffect } from "react";
import { Nfe } from "@/app/interfaces/nfe";
import Total from "@/components/Total";
import Search from "@/components/Search";

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

const getData = async (): Promise<Nfe[]> => {
	const res = await fetch("http://10.15.1.203:3001/api/nfe", {
		next: {
			revalidate: 30,
		},
	});

	return res.json();
};

export default async function Home() {
	const dataTable = await getData();
	return (
		<div>
			<Search data="teste">
				<a href="/pages/nfe/upload" className="py-2 px-6 rounded-lg text-shark-50 bg-shark-100 border-2 border-shark-100 dark:border-shark-600 dark:bg-shark-800 p-1">Upload</a>
			</Search>
			<Table data={dataTable} columns={columns} />
			<Total data={dataTable} />
		</div>
	);
}
