"use client";
import React from "react";

export type ColumnDefinitionType<T, K extends keyof T> = {
	key: K;
	header: string;
	width?: number;
};

type TableProps<T, K extends keyof T> = {
	data: Array<T>;
	columns: Array<ColumnDefinitionType<T, K>>;
};

type TableHeaderProps<T, K extends keyof T> = {
	columns: Array<ColumnDefinitionType<T, K>>;
};

type TableRowsProps<T, K extends keyof T> = {
	data: Array<T>;
	columns: Array<ColumnDefinitionType<T, K>>;
};

const Table = <T, K extends keyof T>({
	data,
	columns,
}: TableProps<T, K>): JSX.Element => {
	return (
		<table className="w-full">
			<TableHeader columns={columns} />
			<TableRows data={data} columns={columns} />
		</table>
	);
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
				key={`headCell-${index}`}
				style={style}
			>
				{column.header}
			</th>
		);
	});

	return (
		<thead className="bg-zinc-50 dark:bg-zinc-700 border-b-2 border-zinc-200 dark:border-zinc-600">
			<tr>{headers}</tr>
		</thead>
	);
};

const TableRows = <T, K extends keyof T>({
	data,
	columns,
}: TableRowsProps<T, K>): JSX.Element => {
	const rows = data.map((row, index) => {
		return (
			<tr
				className="border-b-2 border-zinc-200 dark:border-zinc-600"
				key={`row-${index}`}
			>
				{columns.map((column, index2) => {
					return (
						<td
							className="p-2 text-sm text-left tracking-wide"
							key={`cell-${index2}`}
						>
							{String(row[column.key])}
						</td>
					);
				})}
			</tr>
		);
	});

	return <tbody>{rows}</tbody>;
};

export default Table;
