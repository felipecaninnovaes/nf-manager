/** @format */

import Table, { ColumnDefinitionType } from "@/components/table";
import { Nfe } from "@/interfaces/nfe";
import Total from "@/components/total";
import Search from "@/components/search";
import { getCookie } from "@/libs/cookies";
import Button from "@/components/button";
import { redirect } from "next/navigation";

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
	const cookie = (await getCookie("Bearer")) || "";
	const res: Response = await fetch(`${process.env.API_URL_REMOTE}/api/nfe`, {
		method: "GET",
		headers: {
			"Content-Type": "application/json",
			Authorization: `Bearer ${cookie}`,
		},
		cache: "no-cache",
	});
	if (res.ok) {
		const data = await res.json();
		return data;
	}
	return res;
}

async function navigate() {
	"use server";
	await redirect("/portal/nfe/upload");
}

export default async function Home() {
	const dataTable = await getData();
	return (
		<div>
			<form action={navigate}>
				<Search data="teste">
					<Button variant="outline" color="primary" size="md" type="submit">
						Upload
					</Button>
				</Search>
				<Table data={dataTable} columns={columns} />
				<Total data={dataTable} />
			</form>
		</div>
	);
}
