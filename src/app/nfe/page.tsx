/** @format */

import Table, { ColumnDefinitionType } from "@/components/Table";
import { use, useEffect } from "react";
import { Nfe } from "@/app/interfaces/nfe";
import Total from "@/components/Total";
import Search from "@/components/Search";

const columns: ColumnDefinitionType<Nfe, keyof Nfe>[] = [
	{
		key: "nfeidnfe",
		header: "NFEid",
	},
	{
		key: "dh_emi",
		header: "Data de Emissão",
		width: 250,
	},
	{
		key: "nf_total",
		header: "NF Total",
	},
	{
		key: "emit",
		header: "Emitente",
	},
	{
		key: "dest",
		header: "Destinatario",
	},
];

const getData = async (): Promise<Nfe[]> => {
	const res = await fetch("http://10.15.1.203:3001/api/nfe", {
		next: {
			revalidate: 30
		}
	});

	return res.json();
};

export default async function Home() {
	const dataTable = await getData();
	return (
		<div>
			<Search data="teste" />
			<Table data={dataTable} columns={columns} />
			<Total data={dataTable} />
		</div>
	);
}
