/** @format */

import { ColumnDefinitionType, TableNfe } from "@/components/table";
import { INfe } from "@/interfaces/nfe";
import { redirect } from "next/navigation";
import { useNfe } from "@/hooks/useNfe";
import { useEmpresas } from "@/hooks/useEmpresas";

const columns: ColumnDefinitionType<INfe, keyof INfe>[] = [
	{
		key: "nfe_idnfe",
		tableName: "nfe",
		header: "ID",
		width: 50,
	},

	{
		key: "nfe_nnf",
		tableName: "nfe",
		header: "Numero da Nota",
	},
	{
		key: "nfe_dhemi",
		tableName: "nfe",
		header: "Data de Emissão",
		width: 250,
	},
	{
		key: "nfe_nftotal",
		tableName: "nfe",
		header: "NF Total",
	},
	{
		key: "emit_cnpjcpf",
		tableName: "nfe",
		header: "Emitente",
	},
	{
		key: "dest_cnpjcpf",
		tableName: "nfe",
		header: "Destinatario",
	},
];

async function navigate() {
	"use server";
	await redirect("/portal/nfe/upload");
}

export default async function Home() {

	const empresas = await useEmpresas();
	const dataTable = await useNfe();
	return (
		<div>
			{}
			<form action={navigate}>
				<TableNfe data={dataTable} columns={columns} empresas={empresas.Data} />
			</form>
		</div>
	);
}
