/** @format */

import Table, { ColumnDefinitionType } from "@/components/table";
import { Nfe } from "@/interfaces/nfe";
import Total from "@/components/total";
import Search from "@/components/search";
import { getCookie } from "@/libs/cookies";
import Button from "@/components/button";
import { redirect } from "next/navigation";
import { formatarCnpj } from "@/libs/utils";


const columns: ColumnDefinitionType<Nfe, keyof Nfe>[] = [
	{
		key: "nfe_nnf",
		header: "Numero da Nota",
	},
	{
		key: "nfe_dhemi",
		header: "Data de Emissão",
		width: 250,
	},
	{
		key: "nfe_nftotal",
		header: "NF Total",
	},
	{
		key: "emit_cnpjcpf",
		header: "Emitente",
	},
	{
		key: "dest_cnpjcpf",
		header: "Destinatario",
	},
];

async function getData(): Promise<Nfe[]> {
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

	const data = await res.json().then(
		(data: Nfe[]) => {
			return data as Nfe[];
		},
		() => Promise.resolve(),
	);
	return data as Nfe[];
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
				<Table data={dataTable} columns={columns}>
					<Button variant="outline" color="primary" size="sm" type="submit">
						Upload
					</Button>
				</Table>
				<Total data={dataTable} />
			</form>
		</div>
	);
}
