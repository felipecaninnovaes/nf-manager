import { TableHeader, Tables } from "@/components/genericTable";
import { useEmpresas } from "@/hooks/useEmpresas";
import { type Collunms, type Rows, mapToRows } from "@/libs/convert";

export default async function Home() {
	const dataTable = await useEmpresas();

	const collunms: Collunms[] = [
		{ key: "nome", value: "Nome" },
		{ key: "nome_fant", value: "Nome Fantasia" },
		{ key: "cnpj", value: "CNPJ" },
		{ key: "telefone", value: "Telefone" },
		{ key: "email", value: "Email" },
		{ key: "regime_tributario", value: "Regime Tributario" },
	];
	const rows: Rows[] = mapToRows(
		dataTable.Data,
		collunms.map((item) => item.key),
	);
	return (
		<section>
			<TableHeader title="Empresas" subtitle="Lista de Empresas" />
			<Tables collunms={collunms} rows={rows} />
		</section>
	);
}
