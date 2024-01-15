import { mapToRows, Collunms, Rows } from "@/libs/convert";
import { TableHeader, Tables } from "@/components/genericTable";
import { useUser } from "@/hooks/useUsers";

export default async function Home() {
	const dataTable = await useUser();

	const collunms: Collunms[] = [
		{ key: "iduser", value: "ID User" },
		{ key: "firstname", value: "Primeiro Nome" },
		{ key: "secondname", value: "Segundo Nome" },
		{ key: "email", value: "Email" },
	];
	const rows: Rows[] = mapToRows(
		dataTable,
		collunms.map((item) => item.key),
	);
	return (
		<section>
			<TableHeader title="Usuarios" subtitle="Lista de Usuarios" />
			<Tables collunms={collunms} rows={rows} />
		</section>
	);
}
