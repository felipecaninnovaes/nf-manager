"use client";
import React, { useState } from "react";
import Search from "./search";

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

type TableNavProps<T, K extends keyof T> = {
	data: Array<T>;
	columns: Array<ColumnDefinitionType<T, K>>;
	children?: React.ReactNode;
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
		<thead className="bg-shark-100 dark:bg-shark-700 border-b-2 border-shark-200 dark:border-shark-600">
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
				className="border-b-2 border-shark-200 dark:border-shark-600"
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

export const Table = <T, K extends keyof T>({
	data,
	columns,
	children,
}: TableNavProps<T, K>): JSX.Element => {
	const [currentPage, setCurrentPage] = React.useState(1);
	const [rowsPerPage, setRowsPerPage] = React.useState(10);
	const [search, setSearch] = useState("");

	const searchFilter = (rows: Array<T>, value: string) => {
		return rows.filter((row) => {
			return columns.some((column) => {
				return (
					String(row[column.key])
						.toLowerCase()
						.indexOf(value.toLowerCase()) > -1
				);
			});
		});
	};

	// Save
	const currentRowsSearch = searchFilter(data, search);

	const lastIndex = currentPage * rowsPerPage;
	const firstIndex = lastIndex - rowsPerPage;
	const currentRows = currentRowsSearch.slice(firstIndex, lastIndex);
	const npage = Math.ceil(currentRowsSearch.length / rowsPerPage);
	const numbers = Array.from({ length: npage }, (_, index) => index + 1);

	return (
		<div className="w-full">
			<div className="flex h-auto border-b-2 border-shark-200 dark:border-shark-600">
				<Search
					className="w-auto"
					onChange={(e) => setSearch(e.target.value)}
					value={search}
				/>
				<div className="flex align-middle px-0 py-2">{children}</div>
			</div>
			<table className="w-auto">
				<TableHeader columns={columns} />
				<TableRows data={currentRows} columns={columns} />
			</table>
			<div>
				<nav>
					<ul>
						<li className="flex gap-3 pt-2">
							<button
								key={npage + 1}
								type="button"
								onClick={() => {
									if (currentPage === 1) return;
									setCurrentPage(currentPage - 1);
								}}
							>
								{"<"}
							</button>
							{numbers.map((number) => (
								<button
									key={number}
									type="button"
									onClick={() => {
										setCurrentPage(number);
									}}
								>
									{number}
								</button>
							))}
							<button
								key={npage}
								type="button"
								onClick={() => {
									if (currentPage === npage) return;
									setCurrentPage(currentPage + 1);
								}}
							>
								{">"}
							</button>
						</li>
					</ul>
				</nav>
			</div>
		</div>
	);
};

export default Table;
