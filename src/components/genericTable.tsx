"use client";
import { Pagination } from "@/components/pagination";
import type { Collunms, Rows } from "@/libs/convert";
import { usePagination } from "@/libs/pagination";
import { useState } from "react";

type TableProps = {
	children?: React.ReactNode;
} & React.ComponentProps<"table">;

type TableHeadProps = {
	children?: React.ReactNode;
} & React.ComponentProps<"thead">;

type TableHeaderProps = {
	title: string;
	subtitle: string;
} & React.ComponentProps<"div">;

type TableRowProps = {
	tableRow: Rows[];
	children?: React.ReactNode;
} & React.ComponentProps<"tr">;

type TableCellProps = {
	children?: React.ReactNode;
} & React.ComponentProps<"td">;

type TableColunmProps = {
	colunm: Collunms[];
	children?: React.ReactNode;
} & React.ComponentProps<"tr">;

type TableBodyProps = {
	children?: React.ReactNode;
} & React.ComponentProps<"tbody">;

export function TableHeader({ title, subtitle }: TableHeaderProps) {
	return (
		<div className="pb-6">
			<h2 className="text-base font-semibold leading-7 text-shark-950 dark:text-shark-100">
				{title}
			</h2>
			<p className="mt-1 text-sm leading-6 text-shark-600 dark:text-shark-200">
				{subtitle}
			</p>
		</div>
	);
}

function Table({ children, ...props }: TableProps) {
	return (
		<div className="overflow-auto hidden md:block">
			<table className="w-full" {...props}>
				{children}
			</table>
		</div>
	);
}

function TableHead({ children, ...props }: TableHeadProps) {
	return (
		<thead
			className="w-100 p-2 text-sm font-semibold uppercase text-left whitespace-nowrap tracking-wide bg-shark-50 dark:bg-shark-700 border-shark-200 dark:border-shark-600 border-b-2 "
			{...props}
		>
			{children}
		</thead>
	);
}

function TableColunm({ colunm, children, ...props }: TableColunmProps) {
	return (
		<tr>
			{colunm.map((item, index) => (
				<th
					key={item.key + index.toFixed()}
					className="w-20 p-3 text-sm font-semibold tracking-wide text-left"
				>
					{item.value}
				</th>
			))}
		</tr>
	);
}

function TableRow({ tableRow, children, ...props }: TableRowProps) {
	return tableRow.map((item, index) => (
		<tr
			key={item.value[0].value + index.toFixed()}
			{...props}
			className="w-100 p-2 text-sm uppercase whitespace-nowrap text-left tracking-wide bg-shark-50 dark:bg-shark-700 border-shark-200 dark:border-shark-600 border-b-2 "
		>
			{item.value.map((item, index) => (
				<TableCell key={item.key}>{item.value}</TableCell>
			))}
		</tr>
	));
}

function TableCell({ children, ...props }: TableCellProps) {
	return (
		<td
			className="w-100 p-3 text-sm text-gray-700 whitespace-nowrap"
			{...props}
		>
			{children}
		</td>
	);
}

function TableBody({ children, ...props }: TableBodyProps) {
	return (
		<tbody className="divide-y divide-gray-100" {...props}>
			{children}
		</tbody>
	);
}

export function Tables({
	collunms,
	rows,
}: { collunms: Collunms[]; rows: Rows[] }) {
	"use client";
	const [currentPage, setCurrentPage] = useState(1);

	const paginationResult = usePagination({
		data: rows,
		itemsPerPage: 5,
		currentPage,
		setCurrentPage,
	});
	return (
		<div>
			<Table>
				<TableHead>
					<TableColunm colunm={collunms} />
				</TableHead>
				<TableBody>
					<TableRow tableRow={paginationResult.currentData} />
				</TableBody>
			</Table>
			<Pagination
				currentPage={paginationResult.currentPage}
				numberOfPages={paginationResult.numbersOfPages}
				totalPages={paginationResult.totalPages}
				setCurrentPage={paginationResult.handlePageChange}
			/>
		</div>
	);
}
