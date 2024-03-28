"use client";
import { on } from "node:events";
import type React from "react";

type Pagination<T> = {
	className?: string;
	currentPage: number;
	totalPages: number;
	numberOfPages: number[];
	setCurrentPage: (page: number) => void;
} & React.ComponentProps<"nav">;

export const Pagination = <T, K extends keyof T>({
	className,
	totalPages,
	currentPage,
	numberOfPages,
	setCurrentPage,
}: Pagination<T>): JSX.Element => {
	return (
		<nav>
			<ul>
				<li className="flex gap-3 pt-2">
					<button
						key={totalPages + 1}
						type="button"
						onClick={() => {
							if (currentPage === 1) return;
							setCurrentPage(currentPage - 1);
						}}
					>
						{"<"}
					</button>
					{numberOfPages.map((number) => (
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
						key={totalPages}
						type="button"
						onClick={() => {
							if (currentPage === totalPages) return;
							setCurrentPage(currentPage + 1);
						}}
					>
						{">"}
					</button>
				</li>
			</ul>
		</nav>
	);
};
