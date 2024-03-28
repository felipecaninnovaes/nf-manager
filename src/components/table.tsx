"use client";
import { deleteInDB } from "@/actions/delete";
import Button from "@/components/button";
import Search from "@/components/search";
import type { IEmpresas } from "@/interfaces/empresas";
import type { INfe } from "@/interfaces/nfe";
import { pagination } from "@/libs/pagination";
import { searchFilter } from "@/libs/searchTable";
import React, { useState } from "react";
import { FiTrash } from "react-icons/fi";
import { Pagination } from "./pagination";
import { Select, SelectEmpresas } from "./select";
import Total from "./total";

export type ColumnDefinitionType<T, K extends keyof T> = {
	key: K;
	header: string;
	tableName: string;
	width?: number;
};

type TableHeaderProps<T, K extends keyof T> = {
	columns: Array<ColumnDefinitionType<T, K>>;
};

type TableRowsProps<T, K extends keyof T> = {
	data: Array<T>;
	columns: Array<ColumnDefinitionType<T, K>>;
};

type TableNavProps<T, K extends keyof T> = {
	data: Array<T>;
	columns: Array<ColumnDefinitionType<T, K>>;
	children?: React.ReactNode;
	empresas: IEmpresas[];
};

const TableHeader = <T, K extends keyof T>({
	columns,
}: TableHeaderProps<T, K>): JSX.Element => {
	const headers = columns.map((column, index) => {
		const style = {
			width: column.width ?? 100, // 100 is our default value if width is not defined
		};

		return (
			<th
				className="p-2 text-sm font-semibold uppercase text-left tracking-wide"
				key={`headCell-${String(column.key)}`}
				style={style}
			>
				{column.header}
			</th>
		);
	});

	return (
		<thead className="bg-shark-100 dark:bg-shark-700 border-b-2 border-shark-200 dark:border-shark-600">
			<tr>{headers}</tr>
		</thead>
	);
};

const TableRows = <T, K extends keyof T>({
	data,
	columns,
}: TableRowsProps<T, K>): JSX.Element => {
	const handleDelete = (id: string, tableName: string) => {
		deleteInDB(id, tableName);
	};

	const rows = data.map((row, index) => {
		return (
			<tr
				className="border-b-2 border-shark-200 dark:border-shark-600"
				key={`row-${row[columns[0].key]}`}
			>
				{columns.map((column, index2) => {
					return (
						<td
							className="p-2 text-sm text-left tracking-wide"
							key={`cell-${String(column.key) + String(index2)}`}
						>
							{String(row[column.key])}
						</td>
					);
				})}
				<td>
					<Button
						type="button"
						size="sm"
						color="danger"
						onClick={() =>
							handleDelete(String(row[columns[0].key]), columns[0].tableName)
						}
					>
						<FiTrash />
					</Button>
				</td>
			</tr>
		);
	});

	return <tbody>{rows}</tbody>;
};

export const TableNfe = <T, K extends keyof T>({
	data,
	columns,
	children,
	empresas,
}: TableNavProps<T, K>): JSX.Element => {
	const [currentPage, setCurrentPage] = React.useState(1);

	const [empresasCNPJ, setEmpresasCNPJ] = useState<string>("");
	const [selectType, setSelectType] = useState<string>("");
	const [search, setSearch] = useState("");
	const allData: INfe[] = data as INfe[] | INfe[];

	const handleSetEmpresasCNPJ = (e: React.ChangeEvent<HTMLSelectElement>) => {
		setEmpresasCNPJ(e.target.value);
	};

	const handleSetType = (e: React.ChangeEvent<HTMLSelectElement>) => {
		setSelectType(e.target.value);
	};

	const currentFilteredData = (
		allData: INfe[],
		empresasCNPJ: string,
		selectType: string,
	): T[] => {
		if (selectType === "ENTRADA") {
			return allData.filter(
				(item) => item.dest_cnpjcpf === empresasCNPJ,
			) as T[];
		}
		if (selectType === "SAIDA") {
			return allData.filter(
				(item) => item.emit_cnpjcpf === empresasCNPJ,
			) as T[];
		}
		return [] as T[];
	};

	const dataPage = searchFilter({
		columns,
		rows: currentFilteredData(allData, empresasCNPJ, selectType),
		value: search,
	});
	const paginationResult = pagination({
		dataPage,
		currentPage,
		rowsPerPage: 10,
	});

	return (
		<div className="w-full">
			<div className="flex h-auto border-b-2 border-shark-200 dark:border-shark-600">
				<SelectEmpresas
					value={empresasCNPJ}
					onChange={handleSetEmpresasCNPJ}
					empresas={empresas}
				/>
				<Select
					options={[
						{ label: "SELECIONE UM TIPO", value: "SELECIONE UM TIPO" },
						{ label: "ENTRADA", value: "ENTRADA" },
						{ label: "SAIDA", value: "SAIDA" },
					]}
					value={selectType}
					onChange={handleSetType}
				/>
				<Search
					className="w-auto"
					onChange={(e) => setSearch(e.target.value)}
					value={search}
				/>
				<div className="flex align-middle px-0 py-2">{children}</div>
			</div>
			<table className="w-auto">
				<TableHeader columns={columns} />
				<TableRows data={paginationResult.currentRows} columns={columns} />
			</table>
			<div>
				<Pagination
					currentPage={currentPage}
					numberOfPages={paginationResult.numbers}
					totalPages={paginationResult.totalPages}
					setCurrentPage={setCurrentPage}
				/>
			</div>
			<Total data={dataPage as INfe[]} />
		</div>
	);
};
