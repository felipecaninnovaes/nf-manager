"use client";
/** @format */

import Table, { ColumnDefinitionType } from "@/components/Table";
import { use, useEffect } from "react";
import { Nfe } from "@/app/interfaces/nfe";

const columns: ColumnDefinitionType<Nfe, keyof Nfe>[] = [
	{
		key: "nfeidnfe",
		header: "NFEid",
		width: 150,
	},
	{
		key: "nf_total",
		header: "NF Total",
	},
	{
		key: "emit",
		header: "Emitente",
	},
];

const getData = async (): Promise<Nfe[]> => {
	const res = await fetch("http://10.15.1.203:3001/api/nfe");

	return res.json();
};

export default async function Home() {
	const dataTable = await getData();
	return (
		<Table data={dataTable} columns={columns} />
	);
}
